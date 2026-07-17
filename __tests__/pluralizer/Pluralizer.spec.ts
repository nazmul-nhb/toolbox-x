import { Pluralizer, pluralizer } from 'src/pluralizer/Pluralizer';
import { describe, expect, it } from 'vitest';

describe('Pluralizer class and instance', () => {
	it('should pluralize common and irregular words', () => {
		expect(pluralizer.pluralize('child')).toBe('children');
		expect(pluralizer.pluralize('goose')).toBe('geese');
		expect(pluralizer.pluralize('cat')).toBe('cats');
	});

	it('should singularize common and irregular words', () => {
		expect(pluralizer.toSingular('children')).toBe('child');
		expect(pluralizer.toSingular('geese')).toBe('goose');
		expect(pluralizer.toSingular('cats')).toBe('cat');
	});

	it('should handle uncountable nouns', () => {
		expect(pluralizer.pluralize('fish')).toBe('fish');
		expect(pluralizer.toSingular('fish')).toBe('fish');
	});

	it('should allow adding custom rules', () => {
		const custom = new Pluralizer();
		custom.addPluralRule(/^(robot)$/i, 'cyborgs');
		expect(custom.pluralize('robot')).toBe('cyborgs');
	});

	it('should restore original casing', () => {
		expect(pluralizer.pluralize('Child')).toBe('Children');
		expect(pluralizer.pluralize('CHILD')).toBe('CHILDREN');
	});
});
