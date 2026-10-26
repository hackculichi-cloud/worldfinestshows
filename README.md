# World’s Finest Shows — reference homepage mockup

A React 19 / TypeScript / Vite homepage built as a close visual starting point for the World’s Finest Shows redesign. The original site was inspected on October 26, 2026. This version preserves its ribbon logo, navy/pink/blue palette, Roboto typography, multicolour dividers, section order, and reference photography.

## Review and preview

Application changes are delivered through a feature branch and pull request; the project owner approves the merge. The `main` branch was initialized with an empty commit because the repository initially had no commits.

The GitHub Pages site for this repository is a **development preview**, separate from the official website. Built preview files are published on `gh-pages`; application source stays on the PR branch until approved. The preview is a shared review site, not a unique deployment per PR. Future deliveries must update it to match the reviewed commit and verify the live result.

The build workflow also uploads a `homepage-preview` artifact containing `dist/` for each feature-branch push and pull request.

## Development

Use Node.js 22 or 24 (validated on 24.19.0).

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

In the cloud environment, the default npm cache may not be writable. Use:

```sh
npm ci --cache /tmp/worldfinestshows-npm-cache --no-audit --no-fund
```

Vite binds to `0.0.0.0`. The development port defaults to 5173; production preview defaults to 4173. The relative asset base also supports deployment under a GitHub Pages repository path.

## What works

- Mobile navigation and desktop dropdowns.
- Homepage anchor navigation and attraction category filters.
- Search across the six attraction categories, with empty-result handling.
- Attraction detail dialogs, empty preview cart, keyboard/Escape dismissal.
- Locally served reference images and fonts.
- Newsletter UI with browser email validation and a clearly labelled local-only success state.
- Original hero video available on demand, with a direct YouTube fallback link.
- Links to the official event, attraction, and safety pages.

## Boundaries and intentional differences

This preview is not the official website and does not sell tickets or accept payments. The newsletter does not send, save, or transmit email. The event-calendar empty state is a snapshot of the official site on October 26, 2026; it is not a live calendar feed.

The original autoplay YouTube background is represented by a locally served reference photograph plus an on-demand player. Navigation, attraction images, card layout, contrast, and mobile stacking have been made usable instead of reproducing broken or hidden sections observed in the reference capture. Historical prices and expired ticket offers have not been represented as current offers.

See [reference attribution](docs/REFERENCE.md) for the source of the logo, photographs, and icons. These brand assets remain the property of their respective owners and are included to evaluate the requested design fidelity.

## Validation

`npm run build` checks TypeScript and produces the production build. Browser validation exercises desktop/mobile menus, all category filters, details, search, cart, newsletter, video-dialog lifecycle, and internal links. Responsive checks cover 320, 375, 390, 550, 768, 1024, and 1440 pixels. The on-demand third-party YouTube player is separate from local application checks.
