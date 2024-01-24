#!/usr/bin/env node
// Copyright 2023-2024 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { execSync } from './execute.mjs';

console.log('$ mimir-dev-bump-version', process.argv.slice(2).join(' '));

execSync('mimir-exec-changeset version');

execSync('yarn');
