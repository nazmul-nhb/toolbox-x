import {
	AreaConverter,
	converter,
	DataConverter,
	LengthConverter,
	MassConverter,
	TemperatureConverter,
	TimeConverter,
	VolumeConverter,
} from 'src/converter/index';
import { describe, expect, it } from 'vitest';

describe('Converter Factory and Units', () => {
	it('should support length conversion', () => {
		const length = converter(1000, 'meter');
		expect(length).toBeInstanceOf(LengthConverter);
		expect(length.to('kilometer')).toBe(1);
		expect(length.to('inch')).toBeCloseTo(39370.078, 1);
		expect(length.formatTo('kilometer')).toBe('1 kilometer');
		expect(length.formatTo('kilometer', { style: 'compact' })).toBe('1km');
		expect(length.formatTo('kilometer', { style: 'scientific' })).toBe('1.00e+0 kilometer');
	});

	it('should support area conversion', () => {
		const area = converter(1, 'square-meter');
		expect(area).toBeInstanceOf(AreaConverter);
		expect(area.to('square-kilometer')).toBe(1e-6);
		expect(area.formatTo('square-kilometer')).toBe('0 square-kilometers');
	});

	it('should support mass conversion', () => {
		const mass = converter(1000, 'gram');
		expect(mass).toBeInstanceOf(MassConverter);
		expect(mass.to('kilogram')).toBe(1);
		expect(mass.formatTo('kilogram')).toBe('1 kilogram');
	});

	it('should support temperature conversion', () => {
		const temp = converter(0, 'celsius');
		expect(temp).toBeInstanceOf(TemperatureConverter);
		expect(temp.to('fahrenheit')).toBe(32);
		expect(temp.to('kelvin')).toBe(273.15);
		expect(temp.formatTo('kelvin')).toBe('273.15 kelvin');
		expect(converter(0, 'fahrenheit').formatTo('fahrenheit')).toBe('0 fahrenheit');
	});

	it('should support time conversion', () => {
		const time = converter(60, 'minute');
		expect(time).toBeInstanceOf(TimeConverter);
		expect(time.to('hour')).toBe(1);
		expect(time.formatTo('hour')).toBe('1 hour');
	});

	it('should support data conversion', () => {
		const data = converter(1024, 'megabyte');
		expect(data).toBeInstanceOf(DataConverter);
		expect(data.to('gigabyte')).toBe(1);
		expect(data.formatTo('gigabyte')).toBe('1 gigabyte');
	});

	it('should support volume conversion', () => {
		const volume = converter(1, 'liter');
		expect(volume).toBeInstanceOf(VolumeConverter);
		expect(volume.to('milliliter')).toBeCloseTo(1000, 5);
		expect(volume.formatTo('milliliter')).toBe('1000 milliliters');
	});

	it('should return raw value and unit using valueOf/getValue/getUnit', () => {
		const length = converter(5, 'meter');
		expect(length.valueOf()).toBe(5);
		expect(length.getValue()).toBe(5);
		expect(length.getUnit()).toBe('meter');
	});

	it('should convert to all possible units', () => {
		expect(converter(1, 'meter').toAll()).toHaveProperty('meter', 1);
		expect(converter(1, 'acre').toAll()).toHaveProperty('acre', 1);
		expect(converter(1, 'gram').toAll()).toHaveProperty('gram', 1);
		expect(converter(1, 'second').toAll()).toHaveProperty('second', 1);
		expect(converter(1, 'bit').toAll()).toHaveProperty('bit', 1);
		expect(converter(1, 'liter').toAll()).toHaveProperty('liter', 1);
		expect(converter(1, 'kelvin').toAll()).toHaveProperty('kelvin', 1);
	});

	it('should format plural units properly', () => {
		expect(converter(2).format()).toBe('2');
		expect(converter(2, 'meter').format()).toBe('2 meters');
		expect(converter(2, 'foot').format()).toBe('2 feet');
		expect(converter(-1, 'foot').format()).toBe('1 foot');
		expect(converter(2, 'inch').format()).toBe('2 inches');
		expect(converter(2, 'kelvin').format()).toBe('2 kelvin');
		expect(converter(2, 'millennium').format()).toBe('2 millennia');
		expect(converter(2, 'century').format()).toBe('2 centuries');
	});

	it('should compare the values', () => {
		const length = converter(1000, 'meter');
		expect(length.eq(1000)).toBe(true);
		expect(length.gt(500)).toBe(true);
		expect(length.lt(2000)).toBe(true);
		expect(length.eq(2000)).toBe(false);
		expect(length.gt(2000)).toBe(false);
		expect(length.lt(500)).toBe(false);
	});

	it('should perform arithmetic operations', () => {
		const length = converter(1000, 'meter');
		expect(length.add(1000).to('meter')).toBe(2000);
		expect(length.subtract(1000).to('meter')).toBe(0);
		expect(length.multiply(2).to('meter')).toBe(2000);
		expect(length.divide(2).to('meter')).toBe(500);
	});

	it('should round the value', () => {
		const length = converter(1000.555, 'meter');
		expect(length.round(2).to('meter')).toBe(1000.56);
		expect(length.round(0).to('meter')).toBe(1001);
	});

	it('should return the absolute value', () => {
		const length = converter(-1000, 'meter');
		expect(length.abs().to('meter')).toBe(1000);
	});

	it('should convert to different formats', () => {
		const length = converter(1000, 'meter');
		expect(length.toJSON()).toBe('{"value":1000,"unit":"meter"}');
		expect(length.toObject()).toEqual({ value: 1000, unit: 'meter' });
		expect(length.toString()).toBe('1000 meters');
	});

	it('should return supported units', () => {
		expect(converter(1).supportedUnits()).includes('inch');
		expect(converter(1).supportedUnits('time')).includes('minute');
		expect(converter(1).supportedUnits('data')).includes('byte');
		expect(converter(1).supportedUnits('volume')).includes('liter');
		expect(converter(1).supportedUnits('mass')).includes('gram');
		expect(converter(1).supportedUnits('area')).includes('acre');
		expect(converter(1).supportedUnits('temp')).includes('celsius');
	});

	it('should return unit name', () => {
		expect(converter(1).getUnit()).toBe('unknown');
		expect(converter(1, 'meter').getUnit()).toBe('meter');
	});

	it('should convert to object', () => {
		expect(converter(1).toObject()).toEqual({ value: 1, unit: 'unknown' });
		expect(converter(1, 'meter').toObject()).toEqual({ value: 1, unit: 'meter' });
	});
});
