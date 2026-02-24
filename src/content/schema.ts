import { z } from 'astro/zod';

export const moduleSchema = z.object({
	title: z.string(),
	moduleNumber: z.number().int().positive(),
	status: z.enum(['planned', 'in-progress', 'complete']),
	summary: z.string(),
	publishedAt: z.date(),
	readingTimeMinutes: z.number().int().positive().optional(),
});
