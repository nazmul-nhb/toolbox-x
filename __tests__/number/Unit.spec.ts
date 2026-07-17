import { Unit } from 'src/number/Unit';
import { describe, expect, it } from 'vitest';

describe('Unit class', () => {
	it('should format toString correctly', () => {
		const unit = new Unit(100, 'kg');
		expect(unit.toString()).toBe('100 kg');
	});

	it('should support convertByPrefix', () => {
		const val = new Unit(1, 'g').convertByPrefix('k', 'm');
		// 1 kg to mg is 1,000,000
		expect(val).toBe(1000000);
	});

	it('should support convertFromTo with string formats', () => {
		const val = new Unit(1, 'kg').convertFromTo('kg', 'mg');
		expect(val).toBe(1000000);

		// test errors
		expect(() => new Unit(1).convertFromTo('kg', 'mL')).toThrow('Mismatched units');
		expect(() => new Unit(1).convertFromTo('kg', '')).toThrow('Invalid unit format');
	});

	it('should support convert via static method name', () => {
		const unit = new Unit(10);
		expect(unit.convert('metersToFeet')).toBeCloseTo(32.8084);

		// @ts-expect-error
		expect(() => unit.convert('invalidMethod')).toThrow('is not a valid method');
	});

	it('should perform static unit conversions correctly', () => {
		expect(Unit.metersToFeet(1)).toBeCloseTo(3.28084);
		expect(Unit.feetToMeters(3.28084)).toBeCloseTo(1);
		expect(Unit.kmToMiles(1)).toBeCloseTo(0.621371);
		expect(Unit.milesToKm(0.621371)).toBeCloseTo(1);
		expect(Unit.kgToLbs(1)).toBeCloseTo(2.20462);
		expect(Unit.lbsToKg(2.20462)).toBeCloseTo(1);
		expect(Unit.gramsToOunces(100)).toBeCloseTo(3.5274);
		expect(Unit.ouncesToGrams(3.5274)).toBeCloseTo(100);

		expect(Unit.celsiusToFahrenheit(0)).toBe(32);
		expect(Unit.fahrenheitToCelsius(32)).toBe(0);
		expect(Unit.celsiusToKelvin(0)).toBe(273.15);
		expect(Unit.kelvinToCelsius(273.15)).toBe(0);
		expect(Unit.fahrenheitToKelvin(32)).toBe(273.15);
		expect(Unit.kelvinToFahrenheit(273.15)).toBe(32);

		expect(Unit.mlToLiters(1000)).toBe(1);
		expect(Unit.litersToMl(1)).toBe(1000);
		expect(Unit.gallonsToMl(1)).toBeCloseTo(3785.41);
		expect(Unit.mlToGallons(3785.41)).toBeCloseTo(1);
		expect(Unit.litersToGallons(10)).toBeCloseTo(2.64172);
		expect(Unit.gallonsToLiters(2.64172)).toBeCloseTo(10);

		expect(Unit.sqmToSqft(1)).toBeCloseTo(10.7639);
		expect(Unit.sqftToSqm(10.7639)).toBeCloseTo(1);

		expect(Unit.kmphToMph(100)).toBeCloseTo(62.1371);
		expect(Unit.mphToKmph(62.1371)).toBeCloseTo(100);

		expect(Unit.minutesToHours(120)).toBe(2);
		expect(Unit.secondsToMinutes(120)).toBe(2);
		expect(Unit.hoursToDays(48)).toBe(2);
		expect(Unit.hoursToMinutes(2)).toBe(120);
		expect(Unit.minutesToSeconds(2)).toBe(120);
		expect(Unit.daysToHours(2)).toBe(48);

		expect(Unit.mbToGb(1024)).toBe(1);
		expect(Unit.gbToMb(1)).toBe(1024);
		expect(Unit.kbToMb(1024)).toBe(1);
		expect(Unit.kbToGb(1024 * 1024)).toBe(1);
		expect(Unit.gbToKb(1)).toBe(1024 * 1024);
		expect(Unit.bytesToKb(1024)).toBe(1);
		expect(Unit.kbToBytes(1)).toBe(1024);
		expect(Unit.mbToKb(1)).toBe(1024);
		expect(Unit.gbToTb(1024)).toBe(1);
		expect(Unit.tbToGb(1)).toBe(1024);

		expect(Unit.joulesToCalories(10)).toBeCloseTo(2.39006);
		expect(Unit.caloriesToJoules(2.39006)).toBeCloseTo(10);
		expect(Unit.caloriesToKJoules(2390.06)).toBeCloseTo(10);
		expect(Unit.kJoulesToCalories(10)).toBeCloseTo(2390.06);

		expect(Unit.atmToPascal(1)).toBe(101325);
		expect(Unit.pascalToAtm(101325)).toBe(1);
		expect(Unit.barToPascal(1)).toBe(100000);
		expect(Unit.pascalToBar(100000)).toBe(1);

		expect(Unit.hzToKHz(1000)).toBe(1);
		expect(Unit.kHzToHz(1)).toBe(1000);
		expect(Unit.hzToMHz(1_000_000)).toBe(1);
		expect(Unit.mHzToHz(1)).toBe(1_000_000);
		expect(Unit.kHzToMHz(1000)).toBe(1);
		expect(Unit.mHzToKHz(1)).toBe(1000);

		expect(Unit.cmToMeters(100)).toBe(1);
		expect(Unit.metersToCm(1)).toBe(100);
		expect(Unit.mmToMeters(1000)).toBe(1);
		expect(Unit.metersToMm(1)).toBe(1000);

		expect(Unit.sqkmToSqm(1)).toBe(1_000_000);
		expect(Unit.sqmToSqkm(1_000_000)).toBe(1);
		expect(Unit.sqftToSqin(1)).toBe(144);
		expect(Unit.sqinToSqft(144)).toBe(1);

		expect(Unit.wattsToKw(1000)).toBe(1);
		expect(Unit.kwToWatts(1)).toBe(1000);
	});
});
