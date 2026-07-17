import {
	convertColorCode,
	convertHex8ToHsla,
	convertHex8ToRgba,
	convertHexToHsl,
	convertHexToRgb,
	convertHslaToHex8,
	convertHslaToRgba,
	convertHslToHex,
	convertHslToRgb,
	convertRgbaToHex8,
	convertRgbaToHsla,
	convertRgbToHex,
	convertRgbToHsl,
	convertRgbToRgba,
} from 'src/colors/convert';
import type { Hex6, Hex8 } from 'src/types/colors';
import { describe, expect, it } from 'vitest';

describe('colors convert utils', () => {
	it('should convert Hex to Rgb and vice versa', () => {
		expect(convertHexToRgb('#ff5733')).toBe('rgb(255, 87, 51)');
		expect(convertRgbToHex(255, 87, 51)).toBe('#FF5733');
	});

	it('should convert Hex to Hsl and vice versa', () => {
		expect(convertHexToHsl('#ff5733')).toBe('hsl(11, 100%, 60%)');
		expect(convertHslToHex(11, 100, 60)).toBe('#FF5833');
	});

	it('should convert Hsl to Rgb and vice versa', () => {
		expect(convertHslToRgb(0, 100, 50)).toBe('rgb(255, 0, 0)');
		expect(convertRgbToHsl(255, 0, 0)).toBe('hsl(0, 100%, 50%)');
	});

	it('should convert Hex8 to Rgba and vice versa', () => {
		expect(convertHex8ToRgba('#ff573380' as Hex8)).toBe('rgba(255, 87, 51, 0.5)');
		expect(convertRgbaToHex8(255, 87, 51, 0.5)).toBe('#FF573380');
	});

	it('should convert Hex8 to Hsla and vice versa', () => {
		expect(convertHex8ToHsla('#ff573380' as Hex8)).toBe('hsla(11, 100%, 60%, 0.5)');
		expect(convertHslaToHex8(11, 100, 60, 0.5)).toBe('#FF583380');
	});

	it('should convert Hsla to Rgba and vice versa', () => {
		expect(convertHslaToRgba(0, 100, 50, 0.8)).toBe('rgba(255, 0, 0, 0.8)');
		expect(convertRgbaToHsla(255, 0, 0, 0.8)).toBe('hsla(0, 100%, 50%, 0.8)');
	});

	it('should convert Rgb to Rgba', () => {
		expect(convertRgbToRgba(255, 0, 0)).toBe('rgba(255, 0, 0, 1)');
		expect(convertRgbToRgba(255, 0, 0, 0.5)).toBe('rgba(255, 0, 0, 0.5)');
	});

	it('should convert general color code formats using convertColorCode', () => {
		const result = convertColorCode('#ff0000' as Hex6);
		expect(result).toEqual({
			rgb: 'rgb(255, 0, 0)',
			hsl: 'hsl(0, 100%, 50%)',
		});
	});
});
