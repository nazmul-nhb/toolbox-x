import { generateRandomColor, generateRandomHSLColor } from 'src/colors/random';
import { describe, expect, it } from 'vitest';

describe('colors random utils', () => {
	it('should generate random color in different formats', () => {
		const hex = generateRandomColor({ colorType: 'hex' });
		expect(hex).toMatch(/^#[0-9A-F]{6}$/i);

		const rgb = generateRandomColor({ colorType: 'rgb' });
		expect(rgb).toMatch(/^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/);

		const hsl = generateRandomColor({ colorType: 'hsl' });
		expect(hsl).toMatch(/^hsl\(\d{1,3},\s*\d{1,3}%,\s*\d{1,3}%\)$/);
	});

	it('should generate random HSL color', () => {
		const hsl = generateRandomHSLColor();
		expect(hsl).toMatch(/^hsl\(\d{1,3},\s*\d{1,3}%,\s*\d{1,3}%\)$/);
	});
});
