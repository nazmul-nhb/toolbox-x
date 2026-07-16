import {
	extractEmails,
	extractURLs,
	formatUnitWithPlural,
	htmlToText,
	markdownToText,
	maskString,
	normalizeString,
	replaceAllInString,
	reverseString,
	slugifyString,
} from 'src/string/convert';
import { describe, expect, it, vi } from 'vitest';

describe('convert.ts utils', () => {
	describe('replaceAllInString', () => {
		it('should replace all occurrences of a string', () => {
			expect(replaceAllInString('foo bar foo', 'foo', 'baz')).toBe('baz bar baz');
		});

		it('should replace all occurrences of a RegExp (ensuring global flag)', () => {
			expect(replaceAllInString('foo bar foo', /foo/, 'baz')).toBe('baz bar baz');
			expect(replaceAllInString('foo bar foo', /foo/g, 'baz')).toBe('baz bar baz');
			expect(replaceAllInString('Foo bar foo', /foo/gi, 'baz')).toBe('baz bar baz');
		});

		it('should trim the input string first', () => {
			expect(replaceAllInString('  foo bar foo  ', 'foo', 'baz')).toBe('baz bar baz');
		});
	});

	describe('slugifyString', () => {
		it('should convert string to a lowercase slug', () => {
			expect(slugifyString('Hello World!')).toBe('hello-world');
			expect(slugifyString('   Some --- Title   ')).toBe('some-title');
		});

		it('should normalize accented characters', () => {
			expect(slugifyString('Crème brûlée')).toBe('creme-brulee');
		});

		it('should handle numbers and special characters', () => {
			expect(slugifyString('Number 1 choice & value')).toBe('number-1-choice-value');
		});
	});

	describe('maskString', () => {
		it('should mask string with default settings', () => {
			expect(maskString('1234567890')).toBe('1********0');
		});

		it('should respect start and end options', () => {
			expect(maskString('1234567890', { start: 2, end: 2 })).toBe('12******90');
			expect(maskString('1234567890', { start: 3, end: 0 })).toBe('123*******');
		});

		it('should use custom mask character', () => {
			expect(maskString('1234567890', { maskCharacter: '#' })).toBe('1########0');
		});

		it('should mask the whole string if length is less than or equal to start + end', () => {
			expect(maskString('123', { start: 2, end: 2 })).toBe('***');
		});

		it('should trim input if trim option is true', () => {
			expect(maskString('  12345  ', { start: 1, end: 1, trim: true })).toBe('1***5');
		});
	});

	describe('reverseString', () => {
		it('should reverse the trimmed input string', () => {
			expect(reverseString('hello')).toBe('olleh');
			expect(reverseString('  hello world  ')).toBe('dlrow olleh');
		});
	});

	describe('normalizeString', () => {
		it('should remove accents / diacritics', () => {
			expect(normalizeString('Crème brûlée')).toBe('Creme brulee');
			expect(normalizeString('München')).toBe('Munchen');
		});
	});

	describe('extractEmails', () => {
		it('should extract valid emails from string', () => {
			const text = 'Contact us at info@example.com or support.team@domain.co.uk';
			expect(extractEmails(text)).toEqual([
				'info@example.com',
				'support.team@domain.co.uk',
			]);
		});

		it('should return empty array if no emails are present', () => {
			expect(extractEmails('no email here')).toEqual([]);
			// @ts-expect-error
			expect(extractEmails(null)).toEqual([]);
		});
	});

	describe('extractURLs', () => {
		it('should extract valid http and https URLs', () => {
			const text =
				'Visit http://google.com and https://github.com/nazmul-nhb/toolbox-x for info';
			expect(extractURLs(text)).toEqual([
				'http://google.com',
				'https://github.com/nazmul-nhb/toolbox-x',
			]);
		});

		it('should return empty array if no URLs are present', () => {
			expect(extractURLs('no URL here')).toEqual([]);
		});
	});

	describe('formatUnitWithPlural', () => {
		it('should handle singular vs plural formatting', () => {
			expect(formatUnitWithPlural(1, 'day')).toBe('1 day');
			expect(formatUnitWithPlural(2, 'day')).toBe('2 days');
			expect(formatUnitWithPlural(0, 'day')).toBe('0 days');
			expect(formatUnitWithPlural(-1, 'day')).toBe('-1 day');
			expect(formatUnitWithPlural(-2, 'day')).toBe('-2 days');
		});

		it('should omit count prefix if withNumber is false', () => {
			expect(formatUnitWithPlural(1, 'day', false)).toBe('day');
			expect(formatUnitWithPlural(2, 'day', false)).toBe('days');
		});
	});

	describe('htmlToText', () => {
		it('should convert simple HTML to plain text', () => {
			expect(htmlToText('<h1>Hello World</h1>')).toBe('Hello World');
			expect(htmlToText('<p>Hello <b>World</b></p>')).toBe('Hello World');
		});

		it('should return empty string if input is null/undefined', () => {
			expect(htmlToText(null)).toBe('');
			expect(htmlToText(undefined)).toBe('');
		});

		it('should convert br tag to newline by default', () => {
			expect(htmlToText('Line 1<br>Line 2')).toBe('Line 1\nLine 2');
			expect(htmlToText('Line 1<br/>Line 2')).toBe('Line 1\nLine 2');
		});

		it('should not convert br tag to newline if brToNewLine is false', () => {
			expect(htmlToText('Line 1<br>Line 2', { brToNewLine: false })).toBe('Line 1Line 2');
		});

		it('should strip scripts and styles by default', () => {
			const html =
				'<div>Text<script>alert(1);</script><style>body { color: red; }</style></div>';
			expect(htmlToText(html)).toBe('Text');
		});

		it('should decode HTML entities', () => {
			expect(
				htmlToText('A &amp; B &lt; C &gt; D &quot; E &apos; F &#39; G &nbsp; H')
			).toBe("A & B < C > D \" E ' F ' G H");
			expect(htmlToText('G&nbsp;&nbsp;H', { normalizeWhitespace: false })).toBe('G  H');
			expect(htmlToText('&#x3a;')).toBe(':');
			expect(htmlToText('&#58;')).toBe(':');
		});

		it('should handle block tags with block separators', () => {
			expect(htmlToText('<p>Paragraph 1</p><p>Paragraph 2</p>')).toBe(
				'Paragraph 1\n\nParagraph 2'
			);
			expect(
				htmlToText('<p>Paragraph 1</p><p>Paragraph 2</p>', {
					blockSeparator: '---',
				})
			).toBe('Paragraph 1------Paragraph 2---');
		});

		it('should preserve pre and code blocks if preservePreAndCode is true', () => {
			const html = '<pre>const x = 1;<br>const y = 2;</pre>';
			expect(htmlToText(html, { preservePreAndCode: true })).toBe(
				'const x = 1;\nconst y = 2;'
			);
		});

		it('should manage table cell formatting', () => {
			const html = '<table><tr><td>Cell 1</td><td>Cell 2</td></tr></table>';
			expect(htmlToText(html)).toBe('Cell 1\tCell 2');
			expect(htmlToText(html, { tableCellSeparator: ' | ' })).toBe('Cell 1 | Cell 2');
		});

		it('should support lists with list stack state', () => {
			const html = '<ul><li>Item 1</li><li>Item 2</li></ul>';
			expect(htmlToText(html)).toBe('- Item 1\n- Item 2');

			const htmlOl = '<ol><li>First</li><li>Second</li></ol>';
			expect(htmlToText(htmlOl)).toBe('1. First\n2. Second');
		});

		it('should respect custom list markers', () => {
			const html = '<ul><li>A</li></ul><ol><li>B</li></ol>';
			expect(htmlToText(html, { listMarker: '*' })).toBe('*A\n\n*B');
			expect(htmlToText(html, { listMarker: { ul: '• ', ol: '#. ' } })).toBe(
				'• A\n\n#. B'
			);
		});

		it('should normalize blank lines and trim output', () => {
			const html = '<div>Line 1</div>\n\n\n\n<div>Line 2</div>';
			expect(htmlToText(html, { maxBlankLines: 1 })).toBe('Line 1\n\nLine 2');
			expect(htmlToText('   Hello   ', { trimOutput: false })).toBe(' Hello ');
		});
	});

	describe('markdownToText', () => {
		it('should strip markdown formatting to plain text', () => {
			expect(markdownToText('# Hello **World**')).toBe('Hello World');
			expect(markdownToText('Click [Google](https://google.com)')).toBe('Click Google');
		});

		it('should return empty string if input is null/undefined', () => {
			expect(markdownToText(null)).toBe('');
			expect(markdownToText(undefined)).toBe('');
		});

		it('should handle images alt text', () => {
			expect(markdownToText('![Image Alt](http://example.com/img.png)')).toBe(
				'Image Alt'
			);
			expect(
				markdownToText('![Image Alt](http://example.com/img.png)', {
					useImgAltText: false,
				})
			).toBe('');
		});

		it('should replace inline link syntax with URL if replaceLinksWithURL is true', () => {
			expect(
				markdownToText('Click [Google](https://google.com)', {
					replaceLinksWithURL: true,
				})
			).toBe('Click https://google.com');
		});

		it('should separate links and texts if separateLinksAndTexts is defined', () => {
			expect(
				markdownToText('Click [Google](https://google.com)', {
					separateLinksAndTexts: ' at ',
				})
			).toBe('Click Google at https://google.com');
		});

		it('should strip headers and leaders from lists', () => {
			expect(markdownToText('* Item 1\n* Item 2')).toBe('Item 1\nItem 2');
			expect(markdownToText('* Item 1\n* Item 2', { listUnicodeChar: '•' })).toBe(
				'• Item 1\n• Item 2'
			);
		});

		it('should strip blockquotes and HTML tags', () => {
			expect(markdownToText('> This is a quote')).toBe('This is a quote');
			expect(markdownToText('Hello <span>World</span>')).toBe('Hello World');
		});

		it('should skip specific HTML tags', () => {
			expect(
				markdownToText('Hello <span>World</span>', { htmlTagsToSkip: ['span'] })
			).toBe('Hello <span>World</span>');
		});

		it('should support GFM fenced code blocks', () => {
			const md = '```js\nconst x = 1;\nconsole.log(x);\n```';
			expect(markdownToText(md)).toBe('const x = 1;\nconsole.log(x);');
		});

		it('should support strike-through and emphasis (asterisk and underscore)', () => {
			expect(markdownToText('~~deleted~~')).toBe('deleted');
			expect(markdownToText('*italic* or **bold**')).toBe('italic or bold');
			expect(markdownToText('_italic_ or __bold__')).toBe('italic or bold');
		});

		it('should handle custom patterns', () => {
			const result = markdownToText('# Header', {
				customPatterns: {
					atxHeader: /^#{1,6}\s*(.*)$/gm, // Custom simplified pattern
				},
			});
			expect(result).toBe('Header');
		});

		it('should throw error if throwError is true and parsing fails', () => {
			const badPattern = {
				[Symbol.replace]() {
					throw new Error('Mock Replace Error');
				},
			};
			expect(() =>
				markdownToText('# Header', {
					throwError: true,
					customPatterns: {
						// @ts-expect-error
						atxHeader: badPattern,
					},
				})
			).toThrow('Mock Replace Error');
		});

		it('should catch error and log it if throwError is false', () => {
			const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
			const md = '# Header';
			const badPattern = {
				[Symbol.replace]() {
					throw new Error('Mock Replace Error');
				},
			};
			const result = markdownToText(md, {
				throwError: false,
				customPatterns: {
					// @ts-expect-error
					atxHeader: badPattern,
				},
			});
			expect(result).toBe(md);
			expect(consoleErrorSpy).toHaveBeenCalled();
			consoleErrorSpy.mockRestore();
		});
	});
});
