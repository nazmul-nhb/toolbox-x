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

	it('should support static helper methods', () => {
		expect(Color.isHex6('#ff0000')).toBe(true);
		expect(Color.isHex6('not-color')).toBe(false);
		expect(Color.isHex8('#ff0000ff')).toBe(true);
		expect(Color.isRGB('rgb(255, 0, 0)')).toBe(true);
		expect(Color.isCSSColor('red')).toBe(true);
		expect(Color.isCSSColor('not-css-color')).toBe(false);
		expect(Color.isHSL('not-hsl')).toBe(false);
		expect(Color.isHSLA('not-hsla')).toBe(false);
	});
});

describe('Instantiate from Other color formats', () => {
	it('should instantiate from Hex6 format', () => {
		const color = new Color('#ff0000');
		expect(color.hex).toBe('#FF0000');
		expect(color.hex8).toBe('#FF0000FF');
		expect(color.rgb).toBe('rgb(255, 0, 0)');
		expect(color.rgba).toBe('rgba(255, 0, 0, 1)');
	});

	it('should instantiate from Hex8 format', () => {
		const color = new Color('#FF0000FF');
		expect(color.hex).toBe('#FF0000');
		expect(color.hex8).toBe('#FF0000FF');
		expect(color.rgba).toBe('rgba(255, 0, 0, 1)');
	});

	it('should instantiate from RGB format', () => {
		const color = new Color('rgb(255, 0, 0)');
		expect(color.hex).toBe('#FF0000');
		expect(color.hex8).toBe('#FF0000FF');
		expect(color.rgb).toBe('rgb(255, 0, 0)');
		expect(color.rgba).toBe('rgba(255, 0, 0, 1)');
	});

	it('should instantiate from RGBA format', () => {
		const color = new Color('rgba(255, 0, 0, 1)');
		expect(color.hex).toBe('#FF0000');
		expect(color.hex8).toBe('#FF0000FF');
		expect(color.rgb).toBe('rgb(255, 0, 0)');
		expect(color.rgba).toBe('rgba(255, 0, 0, 1)');
	});

	it('should instantiate from HSL format', () => {
		const color = new Color('hsl(0, 100%, 50%)');
		expect(color.hex).toBe('#FF0000');
		expect(color.hex8).toBe('#FF0000FF');
		expect(color.rgb).toBe('rgb(255, 0, 0)');
		expect(color.rgba).toBe('rgba(255, 0, 0, 1)');
	});

	it('should instantiate from HSLA format', () => {
		const color = new Color('hsla(0, 100%, 50%, 1)');
		expect(color.hex).toBe('#FF0000');
		expect(color.hex8).toBe('#FF0000FF');
		expect(color.rgb).toBe('rgb(255, 0, 0)');
		expect(color.rgba).toBe('rgba(255, 0, 0, 1)');
	});

	it('should throw exception if color is not valid', () => {
		// @ts-expect-error
		expect(() => new Color('not-color')).toThrow(TypeError);
	});
});

describe('Protocol Methods', () => {
	it('should support toString()', () => {
		const color = new Color('#ff0000');
		expect(color.toString()).toBe('#FF0000FF');
	});

	it('should support toPrimitive hint', () => {
		const color = new Color('#ff0000');
		expect(`${color}`).toBe('#FF0000FF');
		expect(+color).toBe(16711680);
	});

	it('should support JSON.stringify()', () => {
		const color = new Color('#ff0000');
		expect(JSON.stringify(color)).toBe('"#FF0000FF"');
	});
});

describe('Manipulate Colors', () => {
	it('should apply opacity', () => {
		const color = new Color('#ff0000');
		const alpha50 = color.applyOpacity(50);
		expect(alpha50.hex8).toBe('#FF000080');
	});

	it('should apply darkness', () => {
		const color = new Color('#ff0000');
		const darker = color.applyDarkness(20);
		expect(darker.hex8).toBe('#990000FF');
	});

	it('should apply brightness', () => {
		const color = new Color('#ff0000');
		const brighter = color.applyBrightness(30);
		expect(brighter.hex8).toBe('#FF9999FF');
	});

	it('should apply dullness', () => {
		const color = new Color('#ff0000');
		const duller = color.applyDullness(50);
		expect(duller.hex8).toBe('#BF4040FF');
	});

	it('should apply white shade', () => {
		const color = new Color('#ff0000');
		const whiter = color.applyWhiteShade(40);
		expect(whiter.hex8).toBe('#E08585FF');
	});

	// it('should apply black shade', () => {
	// 	const color = new Color('#ff0000');
	// 	const blacker = color.applyBlackShade(40);
	// 	expect(blacker.hex8).toBe('#FF000080');
	// });

	it('should blend with another color', () => {
		const color = new Color('#ff0000');
		const blended = color.blendWith('#00ff00');
		expect(blended.hex).toBe('#808000');
	});

	it('should blend with another color with weight', () => {
		const color = new Color('#ff0000');
		const blended = color.blendWith('#00ff00', 0.5);
		expect(blended.hex).toBe('#808000');
	});

	it('should get complementary color', () => {
		const color = new Color('#ff0000');
		const complement = color.getComplementaryColor();
		expect(complement.hex8).toBe('#00FFFFFF');
	});

	it('should get analogous colors', () => {
		const color = new Color('#ff0000');
		const analogous = color.getAnalogousColors();
		expect(analogous[0].hex).toBe('#FF0000');
		expect(analogous[1].hex).toBe('#FF0080');
		expect(analogous[2].hex).toBe('#FF8000');
	});

	it('should get triad colors', () => {
		const color = new Color('#ff0000');
		const triad = color.getTriadColors();
		expect(triad[0].hex).toBe('#FF0000');
		expect(triad[1].hex).toBe('#00FF00');
		expect(triad[2].hex).toBe('#0000FF');
	});

	it('should get tetrad colors', () => {
		const color = new Color('#ff0000');
		const tetrad = color.getTetradColors();
		expect(tetrad[0].hex).toBe('#FF0000');
		expect(tetrad[1].hex).toBe('#80FF00');
		expect(tetrad[2].hex).toBe('#00FFFF');
		expect(tetrad[3].hex).toBe('#8000FF');
	});

	it('should generate palette', () => {
		const color = new Color('#ff0000');
		const palette = color.generatePalette(4);
		expect(palette[0].hex8).toBe('#FF0000FF');
		expect(palette[1].hex8).toBe('#80FF00FF');
		expect(palette[2].hex8).toBe('#00FFFFFF');
		expect(palette[3].hex8).toBe('#8000FFFF');
	});

	it('should generate palette with step', () => {
		const color = new Color('#ff0000');
		const palette = color.generatePalette(4, 90);
		expect(palette[0].hex8).toBe('#FF0000FF');
		expect(palette[1].hex8).toBe('#80FF00FF');
		expect(palette[2].hex8).toBe('#00FFFFFF');
		expect(palette[3].hex8).toBe('#8000FFFF');
	});

	it('should get WCAG rating', () => {
		const color = new Color('#ff0000');
		const rating = color.getWCAGRating('#00ff00');
		expect(rating).toBe('Fail');
		const rating2 = new Color('white').getWCAGRating('crimson');
		expect(rating2).toBe('AA');
		const rating3 = new Color('black').getWCAGRating('white');
		expect(rating3).toBe('AAA');
	});

	it('should determine if color is light', () => {
		const color = new Color('#ff0000');
		expect(color.isLightColor()).toBe(false);
		expect(color.isLightColor()).toBe(false);
	});
});
