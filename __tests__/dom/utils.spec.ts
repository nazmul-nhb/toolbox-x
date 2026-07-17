// @vitest-environment happy-dom

import { copyToClipboard, smoothScrollTo, toggleFullScreen } from 'src/dom/utils';
import { describe, expect, it, vi } from 'vitest';

describe('dom general utils', () => {
	it('should support smoothScrollTo', () => {
		const elem = document.createElement('div');
		const spy = vi.spyOn(elem, 'scrollIntoView');
		smoothScrollTo(elem);
		expect(spy).toHaveBeenCalled();
	});

	it('should toggle full screen', () => {
		const elem = document.createElement('div');
		elem.requestFullscreen = vi.fn();
		toggleFullScreen(elem);
		expect(elem.requestFullscreen).toHaveBeenCalled();
	});

	it('should copy text to clipboard using navigator.clipboard', async () => {
		const writeTextMock = vi.fn().mockResolvedValue(undefined);
		vi.stubGlobal('navigator', {
			clipboard: {
				writeText: writeTextMock,
			},
		});

		await copyToClipboard('Hello World');
		expect(writeTextMock).toHaveBeenCalledWith('Hello World');

		vi.unstubAllGlobals();
	});
});
