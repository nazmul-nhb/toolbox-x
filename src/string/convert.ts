import { isString } from 'src/guards/primitives';
import { trimString } from 'src/string/basics';
import type { HtmlToTextOptions, MaskOptions } from 'src/types/string';

/**
 * * Replaces all occurrences of a string or pattern in the given input string.
 *
 * - If `find` is a string, it is converted into a global regular expression (`/find/g`).
 * - If `find` is a `RegExp`, the global (`g`) flag is ensured.
 * - Trims the input before performing replacements.
 *
 * @param input - The string in which replacements should be performed.
 * @param find - The substring or regex pattern to search for.
 * @param replace - The string to replace matches with.
 * @returns The modified/refined string with replacements applied.
 */
export const replaceAllInString = (
	input: string,
	find: string | RegExp,
	replace: string
): string => {
	const trimmedString = trimString(input);

	const regex = isString(find)
		? new RegExp(find, 'g')
		: new RegExp(find, find?.flags.includes('g') ? find?.flags : `${find?.flags}g`);

	return trimmedString?.replace(regex, replace);
};

/**
 * * Converts a string into a URL-friendly slug.
 * @param input - The string to be converted.
 * @returns The slugified string.
 */
export const slugifyString = (input: string): string => {
	return trimString(normalizeString(input))
		?.toLowerCase()
		?.replace(/[^a-z0-9]+/g, '-')
		?.replace(/^-+|-+$/g, '');
};

/**
 * * Masks part of a string for privacy.
 * @param input - The string to mask.
 * @param options - Options for masking a string.
 * @returns The masked string.
 */
export const maskString = (input: string, options?: MaskOptions): string => {
	const { start = 1, end = 1, trim = false, maskCharacter = '*' } = options || {};

	const trimmedString = trim ? trimString(input) : input;

	if (trimmedString?.length <= start + end) {
		return maskCharacter?.repeat(trimmedString?.length);
	}

	return (
		trimmedString.slice(0, start) +
		maskCharacter?.repeat(trimmedString?.length - start - end) +
		(end > 0 ? trimmedString.slice(-end) : '')
	);
};

/**
 * * Reverses a given string.
 * @param input - The string to reverse.
 * @returns The reversed string.
 *
 * @remarks It {@link trimString trims} the whitespace of the input string before reversing it.
 */
export const reverseString = (input: string): string => {
	const trimmedString = trimString(input);

	return trimmedString?.split('')?.reverse()?.join('');
};

/**
 * * Normalizes a string by removing diacritics (accents).
 * @param str The input string.
 * @returns The normalized string.
 */
export function normalizeString(str: string): string {
	return str?.normalize('NFD')?.replace(/[\u0300-\u036f]/g, '');
}

/**
 * * Extracts all email addresses from a string.
 * @param str The input string.
 * @returns An array of extracted email addresses.
 */
export function extractEmails(str: string): string[] {
	return str?.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
}

/**
 * * Extracts all URLs from a string.
 * @param str The input string.
 * @returns An array of extracted URLs.
 */
export function extractURLs(str: string): string[] {
	return str?.match(/https?:\/\/[^\s/$.?#].[^\s]*/g) || [];
}

/**
 * * Returns a grammatically correct unit string, optionally prefixed with the number.
 *
 * @remarks For complex and versatile pluralization, please refer to {@link https://toolbox-x.nazmul-nhb.dev/docs/utils/string/pluralizer pluralizer} or {@link https://toolbox-x.nazmul-nhb.dev/docs/classes/pluralizer Pluralizer Class} instead.
 *
 * @param count The numeric value to determine singular or plural.
 * @param unit The unit name (e.g., "day", "hour").
 * @param withNumber Whether to prefix the count before the unit. Defaults to `true`.
 * @returns Formatted unit string like `"1 day"`, `"2 months"`, or `"hour"`.
 */
export function formatUnitWithPlural(count: number, unit: string, withNumber = true): string {
	const abs = Math.abs(count);
	const pluralized = abs === 1 ? unit : `${unit}s`;

	return withNumber ? `${count} ${pluralized}` : pluralized;
}

/**
 * * Converts HTML into plain text.
 *
 * @description
 * This utility removes HTML tags while attempting to preserve the document's readable structure.
 * Unlike a simple tag stripper, it can optionally convert line-break tags,
 * preserve block-level separation, decode common HTML entities, and normalize whitespace.
 *
 * @remarks
 * - This function is dependency-free and works in both browser and server environments.
 * - It is intended for extracting readable text from HTML, **not** for sanitizing untrusted HTML.
 *
 * @param input - The HTML (or any value convertible to a string).
 * @param options - Options to control the conversion process.
 *
 * @returns The extracted plain text.
 *
 * @example
 * ```ts
 * htmlToText('<p>Hello <b>World</b></p>');
 * // Hello World
 * ```
 *
 * @example
 * ```ts
 * htmlToText('<p>A</p><p>B</p>');
 * // A
 * // B
 * ```
 *
 * @example
 * ```ts
 * htmlToText('<div>One<br>Two</div>');
 * // One
 * // Two
 * ```
 */
export function htmlToText(input: unknown, options?: HtmlToTextOptions): string {
	const {
		brToNewLine = true,
		blockToNewLine = true,
		decodeEntities = true,
		normalizeWhitespace = true,
		maxBlankLines = 2,
		trim = true,
	} = options || {};

	let text = input == null ? '' : isString(input) ? input : String(input);

	// Normalize line endings first.
	text = text.replace(/\r\n?/g, '\n');

	if (brToNewLine === true) {
		text = text.replace(/<br\s*\/?>/gi, '\n');
	}

	if (blockToNewLine === true) {
		const BLOCK_TAGS =
			'address|article|aside|blockquote|caption|center|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|hr|li|main|nav|ol|p|pre|section|table|tbody|td|tfoot|th|thead|tr|ul';

		const blockRegex = new RegExp(`</?(?:${BLOCK_TAGS})\\b[^>]*>`, 'gi');

		text = text.replace(blockRegex, '\n');
	}

	// Remove remaining tags.
	text = text.replace(/<\/?[^>]+>/g, '');

	if (decodeEntities === true) {
		const namedEntities: Record<string, string> = {
			amp: '&',
			lt: '<',
			gt: '>',
			quot: '"',
			apos: "'",
			'#39': "'",
			nbsp: ' ',
		};

		text = text.replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, (entity, value: string) => {
			const lower = value.toLowerCase();

			if (lower.startsWith('#x')) {
				const cp = Number.parseInt(lower.slice(2), 16);
				return Number.isNaN(cp) ? entity : String.fromCodePoint(cp);
			}

			if (lower.startsWith('#')) {
				const cp = Number.parseInt(lower.slice(1), 10);
				return Number.isNaN(cp) ? entity : String.fromCodePoint(cp);
			}

			return namedEntities[lower] ?? entity;
		});
	}

	if (normalizeWhitespace === true) {
		text = text
			.replace(/[^\S\n]+/g, ' ')
			.replace(/\n[^\S\n]+/g, '\n')
			.replace(/[^\S\n]+\n/g, '\n');

		if (maxBlankLines <= 0) {
			text = text.replace(/\n+/g, '\n');
		} else {
			const regex = new RegExp(`\\n{${maxBlankLines + 1},}`, 'g');

			text = text.replace(regex, '\n'.repeat(maxBlankLines));
		}
	}

	return trim === true ? text.trim() : text;
}
