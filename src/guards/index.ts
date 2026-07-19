export { isInvalidOrEmptyArray } from 'src/array/basics';
// ! Colors Guards
export { isCSSColor, isHex6, isHex8, isHSL, isHSLA, isRGB, isRGBA } from 'src/colors/guards';
// ! Date & Time Guards
export {
	isDateLike,
	isLeapYear,
	isNativeTimeZoneId,
	isTimeWithUnit,
	isValidTime,
	isValidTime as isValidTimeString,
	isValidTimeZoneId,
	isValidUTCOffset as isValidUTC,
	isValidUTCOffset,
} from 'src/date/guards';
// ! Non-Primitive Type Guards
export {
	isArray,
	isArrayOfType,
	isDate,
	isEmptyObject,
	isEmptyObject as isObjectEmpty,
	isError,
	isFirstElementOfType,
	isFunction,
	isJSON,
	isJSON as isValidJSON,
	isMap,
	isMethodDescriptor as isMethod,
	isMethodDescriptor,
	isNotEmptyObject,
	isNotEmptyObject as isValidObject,
	isObject,
	isObjectWithKeys,
	isPromise,
	isRegExp,
	isRegExp as isRegularExpression,
	isReturningPromise as doesReturnPromise,
	isReturningPromise,
	isSet,
	isValidArray as isArrayWithLength,
	isValidArray,
} from 'src/guards/non-primitives';
// ! Primitive Type Guards
export {
	isBigInt,
	isBoolean,
	isFalsy,
	isInteger,
	isNonEmptyString,
	isNormalPrimitive,
	isNull,
	isNumber,
	isPositiveInteger,
	isPrimitive,
	isString,
	isSymbol,
	isTruthy,
	isUndefined,
} from 'src/guards/primitives';
// ! Special Type Guards
export {
	isBase64,
	isBinaryString,
	isBrowser,
	isDateString,
	isEmail,
	isEmail as isValidEmail,
	isEmailArray,
	isEnvironment,
	isEnvironment as isExpectedNodeENV,
	isEnvironment as isNodeENV,
	isEnvironment as isNodeEnvironment,
	isHexString,
	isIPAddress,
	isNode,
	isNumericString,
	isPhoneNumber,
	isURL,
	isURL as isValidURL,
	isUUID,
} from 'src/guards/specials';
export {
	isUUIDv1,
	isUUIDv2,
	isUUIDv3,
	isUUIDv4,
	isUUIDv5,
	isUUIDv6,
	isUUIDv7,
	isUUIDv8,
} from 'src/hash/uuid';
export {
	areInvalidNumbers,
	areInvalidNumbers as areNumbersInvalid,
	areInvalidNumbers as isInvalidNumber,
	areInvalidNumbers as isNumberInvalid,
	isEven,
	isEven as isEvenNumber,
	isFibonacci,
	isFibonacci as isPartOfFibonacci,
	isFibonacci as isPartOfFibonacciSeries,
	isMultiple,
	isMultiple as isMultipleOf,
	isOdd,
	isOdd as isOddNumber,
	isPerfectSquare,
} from 'src/number/guards';
export { isPrime, isPrime as isPrimeNumber } from 'src/number/prime';
export {
	isCamelCase,
	isEmojiOnly,
	isKebabCase,
	isPalindrome,
	isPascalCase,
	isSnakeCase,
} from 'src/string/guards';
export { isDeepEqual } from 'src/utils/miscellaneous';
