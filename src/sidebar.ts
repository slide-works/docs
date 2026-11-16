import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const sidebar = [
  {
    "label": "Home",
    "items": [
      {
        "label": "SlideWorks documentation",
        "link": "/"
      }
    ]
  },
  {
    "label": "Get started",
    "items": [
      {
        "label": "What is SlideWorks",
        "link": "/start/overview/"
      },
      {
        "label": "Quick start: Docker",
        "link": "/start/quickstart/"
      },
      {
        "label": "Install for production",
        "link": "/start/production/"
      },
      {
        "label": "Configuration reference",
        "link": "/start/configuration/"
      },
      {
        "label": "Sign-in and approvals",
        "link": "/start/sign-in/"
      }
    ]
  },
  {
    "label": "Using the app",
    "items": [
      {
        "label": "Deck library",
        "link": "/ui/library/"
      },
      {
        "label": "Deck page",
        "link": "/ui/deck/"
      },
      {
        "label": "Sharing",
        "link": "/ui/sharing/"
      },
      {
        "label": "Presenting",
        "link": "/ui/presenting/"
      }
    ]
  },
  {
    "label": "Agents and MCP",
    "items": [
      {
        "label": "Connect an agent",
        "link": "/agents/connect/"
      },
      {
        "label": "Tool reference",
        "link": "/agents/tools/"
      },
      {
        "label": "Building blocks",
        "link": "/agents/blocks/"
      }
    ]
  },
  {
    "label": "Reference",
    "items": [
      {
        "label": "Glossary",
        "link": "/reference/glossary/"
      },
      {
        "label": "Release notes",
        "link": "/reference/releases/"
      }
    ]
  }
] satisfies StarlightUserConfig['sidebar'];
