import {
	isCamelCase,
	isEmojiOnly,
	isKebabCase,
	isPalindrome,
	isPascalCase,
	isSnakeCase,
} from 'src/string/guards';
import { describe, expect, it } from 'vitest';

describe('guards.ts utils', () => {
	describe('isPalindrome', () => {
		it('should identify basic palindromes', () => {
			expect(isPalindrome('racecar')).toBe(true);
			expect(isPalindrome('madam')).toBe(true);
			expect(isPalindrome('hello')).toBe(false);
		});

		it('should be case-insensitive and ignore non-alphanumeric characters', () => {
			expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
			expect(isPalindrome('No lemon, no melon')).toBe(true);
		});

		it('should return true for empty string or single characters', () => {
			expect(isPalindrome('')).toBe(true);
			expect(isPalindrome('a')).toBe(true);
		});
	});

	describe('isCamelCase', () => {
		it('should identify valid camelCase strings', () => {
			expect(isCamelCase('camelCase')).toBe(true);
			expect(isCamelCase('myVariableName')).toBe(true);
			expect(isCamelCase('a')).toBe(true);
		});

		it('should reject invalid camelCase strings', () => {
			expect(isCamelCase('PascalCase')).toBe(false);
			expect(isCamelCase('snake_case')).toBe(false);
			expect(isCamelCase('kebab-case')).toBe(false);
			expect(isCamelCase('camelCase123')).toBe(false); // numbers are not covered by regex
			expect(isCamelCase('')).toBe(false);
		});
	});

	describe('isPascalCase', () => {
		it('should identify valid PascalCase strings', () => {
			expect(isPascalCase('PascalCase')).toBe(true);
			expect(isPascalCase('MyVariableName')).toBe(true);
			expect(isPascalCase('A')).toBe(true);
		});

		it('should reject invalid PascalCase strings', () => {
			expect(isPascalCase('camelCase')).toBe(false);
			expect(isPascalCase('snake_case')).toBe(false);
			expect(isPascalCase('kebab-case')).toBe(false);
			expect(isPascalCase('')).toBe(false);
		});
	});

	describe('isSnakeCase', () => {
		it('should identify valid snake_case strings', () => {
			expect(isSnakeCase('snake_case')).toBe(true);
			expect(isSnakeCase('my_variable_name')).toBe(true);
			expect(isSnakeCase('a')).toBe(true);
		});

		it('should reject invalid snake_case strings', () => {
			expect(isSnakeCase('camelCase')).toBe(false);
			expect(isSnakeCase('PascalCase')).toBe(false);
			expect(isSnakeCase('kebab-case')).toBe(false);
			expect(isSnakeCase('snake__case')).toBe(false);
			expect(isSnakeCase('')).toBe(false);
		});
	});

	describe('isKebabCase', () => {
		it('should identify valid kebab-case strings', () => {
			expect(isKebabCase('kebab-case')).toBe(true);
			expect(isKebabCase('my-variable-name')).toBe(true);
			expect(isKebabCase('a')).toBe(true);
		});

		it('should reject invalid kebab-case strings', () => {
			expect(isKebabCase('camelCase')).toBe(false);
			expect(isKebabCase('PascalCase')).toBe(false);
			expect(isKebabCase('snake_case')).toBe(false);
			expect(isKebabCase('kebab--case')).toBe(false);
			expect(isKebabCase('')).toBe(false);
		});
	});

	describe('isEmojiOnly', () => {
		it('should identify strings containing only emojis', () => {
			expect(isEmojiOnly('😀')).toBe(true);
			expect(isEmojiOnly('😀😃😄')).toBe(true);
		});

		it('should reject strings containing other characters', () => {
			expect(isEmojiOnly('😀 hello')).toBe(false);
			expect(isEmojiOnly('hello')).toBe(false);
			expect(isEmojiOnly('')).toBe(false);
		});
	});
});
