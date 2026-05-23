import { convertHexToRgb } from 'src/colors/convert';
import { isCSSColor } from 'src/colors/guards';
import { ANSI_TEXT_STYLES, CSS_TEXT_STYLES } from 'src/stylog/constants';
import type { Hex, SolidValues } from 'src/types/colors';
import type { AnsiSequence, BGColor, TextStyle } from 'src/types/stylog';

/**
 * * Detects color support level of the current terminal/shell.
 * @returns `0 = none`, `1 = basic (16 colors)`, `2 = 256 colors`, `3 = truecolor`
 */
export function detectColorSupport(): 0 | 1 | 2 | 3 {
	if ('NO_COLOR' in process.env) return 0; // explicit opt-out
	if ('FORCE_COLOR' in process.env) return 3; // explicit opt-in (max)

	if (!process.stdout.isTTY) return 0;

	const term = process.env.TERM ?? process.env.COLORTERM ?? '';

	if (term === 'dumb') return 0;
	if (/\b256(color)?\b/i.test(term)) return 2;
	if (/\btruecolor\b|\b24bit\b/i.test(term)) return 3;

	return 1; // fallback to basic 16-color
}

/**
 * * Convert `RGB` color components into an `ANSI` escape code sequence.
 *
 * @param r Red component (`0-255`).
 * @param g Green component (`0-255`).
 * @param b Blue component (`0-255`).
 * @param isBg Whether the color should be applied as background (`true`) or foreground (`false`). Defaults to `false`.
 * @returns Tuple containing the opening and closing `ANSI` escape sequences.
 */
export function rgbToAnsi(r: number, g: number, b: number, isBg = false): AnsiSequence {
	const open = `\x1b[${isBg ? 48 : 38};2;${r};${g};${b}m`;
	const close = `\x1b[${isBg ? 49 : 39}m`;
	return [open, close];
}

/**
 * * Convert a HEX color into an `ANSI` escape code sequence.
 *
 * @param hex HEX color string. e.g. `#000000`
 * @param isBg Whether the color should be applied as background (`true`) or foreground (`false`). Defaults to `false`.
 * @returns Tuple containing the opening and closing `ANSI` escape sequences.
 */
export function hexToAnsi(hex: Hex, isBg = false): AnsiSequence {
	const rgb = (convertHexToRgb(hex).match(/\d+/g) || []).map(parseFloat) as SolidValues;

	return rgbToAnsi(...rgb, isBg);
}

/** * Check if a string represents `bgColor` with valid CSS color name. */
export function isBGColor(value: string): value is BGColor {
	return value?.startsWith('bg') && isCSSColor(value.slice(2).toLowerCase());
}

/** * Check if a string represent `TextStyle` used in `LogStyler`. */
export function isTextStyle(value: string): value is TextStyle {
	return value in CSS_TEXT_STYLES || value in ANSI_TEXT_STYLES;
}
