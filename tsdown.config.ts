import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: [
		'src/index.ts',
		'src/colors/index.ts',
		'src/converter/index.ts',
		'src/date/index.ts',
		'src/dom/index.ts',
		'src/guards/index.ts',
		'src/hash/index.ts',
		'src/http-status/index.ts',
		'src/pluralizer/index.ts',
		'src/stylog/index.ts',
		'src/verbalizer/index.ts',
		'src/change-case.ts',
		'src/constants.ts',
		'src/paginator.ts',
		'src/types/*.ts',
	],
	globalName: 'Toolbox',
	format: ['esm', 'cjs'],
	dts: true,
	minify: false,
	exports: true,
	unbundle: false,
	treeshake: true,
	checks: {
		pluginTimings: false,
	},
	banner: `/**
 * Copyright 2026 - present Nazmul Hassan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
`,
});
