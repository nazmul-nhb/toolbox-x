import { findPrimeNumbers, isPrime } from 'src/number/prime';
import { describe, expect, it } from 'vitest';

describe('prime utilities', () => {
	it('should verify if a number is prime', () => {
		expect(isPrime(1)).toBe(false);
		expect(isPrime(2)).toBe(true);
		expect(isPrime(3)).toBe(true);
		expect(isPrime(4)).toBe(false);
		expect(isPrime(17)).toBe(true);
		expect(isPrime(25)).toBe(false);
	});

	it('should find prime numbers in range', () => {
		expect(findPrimeNumbers(1, 10)).toEqual([2, 3, 5, 7]);
		expect(findPrimeNumbers(10, 1)).toEqual([2, 3, 5, 7]);
	});
});
