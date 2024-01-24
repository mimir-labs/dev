#!/usr/bin/env node
// Copyright 2023-2024 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { importRelative } from './import.mjs';

await importRelative('eslint', 'eslint/bin/eslint.js');
