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
