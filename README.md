# Sarraf Rahman's portfolio

A minimal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Local development

Use Node.js 20.9 or later and pnpm.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. The site includes an introduction, career history, and photography gallery.

## Checks and production build

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

Content lives in `src/pages` and `src/lib/info.tsx`; photographs live in `public/gallery`. Shared layout styles live in `src/styles/globals.css`.

## Writing blog posts

Add a Markdown file to `content/posts`, using a lowercase, hyphenated filename such as `hello-world.md`. Its filename becomes the URL: `/blog/hello-world`.

Start each post with metadata:

```markdown
---
title: Hello World
date: '2026-10-07'
description: A small beginning for this blog.
---

Write your post here using Markdown.
```

Keep the date quoted. Posts appear newest first. Markdown supports headings, links, images, lists, blockquotes, and code blocks; embedded HTML is not rendered. Store post images in `public/blog` and reference them with `/blog/your-image.jpg`.

Preview with `pnpm dev`. Posts are generated at build time, so publishing a new post requires rebuilding and deploying the site. A Git-connected host can do this automatically on push; no deployment automation is configured by this blog feature.
