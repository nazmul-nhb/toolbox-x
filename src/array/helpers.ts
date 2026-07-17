import { isNotEmptyObject } from 'src/guards/non-primitives';
import { normalizeNumber } from 'src/number/utilities';

/**
 * Safely resolves value of nested key (dot-notation key like `"user.city"`).
 *
 * @param obj - The source object
 * @param path - The nested path string (e.g. `"user.city"`)
 * @returns The resolved value or `undefined`
 */
export function _resolveNestedKey(obj: unknown, path: string): unknown {
	if (isNotEmptyObject(obj)) {
		return path?.split('.').reduce<unknown>((acc, key) => {
			if (isNotEmptyObject(acc)) {
				return acc[key];
			}

			return undefined;
		}, obj);
	}
}

/**
 * Retrieves a numeric value from a nested property (dot-notation key like 'user.income.tax').
 * Falls back to 0 if value is not a number or numeric string.
 *
 * @param obj - The source object to read from.
 * @param path - The dot-notation path string like 'user.income.tax'.
 * @returns The numeric value at that path, or 0 if not valid.
 */
export function _getNumericProp(obj: unknown, path: string): number {
	const value = _resolveNestedKey(obj, path);

	return normalizeNumber(value) ?? 0;
}
