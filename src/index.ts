// ! String Utilities
export { generateRandomID, trimString, truncateString } from 'src/string/basics';

export { generateAnagrams } from 'src/string/anagram';

export {
	capitalizeString,
	convertStringCase,
} from 'src/string/case';

export {
	extractEmails,
	extractURLs,
	formatUnitWithPlural as formatNumberWithPluralUnit,
	formatUnitWithPlural,
	formatUnitWithPlural as formatWithPlural,
	htmlToText,
	maskString,
	normalizeString,
	replaceAllInString,
	reverseString,
	slugifyString,
} from 'src/string/convert';

export { computeTextDiff, getCharacterDifferences } from 'src/string/diff';

export {
	countWords,
	countWords as countWordsInString,
	extractNumbersFromString as extractNumbers,
	extractNumbersFromString,
	getLevenshteinDistance,
	getLevenshteinDistance as levenshteinDistance,
	extractNumbersFromString as parseNumbersFromText,
	countWords as wordCount,
} from 'src/string/utilities';

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
	safeAdd,
	safeAdd as add,
	getDecimalPlaces,
	getDecimalPlaces as decimalPlaces,
	getAverage as average,
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
} from 'src/number/basics';

export { Currency } from 'src/number/Currency';

export { Unit, Unit as UnitConverter } from 'src/number/Unit';

export { calculatePercentage } from 'src/number/percent';

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
} from 'src/number/fibonacci';

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
} from 'src/number/convert';

export {
	findPrimeNumbers,
	findPrimeNumbers as getPrimeNumbers,
	isPrime,
	isPrime as isPrimeNumber,
} from 'src/number/prime';

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
} from 'src/number/utilities';

export { getNumbersInRange } from 'src/number/range';

// ! Array Utilities
export {
	filterArrayOfObjects,
	flattenArray,
	getLastArrayElement,
	isInvalidOrEmptyArray,
	shuffleArray,
} from 'src/array/basics';

export {
	averageByField,
	averageByField as avgByField,
	groupAndAverageByField,
	groupAndAverageByField as groupAndAvgByField,
	groupAndSumByField,
	sumByField,
	sumFieldDifference,
	sumFieldDifference as totalDeltaByField,
} from 'src/array/calc';

export { Finder } from 'src/array/Finder';

export {
	naturalSort as compareNaturally,
	naturalSort as compareSorter,
	naturalSort,
	naturalSort as naturalSortForString,
	sortAnArray,
} from 'src/array/sort';

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
} from 'src/array/transform';

// ! Object Utilities
export {
	cloneObject,
	countObjectFields,
	extractObjectKeys as extractKeys,
	extractObjectKeysDeep as extractKeysDeep,
	extractObjectKeys,
	extractObjectEntries as extractEntries,
	extractObjectEntries as objectEntries,
	extractObjectEntries,
	extractObjectKeysDeep,
} from 'src/object/basics';

export {
	generateQueryParams as createQueryParams,
	generateQueryParams as formatQueryParams,
	generateQueryParams,
	parseQueryString as getQueryStringAsObject,
	parseQueryString,
	parseQueryString as queryStringToObject,
	parseQueryStringLiteral as literalQueryStringToObject,
	parseQueryStringLiteral,
} from 'src/dom/query';

export {
	extractNewFields,
	extractUpdatedAndNewFields,
	extractUpdatedFields,
	flattenObjectDotNotation,
	flattenObjectKeyValue,
	mergeAndFlattenObjects,
	mergeObjects,
	parseJsonToObject,
} from 'src/object/objectify';

export {
	parseObjectValues,
	parseObjectValues as parseStringifiedObjectValues,
	sanitizeData,
} from 'src/object/sanitize';

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
} from 'src/object/convert';

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
} from 'src/utils/index';

export { getCountryByPhone } from 'src/utils/xtras';
