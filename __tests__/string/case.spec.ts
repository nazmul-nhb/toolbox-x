import {
	toCamelCase,
	toConstantCase,
	toDotCase,
	toKebabCase,
	toPascalCase,
	toPascalSnakeCase,
	toPathCase,
	toSentenceCase,
	toSnakeCase,
	toTitleCase,
	toTrainCase,
} from 'src/change-case';
import { capitalizeString, convertStringCase } from 'src/string/case';
import { describe, expect, it } from 'vitest';

describe('case.ts utils', () => {
	describe('capitalizeString', () => {
		it('should return empty string if input is empty or invalid', () => {
			expect(capitalizeString('')).toBe('');
			expect(capitalizeString('   ')).toBe('');
			// @ts-expect-error
			expect(capitalizeString(null)).toBe('');
		});

		it('should capitalize the first letter and lowercase the rest by default', () => {
			expect(capitalizeString('hello')).toBe('Hello');
			expect(capitalizeString('hELLO')).toBe('Hello');
			expect(capitalizeString('HELLO')).toBe('Hello');
		});

		it('should capitalize all if capitalizeAll is true', () => {
			expect(capitalizeString('hello world', { capitalizeAll: true })).toBe(
				'HELLO WORLD'
			);
		});

		it('should capitalize first letter of each word if capitalizeEachFirst is true', () => {
			expect(capitalizeString('hello world test', { capitalizeEachFirst: true })).toBe(
				'Hello World Test'
			);
			expect(
				capitalizeString('hELLO wORLD tEST', {
					capitalizeEachFirst: true,
					lowerCaseRest: true,
				})
			).toBe('Hello World Test');
		});

		it('should keep the rest as is if lowerCaseRest is false', () => {
			expect(capitalizeString('hELLO', { lowerCaseRest: false })).toBe('HELLO');
			expect(capitalizeString('helloWORLD', { lowerCaseRest: false })).toBe('HelloWORLD');
			expect(
				capitalizeString('helloWORLD testCASE', {
					capitalizeEachFirst: true,
					lowerCaseRest: false,
				})
			).toBe('HelloWORLD TestCASE');
		});

		it('should handle leading symbols correctly', () => {
			expect(capitalizeString('(hello)')).toBe('(Hello)');
			expect(capitalizeString('"[hello]"')).toBe('"[Hello]"');
			expect(capitalizeString('...hello...')).toBe('...Hello...');
		});
	});

	describe('convertStringCase', () => {
		it('should return empty string if input is empty or invalid', () => {
			expect(convertStringCase('', 'camelCase')).toBe('');
			// @ts-expect-error
			expect(convertStringCase(null, 'camelCase')).toBe('');
		});

		it('should handle camelCase format', () => {
			expect(convertStringCase('my-variable_name', 'camelCase')).toBe('myVariableName');
			expect(convertStringCase('My Variable Name', 'camelCase')).toBe('myVariableName');
			expect(convertStringCase('myVariableName', 'camelCase')).toBe('myVariableName');
		});

		it('should handle PascalCase format', () => {
			expect(convertStringCase('my-variable_name', 'PascalCase')).toBe('MyVariableName');
			expect(convertStringCase('my variable name', 'PascalCase')).toBe('MyVariableName');
		});

		it('should handle snake_case format', () => {
			expect(convertStringCase('My-Variable Name', 'snake_case')).toBe(
				'my_variable_name'
			);
		});

		it('should handle kebab-case format', () => {
			expect(convertStringCase('My_Variable Name', 'kebab-case')).toBe(
				'my-variable-name'
			);
		});

		it('should handle Title Case format, keeping small words lowercase unless first/last', () => {
			expect(convertStringCase('the API of things', 'Title Case')).toBe(
				'The Api of Things'
			);
			expect(convertStringCase('of mice and men', 'Title Case')).toBe('Of Mice and Men');
		});

		it('should handle Sentence case format', () => {
			expect(convertStringCase('my variable NAME', 'Sentence case')).toBe(
				'My variable name'
			);
		});

		it('should handle lowercase and UPPERCASE formats', () => {
			expect(convertStringCase('My Variable Name', 'lowercase')).toBe('my variable name');
			expect(convertStringCase('My Variable Name', 'UPPERCASE')).toBe('MY VARIABLE NAME');
		});

		it('should preserve leading and trailing punctuation', () => {
			expect(convertStringCase('++hello_world++', 'PascalCase')).toBe('++HelloWorld++');
			expect(convertStringCase('...hello-world...', 'camelCase')).toBe(
				'...helloWorld...'
			);
			expect(convertStringCase('!!!', 'camelCase')).toBe('!!!');
		});

		it('should split camel boundary or number boundary on single tokens', () => {
			expect(convertStringCase('myVariableName', 'snake_case')).toBe('my_variable_name');
			expect(convertStringCase('version123', 'kebab-case')).toBe('version-123');
		});

		it('should respect preserveAcronyms option', () => {
			expect(
				convertStringCase('get API response', 'camelCase', { preserveAcronyms: true })
			).toBe('getAPIResponse');

			expect(
				convertStringCase('get API response', 'PascalCase', { preserveAcronyms: true })
			).toBe('GetAPIResponse');

			expect(
				convertStringCase('the API of things', 'Title Case', { preserveAcronyms: true })
			).toBe('The API of Things');
		});

		it('should return punctuation only if no words are present', () => {
			expect(convertStringCase('!!!???', 'camelCase')).toBe('!!!???');
		});
	});

	describe('toCamelCase', () => {
		it('should convert to camelCase', () => {
			expect(toCamelCase('hello world')).toBe('helloWorld');
			expect(toCamelCase('my-awesome_string')).toBe('myAwesomeString');
			expect(toCamelCase('value*with+custom', '*', '+')).toBe('valueWithCustom');
			// @ts-expect-error
			expect(toCamelCase(null)).toBe('');
		});
	});

	describe('toPascalCase', () => {
		it('should convert to PascalCase', () => {
			expect(toPascalCase('hello world')).toBe('HelloWorld');
			expect(toPascalCase('value*with+custom', '*', '+')).toBe('ValueWithCustom');
			// @ts-expect-error
			expect(toPascalCase(null)).toBe('');
		});
	});

	describe('toSnakeCase', () => {
		it('should convert to snake_case', () => {
			expect(toSnakeCase('hello world')).toBe('hello_world');
			expect(toSnakeCase('value*with+custom', '*', '+')).toBe('value_with_custom');
			// @ts-expect-error
			expect(toSnakeCase(null)).toBe('');
		});
	});

	describe('toKebabCase', () => {
		it('should convert to kebab-case', () => {
			expect(toKebabCase('hello world')).toBe('hello-world');
			expect(toKebabCase('value*with+custom', '*', '+')).toBe('value-with-custom');
			// @ts-expect-error
			expect(toKebabCase(null)).toBe('');
		});
	});

	describe('toTrainCase', () => {
		it('should convert to Train-Case', () => {
			expect(toTrainCase('hello world')).toBe('Hello-World');
			expect(toTrainCase('value*with+custom', '*', '+')).toBe('Value-With-Custom');
			// @ts-expect-error
			expect(toTrainCase(null)).toBe('');
		});
	});

	describe('toDotCase', () => {
		it('should convert to dot.case', () => {
			expect(toDotCase('hello world')).toBe('hello.world');
			expect(toDotCase('value*with+custom', '*', '+')).toBe('value.with.custom');
			// @ts-expect-error
			expect(toDotCase(null)).toBe('');
		});
	});

	describe('toPathCase', () => {
		it('should convert to path/case', () => {
			expect(toPathCase('hello world')).toBe('hello/world');
			expect(toPathCase('value*with+custom', '*', '+')).toBe('value/with/custom');
			// @ts-expect-error
			expect(toPathCase(null)).toBe('');
		});
	});

	describe('toConstantCase', () => {
		it('should convert to CONSTANT_CASE', () => {
			expect(toConstantCase('hello world')).toBe('HELLO_WORLD');
			expect(toConstantCase('value*with+custom', '*', '+')).toBe('VALUE_WITH_CUSTOM');
			// @ts-expect-error
			expect(toConstantCase(null)).toBe('');
		});
	});

	describe('toPascalSnakeCase', () => {
		it('should convert to Pascal_Snake_Case', () => {
			expect(toPascalSnakeCase('hello world')).toBe('Hello_World');
			expect(toPascalSnakeCase('value*with+custom', '*', '+')).toBe('Value_With_Custom');
			// @ts-expect-error
			expect(toPascalSnakeCase(null)).toBe('');
		});
	});

	describe('toTitleCase', () => {
		it('should convert to Title Case', () => {
			expect(toTitleCase('hello world')).toBe('Hello World');
			expect(toTitleCase('the API of things')).toBe('The A P I of Things');
			expect(toTitleCase('value*with+custom', '*', '+')).toBe('Value with Custom');
			// @ts-expect-error
			expect(toTitleCase(null)).toBe('');
		});
	});

	describe('toSentenceCase', () => {
		it('should convert to Sentence case', () => {
			expect(toSentenceCase('hello world')).toBe('Hello world');
			expect(toSentenceCase('value*with+custom', '*', '+')).toBe('Value with custom');
			// @ts-expect-error
			expect(toSentenceCase(null)).toBe('');
		});
	});
});
