import {
	isFirstElementOfType,
	isObject,
	isObjectWithKeys,
	isValidArray,
} from 'src/guards/non-primitives';
import { isBoolean, isNumber, isString } from 'src/guards/primitives';
import { _resolveNestedKey } from 'src/object/helpers';
import type { OrderOption, SortByOption, SortNature, SortOptions } from 'src/types/array';
import type { BasicPrimitive } from 'src/types/index';
import type { GenericObject } from 'src/types/object';

/**
 * Compare two strings using natural sorting (e.g., `"file2"` < `"file10"`).
 * - Optionally supports case-insensitive and locale-aware string chunk comparisons.
 *
 * @param a - The first string to compare.
 * @param b - The second string to compare.
 * @param options - Optional settings to configure comparison behavior.
 * @returns A negative number if `a` comes before `b`, a positive number if `a` comes after `b`, or 0 if equal.
 */
export function naturalSort(a: string, b: string, options?: SortNature): number {
	const { caseInsensitive = true, localeAware = false } = options || {};

	/**
	 * * Splits a string into an array of number and non-number chunks.
	 * @param str - The string to split.
	 * @returns An array of string and number parts.
	 */
	const _createChunks = (str: string): (string | number)[] => {
		const chunks: (string | number)[] = [];

		let current = '';
		let isNumeric = false;

		for (const char of str) {
			const charIsNum = !Number.isNaN(Number(char));

			if (current?.length === 0) {
				current = char;
				isNumeric = charIsNum;
				continue;
			}

			if (charIsNum === isNumeric) {
				current += char;
			} else {
				chunks?.push(isNumeric ? Number(current) : current);
				current = char;
				isNumeric = charIsNum;
			}
		}

		if (current?.length > 0) {
			chunks?.push(isNumeric ? Number(current) : current);
		}

		return chunks;
	};

	const aChunks = _createChunks(a);
	const bChunks = _createChunks(b);

	for (let i = 0; i < Math.min(aChunks?.length, bChunks?.length); i++) {
		let aChunk = aChunks[i];
		let bChunk = bChunks[i];

		// Normalize string chunks if case-insensitive
		if (caseInsensitive && isString(aChunk) && isString(bChunk)) {
			aChunk = aChunk?.toLowerCase();
			bChunk = bChunk?.toLowerCase();
		}

		// Compare types: number vs string
		if (typeof aChunk !== typeof bChunk) {
			return isString(aChunk) ? 1 : -1;
		}

		// Compare same-type chunks
		if (aChunk !== bChunk) {
			if (isNumber(aChunk) && isNumber(bChunk)) {
				return aChunk - bChunk;
			}

			if (isString(aChunk) && isString(bChunk)) {
				if (localeAware) {
					const cmp = aChunk.localeCompare(bChunk, undefined, {
						sensitivity: caseInsensitive ? 'accent' : 'variant',
					});
					if (cmp !== 0) return cmp;
				}
				return aChunk < bChunk ? -1 : 1;
			}
		}
	}

	return aChunks?.length - bChunks?.length;
}

/**
 * * Sorts an array of objects based on the provided options.
 *
 * @remarks
 * - Sorts array by the specified field in the options `sortByField`.
 * - Uses {@link naturalSort} for sorting string values.
 *
 * @param array - The array of objects to sort.
 * @param options - Sorting options for objects.
 * @returns The sorted array.
 */
export function sortAnArray<T extends GenericObject>(array: T[], options: SortByOption<T>): T[];

/**
 * * Sorts an array of `strings`, `numbers` or `boolean` based on the provided options.
 *
 * @remarks
 * - If the array contains strings, it sorts them alphabetically.
 * - If the array contains numbers, it sorts them numerically.
 * - If the array contains booleans, it sorts them by their boolean value.
 * - Uses {@link naturalSort} for sorting string values.
 *
 * @param array - The array of `strings`, `numbers` or `boolean` to sort.
 * @param options - Sorting options.
 * @returns  The sorted array.
 */
export function sortAnArray<T extends BasicPrimitive>(array: T[], options?: OrderOption): T[];

/**
 * * Sorts an array of strings, numbers, booleans, or objects based on the provided options.
 *
 * @param array - The array to sort.
 * @param options - Sorting options.
 * @returns The sorted array.
 */
export function sortAnArray<T extends BasicPrimitive | GenericObject>(
	array: T[],
	options?: SortOptions<T>
): T[] {
	if (!isValidArray(array)) return array;

	// Check if the array contains strings
	if (isFirstElementOfType(array, isString)) {
		return [...array].sort((a, b) =>
			options?.sortOrder === 'desc' ? naturalSort(b, a) : naturalSort(a, b)
		);
	}

	// Check if the array contains numbers
	if (isFirstElementOfType(array, isNumber)) {
		return [...array].sort((a, b) => (options?.sortOrder === 'desc' ? b - a : a - b));
	}

	// Check if the array contains booleans
	if (isFirstElementOfType(array, isBoolean)) {
		return [...array].sort((a, b) =>
			options?.sortOrder === 'desc' ? Number(b) - Number(a) : Number(a) - Number(b)
		);
	}

	// Handle array of objects
	if (isFirstElementOfType(array, isObject) && isObjectWithKeys(options, ['sortByField'])) {
		return [...array].sort((a, b) => {
			const keyA = _resolveNestedKey(a, options?.sortByField);
			const keyB = _resolveNestedKey(b, options?.sortByField);

			if (keyA == null || keyB == null) {
				return keyA == null ? 1 : -1;
			}

			if (isString(keyA) && isString(keyB)) {
				return options?.sortOrder === 'desc'
					? naturalSort(keyB, keyA)
					: naturalSort(keyA, keyB);
			}

			if (isNumber(keyA) && isNumber(keyB)) {
				return options?.sortOrder === 'desc' ? keyB - keyA : keyA - keyB;
			}

			if (isBoolean(keyA) && isBoolean(keyB)) {
				return options?.sortOrder === 'desc'
					? Number(keyB) - Number(keyA)
					: Number(keyA) - Number(keyB);
			}

			return 0;
		});
	}

	return [...array];
}
