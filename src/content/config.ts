import { defineCollection } from 'astro:content';
import { moduleSchema } from './schema';

const modules = defineCollection({
	type: 'content',
	schema: moduleSchema,
});

export const collections = { modules };
