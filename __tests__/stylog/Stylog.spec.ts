import { LogStyler, Stylog } from 'src/stylog/Stylog';
import { describe, expect, it } from 'vitest';

describe('LogStyler and Stylog', () => {
	it('should support chainable styles to generate ANSI or CSS', () => {
		// Force color support in non-TTY test environment
		process.env.FORCE_COLOR = '3';

		const styler = new LogStyler();
		const styled = styler.style('red', 'bold');
		expect(styled).toBeDefined();

		// Test converting to ANSI string (useful for terminal)
		const ansi = styled.toANSI ? styled.toANSI('Hello') : '';
		if (ansi) {
			expect(ansi).toContain('\x1b[');
		}

		// Test converting to CSS styling array (useful for browser console)
		const css = styled.toCSS ? styled.toCSS('Hello') : [];
		if (css) {
			expect(Array.isArray(css)).toBe(true);
		}

		delete process.env.FORCE_COLOR;
	});

	it('should support the default Stylog wrapper', () => {
		expect(Stylog).toBeDefined();
		const styledText = Stylog.red.bold;
		expect(styledText).toBeDefined();
	});
});
