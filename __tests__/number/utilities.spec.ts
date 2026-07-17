import {
	clampNumber,
	formatCurrency,
	getOrdinal,
	getRandomFloat,
	normalizeNumber,
	roundToNearest,
} from 'src/number/utilities';
import { describe, expect, it } from 'vitest';

describe('number utility functions', () => {
	describe('roundToNearest', () => {
		it('should round to nearest interval', () => {
			expect(roundToNearest(27, 5)).toBe(25);
			expect(roundToNearest(28, 5)).toBe(30);
			expect(roundToNearest(14, 10)).toBe(10);
			expect(roundToNearest(16, 10)).toBe(20);
		});
	});

	describe('formatCurrency', () => {
		it('should format currency in default locale', () => {
			expect(formatCurrency(1234.56)).toBe('$1,234.56');
			const normalize = (s: string) => s.replace(/[\u00A0\u202F]/g, ' ');

			expect(normalize(formatCurrency(1234.56, 'EUR', 'de-DE'))).toBe(
				normalize('1.234,56 €')
			);
		});
	});

	describe('clampNumber', () => {
		it('should clamp within range', () => {
			expect(clampNumber(15, 10, 20)).toBe(15);
			expect(clampNumber(5, 10, 20)).toBe(10);
			expect(clampNumber(25, 10, 20)).toBe(20);
		});
	});

	describe('getRandomFloat', () => {
		it('should generate a random float within range', () => {
			const val = getRandomFloat(1.5, 3.5);
			expect(val).toBeGreaterThanOrEqual(1.5);
			expect(val).toBeLessThanOrEqual(3.5);
		});
	});

	describe('getOrdinal', () => {
		it('should return ordinal suffix with number', () => {
			expect(getOrdinal(1)).toBe('1st');
			expect(getOrdinal(2)).toBe('2nd');
			expect(getOrdinal(3)).toBe('3rd');
			expect(getOrdinal(4)).toBe('4th');
			expect(getOrdinal(11)).toBe('11th');
			expect(getOrdinal(12)).toBe('12th');
			expect(getOrdinal(13)).toBe('13th');
			expect(getOrdinal(21)).toBe('21st');
		});

		it('should return only suffix when withNumber is false', () => {
			expect(getOrdinal(1, false)).toBe('st');
			expect(getOrdinal(4, false)).toBe('th');
		});
	});

	describe('normalizeNumber', () => {
		it('should normalize numbers and numeric strings', () => {
			expect(normalizeNumber(42)).toBe(42);
			expect(normalizeNumber('42')).toBe(42);
			expect(normalizeNumber('3.14')).toBe(3.14);
			expect(normalizeNumber('abc')).toBeUndefined();
			expect(normalizeNumber(null)).toBeUndefined();
		});
	});
});
