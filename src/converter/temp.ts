import { $BaseConverter } from 'src/converter/base';
import { UNITS } from 'src/converter/constants';
import { normalizeNumber as normalize } from 'src/number/utilities';
import type { $TempUnit, FormatToOptions } from 'src/types/converter';
import type { Numeric } from 'src/types/index';
import type { $Record } from 'src/types/object';

/**
 * @class TemperatureConverter
 * @description Handles conversions with smart `.to()`, `.toAll()`, and `.formatTo()`.
 */
export class $Temperature extends $BaseConverter<$TempUnit> {
	/**
	 * Convert temperature value to other temperature units
	 * @param value Number or numeric string value to convert.
	 * @param unit Base temperature unit for the provided value.
	 */
	constructor(value: Numeric, unit: $TempUnit) {
		super(value, unit);
	}

	/**
	 * @private Conversion helper from Fahrenheit and Kelvin to Celsius.
	 */
	static #toCelsius(value: number, from: $TempUnit): number {
		switch (from) {
			case 'fahrenheit':
				return (value - 32) * (5 / 9);
			case 'kelvin':
				return value - 273.15;
			default:
				return value;
		}
	}

	/**
	 * @private Conversion helper from Celsius to Fahrenheit and Kelvin.
	 */
	static #fromCelsius(value: number, to: $TempUnit): number {
		switch (to) {
			case 'fahrenheit':
				return value * (9 / 5) + 32;
			case 'kelvin':
				return value + 273.15;
			default:
				return value;
		}
	}

	#toBaseTarget(t: Numeric, u?: $TempUnit): [number, number] {
		const base = $Temperature.#toCelsius(this.value, this.unit);

		const target = $Temperature.#toCelsius(normalize(t) ?? this.value, u || this.unit);

		return [base, target];
	}

	#toUnitTarget(t: Numeric, u?: $TempUnit): [number, number] {
		const target = $Temperature.#toCelsius(normalize(t) ?? this.value, u || this.unit);

		return [this.value, $Temperature.#fromCelsius(target, this.unit)];
	}

	add(val: Numeric, unit?: $TempUnit): this {
		const [base, target] = this.#toUnitTarget(val, unit);
		return new $Temperature(base + target, this.unit) as this;
	}

	subtract(val: Numeric, unit?: $TempUnit): this {
		const [base, target] = this.#toUnitTarget(val, unit);
		return new $Temperature(base - target, this.unit) as this;
	}

	multiply(val: Numeric, unit?: $TempUnit): this {
		const [base, target] = this.#toUnitTarget(val, unit);
		return new $Temperature(base * target, this.unit) as this;
	}

	divide(val: Numeric, unit?: $TempUnit): this {
		const [base, target] = this.#toUnitTarget(val, unit);
		return new $Temperature(base / target, this.unit) as this;
	}

	/**
	 * @instance Returns whether this value is greater than a given numeric value.
	 * @param val Numeric value to compare against.
	 * @param unit Optional unit for the numeric value.
	 */
	gt(val: Numeric, unit?: $TempUnit): boolean {
		const [base, target] = this.#toBaseTarget(val, unit);
		return base > target;
	}

	/**
	 *  @instance Returns whether this value is less than a given numeric value.
	 * @param val Numeric value to compare against.
	 * @param unit Optional unit for the numeric value.
	 */
	lt(val: Numeric, unit?: $TempUnit): boolean {
		const [base, target] = this.#toBaseTarget(val, unit);
		return base < target;
	}

	/**
	 *  @instance Returns whether this value equals a given numeric value.
	 * @param val Numeric value to compare against.
	 * @param unit Optional unit for the numeric value.
	 */
	eq(val: Numeric, unit?: $TempUnit): boolean {
		const [base, target] = this.#toBaseTarget(val, unit);
		return base === target;
	}

	/**
	 * @instance Converts to target temperature unit.
	 * @param target Target temperature unit.
	 */
	to(target: $TempUnit): number {
		const celsiusValue = $Temperature.#toCelsius(this.value, this.unit);

		return $Temperature.#fromCelsius(celsiusValue, target);
	}

	/**
	 * @instance Converts to all temperature units at once.
	 * @returns Object with all unit conversions.
	 */
	toAll(): $Record<$TempUnit, number> {
		const result = {} as $Record<$TempUnit, number>;

		for (const unit of UNITS.temp) {
			result[unit] = this.to(unit);
		}

		return result;
	}

	/**
	 * @instance Formats the converted value and unit.
	 * @param target Target unit to format to.
	 * @param options Formatting options.
	 * @returns Formatted string like "95°F", "5.25 kelvins", or "5e+3 celsius".
	 */
	formatTo(target: $TempUnit, options?: FormatToOptions): string {
		const value = this.to(target);

		const shortLabels: $Record<$TempUnit, string> = {
			celsius: '°C',
			fahrenheit: '°F',
			kelvin: 'K',
		};

		return this.$formatTo(value, target, shortLabels, options);
	}
}
