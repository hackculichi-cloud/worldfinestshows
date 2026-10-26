# Deploying to Vercel

The app is a static Vite build. `vercel.json` declares the framework, frozen-lockfile install command, build command, and output directory. The app requires no environment variables or backend services. Vercel deployment credentials are separate from application configuration.

## Git integration (recommended)

Import `hackculichi-cloud/worldfinestshows` into the intended Vercel account/team. Use repository root as the root directory, Vite as the framework, and Node.js 24.x (22.x also works). Install with `npm ci`, build with `npm run build`, and serve `dist`.

- Production branch: `main`.
- Preview branches: feature/PR branches.
- Application environment variables: none.
- Exclude `gh-pages` from automatic builds: that branch contains only the older GitHub Pages output, not application source.
- Review on Vercel's generated URL before attaching any custom domain. Do not modify the official World's Finest Shows domain.

Creating/importing the project requires access to the intended Vercel account. A public GitHub repository alone does not grant Vercel deployment access.

## CLI from this cloud environment

When CLI deployment is needed, securely configure `VERCEL_TOKEN` for `api.vercel.com` in environment settings. Never paste token values into chat, commit them, or include them in documentation. Reuse an existing Vercel project when one is linked or supplied. Confirm the intended team before selecting between multiple teams.

Use Vercel CLI's authenticated `link` command to associate this checkout with the project, then create and verify the requested deployment. The local `.vercel/` directory is ignored by Git. Account credentials must stay outside the checkout.

## Readiness checks

1. `npm ci` and `npm run build` must complete successfully.
2. Vercel must report the actual deployment as ready.
3. Open the returned URL and check the homepage, images/fonts, desktop attraction filters, mobile navigation, and newsletter demo.
4. Put the verified Vercel URL in the PR. Do not describe an import link, build configuration, or GitHub Pages site as a completed Vercel deployment.

The newsletter remains a local UI demo, the cart does not take payments, and the calendar remains a reference snapshot. Deploying does not connect those services.
