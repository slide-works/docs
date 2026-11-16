# Hosting owner checklist

This is a note for the repository operator. It is not part of the public documentation.
SW-105 tracks it. The same steps cover the landing site (`slide-works/slideworks.app`); its differences are noted inline.

## Create the Pages projects

- [ ] Sign in to the Cloudflare account that owns the `slideworks.app` zone.
- [ ] Create two **Direct Upload** Pages projects with production branch `main`:
  `slideworks` (landing) and `slideworks-docs` (documentation).

  ```sh
  npx --yes wrangler@4.147.0 login
  npx --yes wrangler@4.147.0 pages project create slideworks --production-branch main
  npx --yes wrangler@4.147.0 pages project create slideworks-docs --production-branch main
  ```

  Leave Git integration disabled. GitHub Actions builds and uploads.

## Add the secrets

- [ ] Create a Cloudflare API token with **Account → Cloudflare Pages: Edit** for that account, and copy the account ID.
- [ ] Add both as `slide-works` organisation secrets (visible to `slideworks.app` and `docs`), or per repository:

  ```sh
  gh secret set CLOUDFLARE_API_TOKEN --org slide-works --repos slideworks.app,docs
  gh secret set CLOUDFLARE_ACCOUNT_ID --org slide-works --repos slideworks.app,docs
  ```

  Paste each value at the prompt. Never put them in files, workflow YAML, command arguments or commits.

## Publish and attach the domains

- [ ] Re-run both deploy workflows on `main`:

  ```sh
  gh workflow run deploy.yml --repo slide-works/slideworks.app --ref main
  gh workflow run deploy.yml --repo slide-works/docs --ref main
  ```

- [ ] Confirm each deployment at its `*.pages.dev` hostname.
- [ ] In **Workers & Pages → Custom domains**, attach `slideworks.app` and `www.slideworks.app` to `slideworks`, and `docs.slideworks.app` to `slideworks-docs`. Accept the DNS records Cloudflare proposes.
- [ ] Wait for the domains and certificates to become active.

## Verify

- [ ] `curl --fail --location --head https://slideworks.app/`, `https://www.slideworks.app/` and `https://docs.slideworks.app/` all return 200.
- [ ] Open the docs: a nested page, search and the theme switch work.
- [ ] Record the URLs on SW-105.
