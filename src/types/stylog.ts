import type { ANSI_16_COLORS } from '../stylog/constants';
import type { LogStyler } from '../stylog/Stylog';
import type { CSSColor } from './colors';

/** Non-color text styles */
export type TextStyle =
	| 'bold'
	| 'bolder'
	| 'dim'
	| 'italic'
	| 'underline'
	| 'strikethrough'
	| 'inverse';

/** Represents `ANSI-16` color names available in `LogStyler` */
export type Ansi16Color = keyof typeof ANSI_16_COLORS;

/** Represents `ANSI-16` color names with `css-` prefix available in `LogStyler` */
export type CSS16Color = `css-${Ansi16Color}`;

/** Represents the value of `ANSI-16` color codes */
export type Ansi16Value = (typeof ANSI_16_COLORS)[Ansi16Color];

/** Represents a css color starting with `bg` (e.g. `"bgRed"`). */
export type BGColor = `bg${Capitalize<CSSColor>}`;

/** Styles allowed for `LogStyler` or `Stylog` */
export type Styles = CSSColor | BGColor | TextStyle;

/** A `tuple of strings` that represents `ANSI` color code with special closing and ending */
export type AnsiSequence = [string, string];

/**
 * * Type representing a fully chainable `LogStyler` instance.
 *
 * @remarks
 * - Each property corresponds to a style and returns a new `Stylog` instance, allowing fluent chaining.
 * - **This type combines:**
 *   - The methods of `LogStyler` (e.g., `.style()`, `.log()`)
 *   - Dynamically generated properties for all available `Styles` that return another `Stylog` instance for chaining.
 *
 * @example
 * Stylog.green.bold.bgBlue.log('Hello World');
 */
export type StylogChain = LogStyler & {
	[K in Styles]: StylogChain;
};
