#!/usr/bin/env node
// Copyright 2023-2023 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { __dirname } from './dirname.mjs';
import { execSync } from './execute.mjs';

console.log('$ mimir-dev-run-prettier', process.argv.slice(2).join(' '));

execSync(`yarn mimir-exec-prettier --write ${__dirname}`);
