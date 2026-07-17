import { getGreeting } from 'src/date/greet';
import { describe, expect, it } from 'vitest';

describe('getGreeting', () => {
	it('should return appropriate greeting message based on custom currentTime', () => {
		expect(getGreeting({ currentTime: '08:00' })).toBe('Good Morning!');
		expect(getGreeting({ currentTime: '12:30' })).toBe('Good Noon!');
		expect(getGreeting({ currentTime: '15:00' })).toBe('Good Afternoon!');
		expect(getGreeting({ currentTime: '19:00' })).toBe('Good Evening!');
		expect(getGreeting({ currentTime: '01:00' })).toBe('Hello, Night Owl!');
	});

	it('should prepend and append messages correctly', () => {
		const greeting = getGreeting({
			currentTime: '08:00',
			prependToMsg: 'Hello! ',
			appendToMsg: ' How are you?',
		});
		expect(greeting).toBe('Hello! Good Morning! How are you?');
	});

	it('should fallback to default currentTime (current system time) and succeed', () => {
		const greeting = getGreeting();
		expect(typeof greeting).toBe('string');
		expect(greeting.length).toBeGreaterThan(0);
	});
});
