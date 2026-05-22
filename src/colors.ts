export { Color, Colour } from './colors/Color';
export {
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
} from './colors/convert';
// ! Color Utilities
export { getColorForInitial } from './colors/initials';
export {
	generateRandomColor,
	generateRandomColor as getRandomColor,
	generateRandomColorInHexRGB,
	generateRandomHSLColor as generateRandomHSL,
	generateRandomHSLColor,
	generateRandomHSLColor as getRandomHSL,
} from './colors/random';

export {
	applyOpacityToHex,
	extractAlphaColorValues,
	extractSolidColorValues,
	percentToHex,
} from './colors/utils';
