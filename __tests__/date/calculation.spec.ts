import { addDate } from 'src/date/calculation';
import { describe, expect, it } from 'vitest';

describe('addDate', () => {
	it('should add days and hours to a date', () => {
		const start = new Date('2026-06-15T01:00:00.000Z');
		const result = addDate(start, { day: 1, hour: 7 });
		expect(result.toISOString()).toBe('2026-06-16T08:00:00.000Z');
	});

	it('should subtract days and hours using negative numbers', () => {
		const start = new Date('2026-06-15T01:00:00.000Z');
		const result = addDate(start, { day: -1, hour: -1 });
		expect(result.toISOString()).toBe('2026-06-14T00:00:00.000Z');
	});

	it('should handle numeric string inputs', () => {
		const start = new Date('2026-06-15T01:00:00.000Z');
		const result = addDate(start, { day: '2', hour: '5' });
		expect(result.toISOString()).toBe('2026-06-17T06:00:00.000Z');
	});

	it('should use current date if no date argument is passed', () => {
		const result = addDate(undefined, { day: 1 });
		const diff = result.getTime() - Date.now();
		// It should be roughly 24 hours from now
		expect(diff).toBeGreaterThan(23 * 3600 * 1000);
		expect(diff).toBeLessThan(25 * 3600 * 1000);
	});

	it('should throw error if invalid date is passed', () => {
		expect(() => addDate('invalid-date', { day: 1 })).toThrow(TypeError);
	});

	it('should throw error if invalid unit is passed', () => {
		const start = new Date('2026-06-15T01:00:00.000Z');
		// @ts-expect-error
		expect(() => addDate(start, { invalidUnit: 1 })).toThrow(TypeError);
	});
});
