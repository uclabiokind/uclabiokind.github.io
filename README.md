# UCLA BioKind Website

Website for UCLA BioKind Analytics.

## Updating the site

Edit `app/site-data.ts` to update chapter links, recruitment details, project areas, the team year, or members. Page-specific text is in the matching folder under `app/`.

Member photos belong in `public/images/members/`. Add the image path to the member’s entry in `app/site-data.ts`.

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
