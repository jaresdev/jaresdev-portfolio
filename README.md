# Actual status
![screenshot](/public/actual_status_screenshot.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── actual_status_screenshot.png 
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── en/
│   │   │    └── CV.astro
│   │   ├── About.astro
│   │   ├── BentoCard.astro
│   │   ├── CV.astro
│   │   ├── LanguageModal.tsx
│   │   ├── SocialLink.astro
│   │   ├── ThemeToggle.tsx
│   │   └── WorkStatus.astro
│   ├── layouts/
│   │   ├── en/
│   │   │    └── Layout.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── en/
│   │   │    └── index.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |
