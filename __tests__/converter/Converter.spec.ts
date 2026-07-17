import {
	AreaConverter,
	converter,
	DataConverter,
	LengthConverter,
	MassConverter,
	TemperatureConverter,
	TimeConverter,
	VolumeConverter,
} from 'src/converter/Converter';
import { describe, expect, it } from 'vitest';

describe('Converter Factory and Units', () => {
	it('should support length conversion', () => {
		const length = converter(1000, 'meter');
		expect(length).toBeInstanceOf(LengthConverter);
		expect(length.to('kilometer')).toBe(1);
		expect(length.to('inch')).toBeCloseTo(39370.078, 1);
		expect(length.formatTo('kilometer')).toBe('1 kilometer');
		expect(length.formatTo('kilometer', { style: 'compact' })).toBe('1km');
	});

	it('should support area conversion', () => {
		const area = converter(1, 'square-meter');
		expect(area).toBeInstanceOf(AreaConverter);
		expect(area.to('square-kilometer')).toBe(1e-6);
	});

	it('should support mass conversion', () => {
		const mass = converter(1000, 'gram');
		expect(mass).toBeInstanceOf(MassConverter);
		expect(mass.to('kilogram')).toBe(1);
	});

	it('should support temperature conversion', () => {
		const temp = converter(0, 'celsius');
		expect(temp).toBeInstanceOf(TemperatureConverter);
		expect(temp.to('fahrenheit')).toBe(32);
		expect(temp.to('kelvin')).toBe(273.15);
	});

	it('should support time conversion', () => {
		const time = converter(60, 'minute');
		expect(time).toBeInstanceOf(TimeConverter);
		expect(time.to('hour')).toBe(1);
	});

	it('should support data conversion', () => {
		const data = converter(1024, 'megabyte');
		expect(data).toBeInstanceOf(DataConverter);
		expect(data.to('gigabyte')).toBe(1);
	});

	it('should support volume conversion', () => {
		const volume = converter(1, 'liter');
		expect(volume).toBeInstanceOf(VolumeConverter);
		expect(volume.to('milliliter')).toBeCloseTo(1000, 5);
	});

	it('should return raw value and unit using valueOf/getValue/getUnit', () => {
		const length = converter(5, 'meter');
		expect(length.valueOf()).toBe(5);
		expect(length.getValue()).toBe(5);
		expect(length.getUnit()).toBe('meter');
	});
});
