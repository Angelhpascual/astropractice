# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🧠 Learning Workflow

This repo documents a slow-paced learning journey guided by an Astro mentor agent. Every module follows the same routine:

1. **Plan** – clarify goals, constraints, and acceptance criteria. Define how AI will support the task.
2. **Branch** – start from `develop` and create a feature branch named in English (`feature/module-1-foundations`, etc.).
3. **Build** – implement el módulo con Astro y Tailwind (v4) manteniendo código/comentarios en inglés. Valida con `pnpm dev`, `pnpm build` y, más adelante, pruebas automatizadas.
4. **Review** – treat changes like a pull request: describe decisions, request feedback from the mentor, and adjust as needed.
5. **Merge** – integrate into `develop`, then fast-forward `main` only after tests pass. Release `main` as the deployable branch.

The project emphasizes deliberate use of AI: prompts capture requirements, generated code is reviewed critically, and testing practices are introduced progressively (Vitest, Playwright, etc.).

## 🧩 Components & IA (Module 2)

## 📝 Content Collections & Testing (Module 3)

- Usa `src/content/config.ts` para definir colecciones con `defineCollection` + Zod. Cada módulo vive en `src/content/modules/<slug>.md`.
- Cuando la IA ayude a generar plantillas Markdown/MDX, valida que respete el esquema (campos obligatorios, enums, fechas).
- Usa `getCollection('modules')` para consumir el contenido y ordenarlo por `moduleNumber`; renderiza secciones como `/modules` o el sidebar desde los mismos datos.
- Añade pruebas con Vitest para validar el esquema o datos simulados (`pnpm test`). Si necesitas validación extra, instala `@astrojs/check` y ejecuta `pnpm astro check` antes de abrir un PR.

## 🌐 Routing & Data (Module 4)

- Cada módulo tiene su propia ruta (`src/pages/modules/[slug].astro`) usando `getStaticPaths`. Aprovecha `module.render()` para obtener `<Content />`.
- `/modules` enlaza a cada ruta dinámica; usa breadcrumbs o prev/next cuando sea útil.
- Crea endpoints simples (`src/pages/api/*.ts`) para mockear datos externos y consúmelos desde los módulos (fetch en cliente o durante build).
- Añade pruebas adicionales si introduces utilidades nuevas (p.ej., helpers para formatear status o validar frontmatter).
- Cada layout o componente reutilizable vive en `src/layouts` o `src/components` y se escribe en inglés.
- Antes de pedir ayuda a la IA para UI, define props esperadas, reglas de accesibilidad y límites de Tailwind; luego revisa que el markup final respete esos criterios.
- Las solicitudes a la IA deben incluir: qué slot ocupa el componente (`hero`, `sidebar`, etc.), qué datos recibe y cómo se valida (`pnpm dev`, `pnpm build`).
- Toda respuesta de IA se revisa como un PR: semántica, responsive, naming de clases y consistencia con el diseño modular del blog.
