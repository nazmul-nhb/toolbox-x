import { shuffleArray } from 'src/array/basics';
import { isNonEmptyString, isUndefined } from 'src/guards/primitives';
import { isEven, isOdd } from 'src/number/guards';
import { _applyMultiples } from 'src/number/helpers';
import { isPrime } from 'src/number/prime';
import type { $RangeOptions, NumberType, RangedNumbers, RangeOptions } from 'src/types/number';

/**
 * Generates numbers within a range using the provided {@link NumberType} and {@link $RangeOptions options}.
 *
 * @remarks Returns either a string or an array of numbers based on the {@link $RangeOptions.getAsString getAsString} option.
 *
 * @param type - The type of numbers to generate ('random', 'prime', etc.). @default 'any'
 * @param options - Range and formatting options. The `type` property is not available in this overload.
 * @returns The numbers in the range as a string or an array of numbers.
 */
export function getNumbersInRange<T extends NumberType = 'any', S extends boolean = false>(
	type?: T,
	options?: $RangeOptions<T, S>
): RangedNumbers<S>;

/**
 * Generates numbers within a range using customizable {@link RangeOptions options}.
 *
 * @remarks Returns either string or array of numbers based on the {@link RangeOptions.getAsString getAsString} option.
 *
 * @param options - Options to configure number generation, including range, number type, and formatting.
 * @returns The numbers in the range as a string or an array of numbers.
 */
export function getNumbersInRange<T extends NumberType = 'any', S extends boolean = false>(
	options?: RangeOptions<T, S>
): RangedNumbers<S>;

export function getNumbersInRange<T extends NumberType = 'any', S extends boolean = false>(
	typeOrOptions?: T | RangeOptions<T, S>,
	options?: RangeOptions<T, S>
): RangedNumbers<S> {
	const {
		getAsString = false,
		min = 0,
		max = 100,
		step = 1,
		type = 'any',
		includeMin = true,
		includeMax = true,
		separator = ', ',
		multiplesOf,
	} = (isNonEmptyString(typeOrOptions) ? options : typeOrOptions) || {};

	const $type = isNonEmptyString(typeOrOptions) ? typeOrOptions : type;

	let output: number[] = [];

	/**
	 * Helper function to apply range and get array of numbers in that range.
	 *
	 * @param start The start of the range.
	 * @param end The end of the range.
	 * @param s The step value to increment by.
	 * @returns The array of numbers in the range.
	 */
	const _applyRangeOptions = (start: number, end: number, s = 1): number[] => {
		let startNumber = start;
		let endNumber = end;

		if (start > end) {
			[startNumber, endNumber] = [end, start];
		}

		const numbers: number[] = [];

		for (let i = startNumber; i <= endNumber; i += s) {
			if (
				i >= startNumber &&
				i <= endNumber &&
				(includeMin || i > startNumber) &&
				(includeMax || i < endNumber)
			) {
				numbers.push(i);
			}
		}

		return numbers;
	};

	if ($type === 'prime' && !isUndefined(multiplesOf)) {
		console.warn('Warning: The "multiplesOf" option is ignored when the type is "prime"!');
	}

	switch ($type) {
		case 'random':
			output = shuffleArray(_applyRangeOptions(min, max, step));
			break;

		case 'prime':
			output = _applyRangeOptions(min, max).filter(isPrime);
			break;

		case 'odd':
			output = _applyRangeOptions(min, max).filter(isOdd);
			break;

		case 'even':
			output = _applyRangeOptions(min, max).filter(isEven);
			break;

		case 'natural':
			output = _applyRangeOptions(Math.max(min, 1), Math.max(max, 1), step);
			break;

		default:
			output = _applyRangeOptions(min, max, step);
			break;
	}

	if ($type !== 'prime') {
		output = _applyMultiples(output, multiplesOf);
	}

	return (getAsString ? output.join(separator) : output) as RangedNumbers<S>;
}
