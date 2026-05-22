// ! String Utilities
export { generateRandomID, trimString, truncateString } from './string/basics';

export { generateAnagrams } from './string/anagram';

export {
	capitalizeString,
	convertStringCase,
} from './string/case';

export {
	extractEmails,
	extractURLs,
	formatUnitWithPlural as formatNumberWithPluralUnit,
	formatUnitWithPlural,
	formatUnitWithPlural as formatWithPlural,
	maskString,
	normalizeString,
	replaceAllInString,
	reverseString,
	slugifyString,
} from './string/convert';

export { computeTextDiff, getCharacterDifferences } from './string/diff';

export {
	countWords,
	countWords as countWordsInString,
	extractNumbersFromString as extractNumbers,
	extractNumbersFromString,
	getLevenshteinDistance,
	getLevenshteinDistance as levenshteinDistance,
	extractNumbersFromString as parseNumbersFromText,
	countWords as wordCount,
} from './string/utilities';

// ! Number Utilities
export {
	getAverage as calculateAverage,
	factorial as calculateFactorial,
	calculateHCF as calculateGCD,
	calculateHCF,
	calculateLCM as calculateLCD,
	calculateLCM,
	convertToDecimal,
	convertToDecimal as convertToFixed,
	factorial,
	getFactors as factorsOf,
	getAverage,
	getAverage as getAverageOfNumbers,
	getFactors as getDivisors,
	factorial as getFactorial,
	getFactors,
	getRandomNumber as getRandomInt,
	getRandomNumber,
	sumNumbers as getSumOfNumbers,
	reverseNumber,
	roundNumber,
	roundNumber as roundToDecimal,
	sumDigits,
	sumNumbers,
	sumNumbers as sumOfNumbers,
} from './number/basics';

export { Currency } from './number/Currency';

export { Unit, Unit as UnitConverter } from './number/Unit';

export { calculatePercentage } from './number/percent';

export {
	fibonacciGenerator,
	fibonacciGenerator as generateFibonacci,
	getFibonacciSeries as getFibonacci,
	getFibonacciSeries as getFibonacciNumbers,
	getFibonacciSeries,
	getFibonacciSeriesMemo,
	getFibonacciSeriesMemo as getMemoizedFibonacci,
	getFibonacciSeriesMemo as getMemoizedFibonacciSeries,
	getNthFibonacci,
} from './number/fibonacci';

export {
	convertToRomanNumerals as arabicToRoman,
	banglaToDigit,
	numberToWordsOrdinal as cardinalWordsToOrdinal,
	numberToWords as convertNumberToWords,
	numberToWordsOrdinal as convertNumberToWordsOrdinal,
	romanToInteger as convertRomanToArabic,
	romanToInteger as convertRomanToInteger,
	romanToInteger as convertRomanToNumeric,
	convertToRomanNumerals,
	wordsToNumber as convertWordsToNumber,
	wordsToNumber as convertWordToNumber,
	digitToBangla,
	convertToRomanNumerals as integerToRoman,
	convertToRomanNumerals as numberToRoman,
	numberToWords,
	numberToWordsOrdinal,
	convertToRomanNumerals as numericToRoman,
	romanToInteger as romanToArabic,
	romanToInteger,
	romanToInteger as romanToNumeric,
	convertToRomanNumerals as toRoman,
	convertToRomanNumerals as toRomanNumeral,
	wordsToNumber,
	wordsToNumber as wordToNumber,
} from './number/convert';

export {
	findPrimeNumbers,
	findPrimeNumbers as getPrimeNumbers,
	isPrime,
	isPrime as isPrimeNumber,
} from './number/prime';

export {
	getOrdinal as cardinalToOrdinal,
	clampNumber,
	formatCurrency as convertNumberToCurrency,
	getOrdinal as convertNumberToOrdinal,
	getOrdinal as convertToOrdinal,
	formatCurrency,
	getOrdinal,
	getOrdinal as getOrdinalNumber,
	getRandomFloat as getRandomDecimal,
	getRandomFloat,
	normalizeNumber,
	getOrdinal as numberToOrdinal,
	roundToNearest as roundNumberToNearestInterval,
	roundToNearest,
	roundToNearest as roundToNearestInterval,
} from './number/utilities';

export { getNumbersInRange } from './number/range';

// ! Array Utilities
export {
	filterArrayOfObjects,
	flattenArray,
	getLastArrayElement,
	isInvalidOrEmptyArray,
	isInvalidOrEmptyArray as isValidEmptyArray,
	shuffleArray,
} from './array/basics';

export {
	averageByField,
	averageByField as avgByField,
	groupAndAverageByField,
	groupAndAverageByField as groupAndAvgByField,
	groupAndSumByField,
	sumByField,
	sumFieldDifference,
	sumFieldDifference as totalDeltaByField,
} from './array/calc';

export { Finder } from './array/Finder';

export {
	naturalSort as compareNaturally,
	naturalSort as compareSorter,
	naturalSort,
	naturalSort as naturalSortForString,
	sortAnArray,
} from './array/sort';

export {
	createOptionsArray,
	getDuplicates as extractDuplicates,
	getDuplicates as extractDuplicatesFromArray,
	findMissingElements as extractMissingElements,
	findMissingElements,
	getDuplicates,
	getDuplicates as getDuplicatesFromArray,
	findMissingElements as getMissingElements,
	splitArrayByProperty as groupArrayByProperty,
	moveArrayElement,
	removeDuplicatesFromArray as removeDuplicates,
	removeDuplicatesFromArray,
	rotateArray,
	splitArray,
	splitArrayByProperty,
} from './array/transform';

// ! Object Utilities
export {
	cloneObject,
	countObjectFields,
	extractObjectKeys as extractKeys,
	extractObjectKeysDeep as extractKeysDeep,
	extractObjectKeys,
	extractObjectKeysDeep,
} from './object/basics';

export {
	extractNewFields,
	extractUpdatedAndNewFields,
	extractUpdatedFields,
	flattenObjectDotNotation,
	flattenObjectKeyValue,
	mergeAndFlattenObjects,
	mergeObjects,
	parseJsonToObject,
} from './object/objectify';

export {
	parseObjectValues,
	parseObjectValues as parseStringifiedObjectValues,
	sanitizeData,
} from './object/sanitize';

export {
	convertObjectValues,
	deleteFields,
	deleteFields as deleteObjectFields,
	deleteFields as omitFields,
	deleteFields as omitObjectFields,
	pickFields,
	pickObjectFieldsByCondition as pickFieldsByCondition,
	pickFields as pickObjectFields,
	pickObjectFieldsByCondition,
	remapFields,
	remapFields as remapObjectFields,
	deleteFields as removeFields,
	deleteFields as removeObjectFields,
} from './object/convert';

// ! Other Utilities
export {
	convertArrayToString,
	countInstanceMethods,
	countStaticMethods,
	debounceAction,
	deepParsePrimitives,
	definePrototypeMethod,
	getClassDetails,
	getInstanceGetterNames,
	getInstanceMethodNames,
	countInstanceMethods as getInstanceMethodsCount,
	getStaticGetterNames,
	getStaticMethodNames,
	countStaticMethods as getStaticMethodsCount,
	isDeepEqual,
	convertArrayToString as joinArrayElements,
	parseJSON,
	parseJSON as parseJsonDeep,
	deepParsePrimitives as parsePrimitivesDeep,
	stableStringify,
	stripJsonEdgeGarbage,
	throttleAction,
} from './utils/index';

export { getCountryByPhone } from './utils/xtras';
