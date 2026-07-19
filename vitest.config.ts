import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['__tests__/**/*.spec.ts'],
		coverage: {
			provider: 'v8',
			include: ['src/**'],
			exclude: [
				'**/**/seasons.ts',
				'**/**/countries.ts',
				'**/**/*/constants.ts',
				'**/**/*/*.log.ts',
				'**/types/*.ts',
			],
			reporter: ['text', 'json', 'html'],
		},
	},
	resolve: {
		alias: {
			src: fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
