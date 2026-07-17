import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['__tests__/**/*.spec.ts'],
		exclude: ['**/node_modules/**', '**/.git/**', '**/dist/**', '**/docs/**'],
		// setupFiles: '__tests__/setup.ts',
		coverage: {
			provider: 'v8',
			include: ['src/**'],
			exclude: ['**/**/seasons.ts'],
			reporter: ['text', 'json', 'html'],
		},
	},
	resolve: {
		alias: {
			src: fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
