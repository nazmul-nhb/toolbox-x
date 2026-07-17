import { getColorForInitial } from 'src/colors/initials';
import { describe, expect, it } from 'vitest';

describe('getColorForInitial', () => {
	it('should return a hex color for alphabet initials', () => {
		const colorA = getColorForInitial('Alice');
		const colorB = getColorForInitial('Bob');
		expect(colorA).toMatch(/^#[0-9A-F]{8}$/i);
		expect(colorB).toMatch(/^#[0-9A-F]{8}$/i);
		expect(colorA).not.toBe(colorB);
	});

	it('should return a hex color for numeric initials', () => {
		const color5 = getColorForInitial(5);
		const color9 = getColorForInitial('9 lives');
		expect(color5).toMatch(/^#[0-9A-F]{8}$/i);
		expect(color9).toMatch(/^#[0-9A-F]{8}$/i);
	});

	it('should support customized opacity', () => {
		const fullColor = getColorForInitial('Alice', 100);
		const semiColor = getColorForInitial('Alice', 50);
		expect(fullColor.endsWith('FF')).toBe(true);
		expect(semiColor.endsWith('80')).toBe(true);
	});

	it('should process arrays of inputs recursively', () => {
		const colors = getColorForInitial(['Alice', 5, ['nested']]);
		expect(colors).toHaveLength(3);
		expect(colors[0]).toMatch(/^#[0-9A-F]{8}$/i);
		expect(colors[1]).toMatch(/^#[0-9A-F]{8}$/i);
		expect(colors[2]).toMatch(/^#[0-9A-F]{8}$/i);
	});

	it('should return all 36 palette colors when empty array is passed', () => {
		const allColors = getColorForInitial([]);
		expect(allColors).toHaveLength(36);
	});

	it('should return default fallback color for invalid characters', () => {
		// Non-alphanumeric, like a symbol
		const colorFallback = getColorForInitial('!!!');
		expect(colorFallback).toBe('#010514FF');
	});
});
