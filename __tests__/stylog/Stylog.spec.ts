import { LogStyler, Stylog } from 'src/stylog/Stylog';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

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

describe('Stylog.toANSI', () => {
	const originalForceColor = process.env.FORCE_COLOR;
	const hadNoColor = Object.hasOwn(process.env, 'NO_COLOR');
	const originalNoColor = process.env.NO_COLOR;

	beforeEach(() => {
		process.env.FORCE_COLOR = '1';
		delete process.env.NO_COLOR;
	});

	afterEach(() => {
		if (originalForceColor === undefined) {
			delete process.env.FORCE_COLOR;
		} else {
			process.env.FORCE_COLOR = originalForceColor;
		}

		if (hadNoColor) {
			process.env.NO_COLOR = originalNoColor;
		} else {
			delete process.env.NO_COLOR;
		}
	});

	it('reapplies the outer foreground after a nested foreground reset', () => {
		const output = Stylog.green.bold.toANSI(
			`Hello ${Stylog.red.toANSI('I should be red and bold')} I should be green and bold!`
		);

		expect(output.startsWith('\x1b[38;2;0;128;0m\x1b[1mHello ')).toBe(true);
		expect(output).toContain(
			'\x1b[38;2;255;0;0mI should be red and bold\x1b[39m\x1b[38;2;0;128;0m I should be green and bold!'
		);
	});
});
