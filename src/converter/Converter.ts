import { $Area } from 'src/converter/area';
import { $BaseConverter } from 'src/converter/base';
import { UNITS } from 'src/converter/constants';
import { $Data } from 'src/converter/data';
import { $Length } from 'src/converter/length';
import { $Mass } from 'src/converter/mass';
import { $Temperature } from 'src/converter/temp';
import { $Time } from 'src/converter/time';
import { $Volume } from 'src/converter/volume';
import type {
	$AreaUnit,
	$DataUnit,
	$LengthUnit,
	$MassUnit,
	$TempUnit,
	$TimeUnit,
	$Unit,
	$VolumeUnit,
	Category,
	Converted,
	UnitMap,
} from 'src/types/converter';
import type { Maybe, Numeric } from 'src/types/index';

/**
 * @function `Converter` Creates instances of specific unit converter class based on the provided unit.
 *
 * @description Converts values between compatible units (time, length, data, temperature, mass, area, volume).
 * @remarks The returned instance exposes only methods relevant to the provided unit type.
 */
export function Converter<U extends $Unit>(value: Numeric, unit?: U): Converted<U> {
	const category = ((): Maybe<Category> => {
		if (unit) {
			for (const [category, values] of Object.entries(UNITS)) {
				if ([...values].includes(unit as UnitMap[Category])) {
					return category as Category;
				}
			}
		}
	})();

	switch (category) {
		case 'area':
			return new $Area(value, unit as $AreaUnit) as Converted<U>;
		case 'time':
			return new $Time(value, unit as $TimeUnit) as Converted<U>;
		case 'data':
			return new $Data(value, unit as $DataUnit) as Converted<U>;
		case 'length':
			return new $Length(value, unit as $LengthUnit) as Converted<U>;
		case 'mass':
			return new $Mass(value, unit as $MassUnit) as Converted<U>;
		case 'temp':
			return new $Temperature(value, unit as $TempUnit) as Converted<U>;
		case 'volume':
			return new $Volume(value, unit as $VolumeUnit) as Converted<U>;
		default:
			return new $BaseConverter(value, unit) as Converted<U>;
	}
}

export {
	$Area as AreaConverter,
	$Data as DataConverter,
	$Length as LengthConverter,
	$Mass as MassConverter,
	$Temperature as TemperatureConverter,
	$Time as TimeConverter,
	$Volume as VolumeConverter,
	Converter as converter,
};
