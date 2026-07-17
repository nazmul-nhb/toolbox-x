import { calculatePercentage } from 'src/number/percent';
import { describe, expect, it } from 'vitest';

describe('calculatePercentage', () => {
	it('should compute get-percent', () => {
		expect(calculatePercentage({ mode: 'get-percent', part: 20, total: 100 })).toBe(20);
		expect(calculatePercentage({ mode: 'get-percent', part: 1, total: 3 })).toBe(33.333);
		expect(calculatePercentage({ mode: 'get-percent', part: 20, total: 0 })).toBeNaN();
	});

	it('should compute get-value', () => {
		expect(calculatePercentage({ mode: 'get-value', percentage: 20, total: 150 })).toBe(30);
		expect(calculatePercentage({ mode: 'get-value', percentage: 20, total: 0 })).toBeNaN();
	});

	it('should compute get-original', () => {
		expect(calculatePercentage({ mode: 'get-original', percentage: 20, value: 30 })).toBe(
			150
		);
		expect(
			calculatePercentage({ mode: 'get-original', percentage: 0, value: 30 })
		).toBeNaN();
	});

	it('should compute get-change-percent', () => {
		expect(
			calculatePercentage({ mode: 'get-change-percent', oldValue: 100, newValue: 120 })
		).toBe(20);
		expect(
			calculatePercentage({ mode: 'get-change-percent', oldValue: 100, newValue: 80 })
		).toBe(-20);
		expect(
			calculatePercentage({ mode: 'get-change-percent', oldValue: 0, newValue: 100 })
		).toBeNaN();
	});

	it('should compute apply-percent-change', () => {
		expect(
			calculatePercentage({
				mode: 'apply-percent-change',
				baseValue: 100,
				percentage: 10,
			})
		).toBe(110);
		expect(
			calculatePercentage({
				mode: 'apply-percent-change',
				baseValue: 100,
				percentage: -15,
			})
		).toBe(85);
	});

	it('should compute get-percent-difference', () => {
		expect(
			calculatePercentage({ mode: 'get-percent-difference', value1: 10, value2: 20 })
		).toBeCloseTo(66.667);
		expect(
			calculatePercentage({ mode: 'get-percent-difference', value1: 0, value2: 0 })
		).toBeNaN();
	});

	it('should compute inverse-percent', () => {
		expect(calculatePercentage({ mode: 'inverse-percent', part: 50, total: 100 })).toBe(
			200
		);
		expect(calculatePercentage({ mode: 'inverse-percent', part: 0, total: 100 })).toBeNaN();
	});

	it('should return NaN for unsupported mode', () => {
		// @ts-expect-error
		expect(calculatePercentage({ mode: 'invalid' })).toBeNaN();
	});
});
