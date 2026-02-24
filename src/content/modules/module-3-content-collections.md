---
title: Module 3 – Content Collections
moduleNumber: 3
status: planned
summary: Model blog content with Astro collections, render listings, and introduce schema tests with Vitest.
publishedAt: 2026-03-02
readingTimeMinutes: 6
---

### Goals

- Configure `defineCollection` + Zod schema to type module entries.
- Fetch content on the homepage and modules list with `getCollection`.
- Introduce Vitest-based schema validation.

### Highlights

- Sidebar now reads real module data instead of hard-coded cards.
- `/modules` renders a timeline of modules from the collection.
- Vitest suite validates schema constraints (status enum, positive moduleNumber).
