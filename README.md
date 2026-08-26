# UCLA BioKind Website

Website for UCLA BioKind Analytics.

## Updating the site

Edit `app/site-data.ts` to update chapter links, recruitment details, project areas, the team year, members, or showcase partners. Page-specific text is in the matching folder under `app/`.

Member photos belong in `public/images/members/`. Each member entry in `app/site-data.ts` also has editable `bio` and `linkedinUrl` fields.

Partner logos belong in `public/images/partners/`. Set a partner's `featured` field to `true` only when it should have a full case study. Approved showcase screenshots can be placed in `public/images/showcase/`, and approved report excerpts can be placed in `public/documents/showcase/`. Add their paths to the matching entry in `showcasePartners`. Redact files before adding them because everything under `public/` can be downloaded directly.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Run the checks with:

```bash
npm test
npm run lint
```

## GitHub Pages

The deployment workflow is in `.github/workflows/deploy-pages.yml`.

To publish:

1. Add this project to a GitHub repository with `main` as its default branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`.

The workflow builds, tests, and deploys the site.
