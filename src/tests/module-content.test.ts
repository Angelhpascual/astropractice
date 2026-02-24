import { describe, expect, it } from 'vitest';
import { moduleSchema } from '../content/schema';

describe('module schema', () => {
	it('accepts valid data', () => {
		const payload = {
			title: 'Module 99 – Testing',
			moduleNumber: 99,
			status: 'planned',
			summary: 'Testing schema validation.',
			publishedAt: new Date(),
		};

		expect(() => moduleSchema.parse(payload)).not.toThrow();
	});

	it('rejects an invalid status', () => {
		const payload = {
			title: 'Bad Module',
			moduleNumber: 1,
			status: 'done',
			summary: 'Invalid status',
			publishedAt: new Date(),
		};

		expect(() => moduleSchema.parse(payload)).toThrow();
	});
});
