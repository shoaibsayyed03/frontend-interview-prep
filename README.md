# Frontend Interview Prep

A searchable library of frontend interview questions and answers - JavaScript, React, browser theory, SEO, system design, and coding-style problems - written for fast revision before interviews.

## Features

- **Single homepage** — browse all questions at `/`. No hopping between detail pages and back.
- **Filters** — topic, question type, and difficulty (synced to URL query params)
- **Keyword search** — debounced search over question titles and tags
- **Inline answers** — long answers clamp to two lines with expand/collapse in place
- **MCQ mode** — select an option, get correct/incorrect feedback and an explanation (when frontmatter includes MCQ fields)
- **Markdown content** — questions authored as files, validated and compiled at build time with Velite
- **Dark UI** — Tailwind + shadcn/ui, optimized for reading code and prose

## Quick start

**Requirements:** Node.js 20+, [pnpm](https://pnpm.io/)

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). `predev` runs Velite so content is built before the dev server starts.

**Useful scripts**

| Script | Description |
| --- | --- |
| `pnpm dev` | Next.js dev server (Velite build first) |
| `pnpm build` | Production build (strict Velite + Next) |
| `pnpm start` | Serve production build |
| `pnpm content:dev` | Velite watch mode for content only |
| `pnpm content:build` | Strict content build (good check before a PR) |
| `pnpm lint` | ESLint |

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Velite](https://velite.js.org/) — markdown → typed JSON at build time
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [rehype-pretty-code](https://rehype-pretty.pages.dev/) + [Shiki](https://shiki.style/) for syntax highlighting

## Content authoring

Questions live under: `content/questions/{topic}/{slug}.md`

**Topics** (folder name must match): 
- `javascript`
- `react`
- `theory`
- `seo`
- `system-design`
- `dsa` 

See `lib/content-taxonomy.ts` for labels and allowed values.

**Question types** (`type` in frontmatter): 
- `conceptual`
- `tricky`
- `scenario`
- `mcq`
- `coding`
- `system-design`

**Difficulty:** 
- `beginner`
- `intermediate`
- `advanced`.

Each file gets a stable id `{topic}-{slug}` (slug from the filename). Duplicate ids fail the build.



## Project structure

```text
app/                    Next.js app (layout, homepage, global styles)
components/
  layout/               Header, footer, hero, filter bar
  questions/            List, answer rows, MCQ, markdown wrapper
  ui/                   shadcn components in use
content/questions/      Markdown source (not committed: .velite/ is generated)
constants/              Filter dropdown definitions
docs/                   Product and architecture docs
lib/                    Taxonomy, filtering, URL params, site config
velite.config.ts        Content schema and build rules
```

Generated output (do not edit): `.velite/` — imported in app as `#velite`.

## Documentation

- [Product requirements](docs/prd.md) — scope, taxonomy, shipped vs planned features
- [Technical architecture](docs/technical-architecture.md) — data flow, routing, UI patterns, design tokens


