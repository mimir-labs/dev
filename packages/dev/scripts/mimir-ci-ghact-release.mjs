#!/usr/bin/env node
// Copyright 2023-2024 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { execSync } from './execute.mjs';

console.log('$ mimir-ci-ghact-publish', process.argv.slice(2).join(' '));

function runClean() {
  execSync('yarn mimir-dev-clean-build');
}

function runCheck() {
  execSync('yarn lint');
}

function runTest() {
  execSync('yarn test');
}

function runBuild() {
  execSync('yarn build');
}

function runPublish() {
  execSync('yarn mimir-exec-changeset publish');
}

// perform the actual CI ops
runClean();
runCheck();
runTest();
runBuild();
runPublish();
