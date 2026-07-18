import { _generateRandomHSL, _isSimilarToLast } from 'src/colors/helpers';
import { generateRandomColor, generateRandomHSLColor } from 'src/colors/random';
import type { HSL } from 'src/types/colors';
import { beforeEach, describe, expect, it, test, vitest } from 'vitest';

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

describe('generateRandomHSLColor', () => {
	beforeEach(() => {
		vitest.clearAllMocks();
	});

	test('should generate a valid HSL color string', () => {
		const color = generateRandomHSLColor();
		expect(color).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/);
	});

	test('should generate unique colors over multiple calls', () => {
		const colors = new Set();
		for (let i = 0; i < 100; i++) {
			colors.add(generateRandomHSLColor());
		}
		expect(colors.size).toBe(100);
	});

	test('should not generate colors similar to recent ones', () => {
		const recentColors = ['hsl(200, 80%, 60%)', 'hsl(201, 78%, 62%)'];
		let newColor: HSL;
		do {
			newColor = generateRandomHSLColor();
		} while (_isSimilarToLast(recentColors, newColor));
		expect(_isSimilarToLast(recentColors, newColor)).toBe(false);
	});
});

describe('_generateRandomHSL', () => {
	test('should generate a valid HSL color', () => {
		const color = _generateRandomHSL();
		expect(color).toMatch(/^hsl\(\d+, \d+%, \d+%\)$/);
	});
});

describe('_isSimilarToLast', () => {
	test('should return false if there are no recent colors', () => {
		expect(_isSimilarToLast([], 'hsl(200, 80%, 60%)')).toBe(false);
	});

	test('should return true for very similar colors', () => {
		const recentColors = ['hsl(200, 80%, 60%)'];
		expect(_isSimilarToLast(recentColors, 'hsl(205, 78%, 62%)')).toBe(true);
	});

	test('should return false for significantly different colors', () => {
		const recentColors = ['hsl(50, 40%, 30%)'];
		expect(_isSimilarToLast(recentColors, 'hsl(200, 80%, 60%)')).toBe(false);
	});
});
