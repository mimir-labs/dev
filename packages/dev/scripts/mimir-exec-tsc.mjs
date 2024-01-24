#!/usr/bin/env node
// Copyright 2023-2024 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { importDirect } from './import.mjs';

await importDirect('tsc', 'typescript/lib/tsc.js');
