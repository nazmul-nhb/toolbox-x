import {
	applyOpacityToHex,
	extractAlphaColorValues,
	extractSolidColorValues,
	percentToHex,
} from 'src/colors/utils';
import { describe, expect, it } from 'vitest';

describe('colors utility functions', () => {
	it('should apply opacity to Hex colors', () => {
		expect(applyOpacityToHex('#ff0000', 50)).toBe('#FF000080');
		expect(applyOpacityToHex('#ff0000', 100)).toBe('#FF0000FF');
		expect(applyOpacityToHex('#ff0000', 0)).toBe('#FF000000');
	});

	it('should convert percentage to hex string', () => {
		expect(percentToHex(100)).toBe('FF');
		expect(percentToHex(50)).toBe('80');
		expect(percentToHex(0)).toBe('00');
	});

	it('should extract solid color values from a string representation', () => {
		expect(extractSolidColorValues('rgb(255, 87, 51)')).toEqual([255, 87, 51]);
		expect(extractSolidColorValues('hsl(10, 100%, 60%)')).toEqual([10, 100, 60]);
	});

	it('should extract alpha color values from a string representation', () => {
		expect(extractAlphaColorValues('rgba(255, 87, 51, 0.5)')).toEqual([255, 87, 51, 0.5]);
		expect(extractAlphaColorValues('hsla(10, 100%, 60%, 0.8)')).toEqual([10, 100, 60, 0.8]);
	});
});
