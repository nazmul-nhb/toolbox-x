import { isNotEmptyObject } from 'src/guards/non-primitives';
import { isNonEmptyString, isNumber } from 'src/guards/primitives';
import type { RandomIdOptions, TruncateOptions } from 'src/types/string';

/**
 * * Utility to truncate a string to a specified length.
 *
 * @param str The string to truncate.
 * @param maxLength The maximum length of the truncated string. Defaults to `100`.
 * @returns Truncated string with ellipsis (`'...'`) (only if it has more length than `maxLength`).
 */
export function truncateString(str: string, maxLength?: number): string;

/**
 * * Utility to truncate a string to a specified length using options.
 *
 * @param str The string to truncate.
 * @param options Options for truncating the string.
 * @returns Truncated string based on the {@link options}.
 */
export function truncateString(str: string, options?: TruncateOptions): string;

/** Utility to truncate a string to a specified length.
 *
 * @param str The string to truncate.
 * @param optionsOrLength The maximum length of the truncated string or options.
 * @returns Truncated string based on provided options.
 */
export function truncateString(str: string, optionsOrLength?: number | TruncateOptions) {
	if (!isNonEmptyString(str)) return '';

	let maxLength = 100,
		suffix = '...',
		trim = false;

	if (isNumber(optionsOrLength) && optionsOrLength > 0) {
		maxLength = optionsOrLength;
	} else if (isNotEmptyObject(optionsOrLength)) {
		maxLength = optionsOrLength?.maxLength ?? maxLength;
		suffix = optionsOrLength?.suffix ?? suffix;
		trim = optionsOrLength?.trim ?? trim;
	}

	const trimmedString = trim ? trimString(str) : str;

	if (!trimmedString) return '';

	if (trimmedString.length <= maxLength) return trimmedString;

	return trimmedString.slice(0, maxLength).concat(suffix);
}

/**
 * * Generates a random alphanumeric (16 characters long, this length is customizable in the options) ID string composed of an optional `prefix`, `suffix`, a `timestamp`, `caseOption` and a customizable `separator`.
 *
 * @param options Configuration options for random ID generation.
 * @returns The generated ID string composed of the random alphanumeric string of specified length with optional `timeStamp`, `prefix`, and `suffix`, `caseOption` and `separator`.
 *
 * @see {@link https://toolbox-x.vercel.app/docs/utils/hash/uuid uuid} for `uuid` generation
 * @see {@link https://toolbox-x.vercel.app/docs/utils/hash/random-numeric randomHex} for random numeric string generation
 * @see {@link https://toolbox-x.vercel.app/docs/utils/hash/random-hex randomHex} for random hexadecimal string generation
 *
 * @example
 * // Generate an ID with all default options
 * const id = generateRandomID();
 * // Example output: "swo8ckxwsc13w7xw"
 *
 * @example
 * // Generate an ID with a custom prefix and separator
 * const id = generateRandomID({ prefix: 'ID', separator: '-' });
 * // Example output: "ID-eh1ymwfxzwas9jte"
 *
 * @example
 * // Generate an ID with a timestamp
 * const id = generateRandomID({ timeStamp: false });
 * // Example output: "1764610287501pd3r4w85qwkuulgf"
 *
 * @example
 * // Generate an ID with a custom length for the random string
 * const id = generateRandomID({ length: 8 });
 * // Example output: "i623uiev"
 *
 * @example
 * // Generate an ID with a custom suffix
 * const id = generateRandomID({ suffix: 'END' });
 * // Example output: "3csf27a4800rbli9END"
 *
 * @example
 * // Generate an ID with a uppercase random string
 * const id = generateRandomID({ caseOption: "upper" });
 * // Example output: "H0VNU6O8XV1Y30HG"
 *
 * @example
 * // Generate an ID with all options customized
 * const id = generateRandomID({
 *   prefix: 'ID',
 *   suffix: 'END',
 *   timeStamp: true,
 *   length: 10,
 *   separator: '-',
 *   caseOption: "upper"
 * });
 * // Example output: "ID-1764610471474-4KSL51IB91-END"
 */
export function generateRandomID(options?: RandomIdOptions): string {
	const {
		prefix = '',
		suffix = '',
		timeStamp = false,
		length = 16,
		separator = '',
		caseOption = null,
	} = options || {};

	// generate timestamp
	const date = timeStamp ? Date.now() : '';

	// Generate a random string of alphanumeric characters
	const randomString = Array.from({ length }, () =>
		Math.random().toString(36).slice(2, 3)
	).join('');

	const ID = [prefix?.trim(), date, randomString, suffix?.trim()]
		.filter(Boolean)
		.join(separator);

	switch (caseOption) {
		case 'upper':
			return ID.toUpperCase();
		case 'lower':
			return ID.toLowerCase();
		default:
			return ID;
	}
}

/**
 * * Trims all whitespaces in a string.
 *
 * @param input The string to trim.
 * @returns Trimmed string.
 */
export function trimString(input: string): string;

/**
 * * Trims all whitespaces in an array of strings.
 *
 * @param input The array of strings to trim.
 * @returns Trimmed array of strings.
 */
export function trimString(input: string[]): string[];

/**
 * * Trims all whitespaces in a string or an array of strings.
 *
 * @param input String or array of strings.
 * @returns Trimmed string or array of strings.
 */
export function trimString(input: string | string[]): string | string[] {
	if (!input) return '';

	// If the input is a string, trim each word
	if (isNonEmptyString(input)) {
		return input.trim().replace(/\s+/g, ' ');
	}

	// If the input is an array of strings, trim each string in the array
	if (Array.isArray(input)) {
		return input.map((str) =>
			isNonEmptyString(str) ? str.trim().replace(/\s+/g, ' ') : str
		);
	}

	throw new TypeError('Expected string or array of strings!', {
		cause: 'Invalid Input Type',
	});
}
