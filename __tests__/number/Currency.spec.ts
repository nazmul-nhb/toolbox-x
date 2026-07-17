import { Currency } from 'src/number/Currency';
import { beforeEach, describe, expect, it, vi } from 'vitest';

describe('Currency class', () => {
	beforeEach(() => {
		Currency.clearRateCache();
		vi.restoreAllMocks();
	});

	it('should instantiate and format correctly with default en-US locale', () => {
		const money = new Currency(1234.56, 'USD');
		expect(money.currency).toBe('$1,234.56');
	});

	it('should support customized format options', () => {
		const money = new Currency(1234.56, 'EUR');
		expect(money.format('de-DE')).toBe('1.234,56 €');
	});

	it('should convert synchronously with manual rate', () => {
		const money = new Currency(100, 'USD');
		const converted = money.convertSync('EUR', 0.9);
		expect(converted.currency).toBe('€90.00');
	});

	it('should fetch convert rate and cache it', async () => {
		const responseData = {
			rates: { EUR: 0.85 },
		};

		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			json: async () => responseData,
		});
		vi.stubGlobal('fetch', fetchMock);

		const money = new Currency(100, 'USD');
		const converted = await money.convert('EUR');

		expect(converted.currency).toBe('€85.00');
		expect(fetchMock).toHaveBeenCalledTimes(1);

		// Second call should hit the cache and not trigger fetch
		const convertedCached = await money.convert('EUR');
		expect(convertedCached.currency).toBe('€85.00');
		expect(fetchMock).toHaveBeenCalledTimes(1);

		vi.unstubAllGlobals();
	});

	it('should use fallback rate if fetch fails', async () => {
		const fetchMock = vi.fn().mockRejectedValue(new Error('Network error'));
		vi.stubGlobal('fetch', fetchMock);

		const money = new Currency(100, 'USD');
		const converted = await money.convert('EUR', { fallbackRate: 0.95 });

		expect(converted.currency).toBe('€95.00');

		vi.unstubAllGlobals();
	});

	it('should throw error if fetch fails and no fallback rate is provided', async () => {
		const fetchMock = vi.fn().mockRejectedValue(new Error('Network error'));
		vi.stubGlobal('fetch', fetchMock);

		const money = new Currency(100, 'USD');
		await expect(money.convert('EUR')).rejects.toThrow('Currency conversion failed');

		vi.unstubAllGlobals();
	});
});
