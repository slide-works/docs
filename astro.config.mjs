import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import { sidebar } from './src/sidebar.ts';

export default defineConfig({
  site: 'https://docs.slideworks.app',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'SlideWorks',
      // A custom 404 page avoids duplicate routes and missing-entry warnings.
      disable404Route: true,
      description: 'Set up SlideWorks, build decks with an agent over MCP, and present them from a URL.',
      logo: {
        light: './src/assets/brand/slideworks-mark-light.svg',
        dark: './src/assets/brand/slideworks-mark-dark.svg',
        replacesTitle: false,
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/brand.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/slide-works/slideworks' }],
      sidebar,
      plugins: [starlightLinksValidator()],
    }),
  ],
});
