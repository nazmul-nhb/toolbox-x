export { Color, Color as Colour } from 'src/colors/Color';
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
} from 'src/colors/convert';
// ! Color Utilities
export { getColorForInitial } from 'src/colors/initials';
export {
	generateRandomColor,
	generateRandomColor as getRandomColor,
	generateRandomHSLColor as generateRandomHSL,
	generateRandomHSLColor,
	generateRandomHSLColor as getRandomHSL,
} from 'src/colors/random';

export {
	applyOpacityToHex,
	extractAlphaColorValues,
	extractSolidColorValues,
	percentToHex,
} from 'src/colors/utils';
