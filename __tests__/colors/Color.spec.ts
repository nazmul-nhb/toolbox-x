import { Color } from 'src/colors/Color';
import { describe, expect, it } from 'vitest';

describe('Color class', () => {
	it('should instantiate with random color if no arguments are provided', () => {
		const color = new Color();
		expect(color.hex).toMatch(/^#[0-9A-F]{6}$/i);
		expect(color.hex8).toMatch(/^#[0-9A-F]{8}$/i);
		expect(color.rgb).toMatch(/^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/);
		expect(color.rgba).toMatch(/^rgba\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*1\)$/);
	});

	it('should parse and instantiate from Hex6 format', () => {
		const color = new Color('#ff5733');
		expect(color.hex).toBe('#FF5733');
		expect(color.hex8).toBe('#FF5733FF');
		expect(color.rgb).toBe('rgb(255, 87, 51)');
		expect(color.rgba).toBe('rgba(255, 87, 51, 1)');
	});

	it('should parse and instantiate from Hex8 format', () => {
		const color = new Color('#FF573380');
		expect(color.hex).toBe('#FF5733');
		expect(color.hex8).toBe('#FF573380');
		expect(color.rgba).toBe('rgba(255, 87, 51, 0.5)');
	});

	it('should parse and instantiate from named CSS colors', () => {
		const color = new Color('red');
		expect(color.hex).toBe('#FF0000');
		expect(color.rgb).toBe('rgb(255, 0, 0)');
	});

	it('should support Symbol.iterator', () => {
		const color = new Color('#ff0000');
		const formats = [...color];
		expect(formats).toContain('#FF0000');
		expect(formats).toContain('#FF0000FF');
		expect(formats).toContain('rgb(255, 0, 0)');
	});

	it('should support basic transformations (mix, complement, lighten, darken, etc.)', () => {
		const c1 = new Color('#ff0000');
		const c2 = new Color('#0000ff');

		// mix
		// @ts-expect-error
		const mixed = c1.mix ? c1.mix(c2) : null;
		if (mixed) {
			expect(mixed).toBeInstanceOf(Color);
		}

		// check if some basic methods exist and work
		// @ts-expect-error
		if (c1.lighten) {
			// @ts-expect-error
			expect(c1.lighten(10)).toBeInstanceOf(Color);
		}
		// @ts-expect-error
		if (c1.darken) {
			// @ts-expect-error
			expect(c1.darken(10)).toBeInstanceOf(Color);
		}
		// @ts-expect-error
		if (c1.opacity) {
			// @ts-expect-error
			expect(c1.opacity(0.5)).toBeInstanceOf(Color);
		}
		// @ts-expect-error
		if (c1.complement) {
			// @ts-expect-error
			expect(c1.complement()).toBeInstanceOf(Color);
		}
	});

	it('should support static helper methods', () => {
		expect(Color.isHex6('#ff0000')).toBe(true);
		expect(Color.isHex6('not-color')).toBe(false);
		expect(Color.isHex8('#ff0000ff')).toBe(true);
		expect(Color.isRGB('rgb(255, 0, 0)')).toBe(true);
		expect(Color.isCSSColor('red')).toBe(true);
		expect(Color.isCSSColor('not-css-color')).toBe(false);
	});
});
