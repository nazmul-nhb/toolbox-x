import {
	fibonacciGenerator,
	getFibonacciSeries,
	getFibonacciSeriesMemo,
	getNthFibonacci,
} from 'src/number/fibonacci';
import { describe, expect, it, vi } from 'vitest';

describe('fibonacci utilities', () => {
	it('should get Fibonacci series', () => {
		expect(getFibonacciSeries(0)).toEqual([]);
		expect(getFibonacciSeries(1)).toEqual([0]);
		expect(getFibonacciSeries(5)).toEqual([0, 1, 1, 2, 3]);
	});

	it('should get Fibonacci series with memoization', () => {
		expect(getFibonacciSeriesMemo(0)).toEqual([]);
		expect(getFibonacciSeriesMemo(1)).toEqual([0]);
		expect(getFibonacciSeriesMemo(6)).toEqual([0, 1, 1, 2, 3, 5]);
	});

	it('should yield numbers through generator and call callback', () => {
		const cb = vi.fn();
		const gen = fibonacciGenerator(5, cb);
		const vals = [...gen];

		expect(vals).toEqual([0, 1, 1, 2, 3]);
		expect(cb).toHaveBeenCalledTimes(5);
		expect(cb).toHaveBeenLastCalledWith(3, 4);
	});

	it('should yield empty if limit <= 0', () => {
		const gen = fibonacciGenerator(-1);
		expect([...gen]).toEqual([]);
	});

	it('should calculate getNthFibonacci', () => {
		expect(getNthFibonacci(0)).toBe(0);
		expect(getNthFibonacci(1)).toBe(1);
		expect(getNthFibonacci(5)).toBe(5);
		expect(getNthFibonacci(6)).toBe(8);
		expect(getNthFibonacci(-5)).toBeNaN();
	});
});
