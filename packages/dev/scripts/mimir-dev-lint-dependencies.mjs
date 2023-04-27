#!/usr/bin/env node
// Copyright 2023-2023 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { getPackagesSync } from '@manypkg/get-packages';
import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

import { lintDependencies } from '@mimirdev/lint';
import { error, warn } from '@mimirdev/lint/feedback';

const { packages, rootPackage } = getPackagesSync(process.cwd());

console.log('$ mimir-dev-lint-dependencies', process.argv.slice(2).join(' '));

const argv = yargs(process.argv.slice(2))
  .options({
    fix: {
      description: 'Auto fix errors',
      type: 'boolean'
    }
  })
  .strict().argv;

(async () => {
  const errors = [];
  const warns = [];

  for (const pkg of packages) {
    process.chdir(pkg.dir);

    if (!fs.existsSync(path.join(process.cwd(), '.skip-build'))) {
      const { errors: _errors, warns: _warns } = await lintDependencies(pkg.relativeDir, argv.fix);

      errors.push(..._errors);
      warns.push(..._warns);
    }
  }

  process.chdir(rootPackage.dir);

  errors.forEach((e) => error(e));
  warns.forEach((w) => warn(w));

  if (errors.length > 0) {
    process.exit(1);
  }
})();
