# SlideWorks documentation

The source for [docs.slideworks.app](https://docs.slideworks.app). Public pages explain how to set up SlideWorks, build decks with an agent over MCP, and present them. This README is for documentation maintainers.

This is a stub (SW-105): every page is an outline marked "Coming soon". Pages are written as the Features they describe ship.

## Local preview

Use the Node version in `.node-version` and the pnpm version in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm build` generates `dist/`, builds the Pagefind search index, and fails on broken internal Markdown or MDX links. `pnpm preview` serves the built site. `pnpm check` checks Astro and TypeScript files. The build workflow runs on pull requests and pushes to `main`.

## Pages and links

Pages live in `src/content/docs/`. Pages use MDX so they can import components and shared configuration. Keep each page's slug and title when you replace its outline. `src/sidebar.ts` declares the sections and their order.

Use root-relative links with trailing slashes, such as `/start/quickstart/`. Quote frontmatter values that contain a colon.

In MDX, import the published image name instead of writing it out again:

```mdx
import { image } from '@/config/site';

Use the <code>{image}</code> image.
```

## Deploy

Merging to `main` builds the site and uploads `dist/` to the Cloudflare Pages project `slideworks-docs`, which serves `docs.slideworks.app`. The workflow needs `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, set on the repository or the `slide-works` organisation; until both exist the upload is skipped with a notice. [`docs/hosting.md`](docs/hosting.md) is the one-time setup checklist.

## Brand assets

The mark and favicon are copied from `slide-works/slideworks.app`. `src/styles/brand.css` maps that site's Cobalt colours, Plus Jakarta Sans headings and Inter body text onto Starlight. Fonts are self-hosted through `@fontsource`, so readers do not need a connection to Google Fonts.
