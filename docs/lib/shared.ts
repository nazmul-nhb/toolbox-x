export const appName = 'Toolbox-X';
export const appLogo = '/chronos.png';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const ogImageSize = {
	width: 1200,
	height: 630,
};

export const gitConfig = {
	user: 'nazmul-nhb',
	repo: 'toolbox-x',
	branch: 'main',
};

export const titleDescription = {
	title: {
		absolute: `${appName} - A Versatile Utility Library for JavaScript and TypeScript`,
		default: `${appName} Documentation`,
		template: `%s » ${appName} Documentation`,
	},
	description: `${appName} - A versatile collection of smart, efficient, and reusable utility functions, classes and types for everyday development needs.`,
} as const;
