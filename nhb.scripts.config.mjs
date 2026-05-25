// @ts-check

import { defineScriptConfig } from 'nhb-scripts';
import { convertStringCase } from 'toolbox-x/change-case';
import { isCamelCase, isPascalCase } from 'toolbox-x/guards';

export default defineScriptConfig({
	commit: {
		runFormatter: false,
		emojiBeforePrefix: true,
		commitTypes: {
			custom: [
				{ emoji: '🚀', type: 'init' },
				{ emoji: '💩', type: 'dump' },
				{ emoji: '🧠', type: 'ideas' },
				{ emoji: '📝', type: 'draft' },
				{ emoji: '🔣', type: 'types' },
				{ emoji: '🔡', type: 'tsdoc' },
			],
		},
	},
	module: {
		force: false,
		defaultTemplate: 'docs',
		templates: {
			docs: {
				createFolder: false,
				destination: 'docs/content/docs',
				files: generateDocs,
			},
		},
	},
	// count: {
	// 	defaultPath: 'node_modules/nhb-toolbox/dist/esm',
	// 	excludePaths: ['node_modules', 'dist', '.VSCodeCounter'],
	// },
});

/**
 *  @import { FileGenerator } from 'nhb-scripts';
 */

/** @type { FileGenerator } */
function generateDocs(docTitle) {
	const camelTitle =
		isCamelCase(docTitle) || isPascalCase(docTitle)
			? docTitle
			: convertStringCase(docTitle, 'camelCase');

	return [
		{
			name: `${convertStringCase(docTitle, 'kebab-case')}.mdx`,
			content: `---
title: ${camelTitle}
description: ${camelTitle} Description.
---

## \`${camelTitle}()\`
`,
		},
	];
}
