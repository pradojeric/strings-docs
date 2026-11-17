# STRINGS — Game Design Guide

An illustrated, searchable reference for the STRINGS development team. The guide renders the complete [Game Design Document v1.0](./STRINGS_Game_Design_Document_v1.0.md) as its source of truth; it is not a playable game. Illustrations are fictional concept art, not maps or verified cultural references.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open the local URL shown by Vite. Search filters whole sections; press `/` to focus search and `Escape` to clear it. Chapter links have shareable anchors. The original Markdown can also be downloaded from the guide.

```sh
npm test
npm run build
```

The static build is written to `dist/`. Vite uses relative asset paths so the guide can run under a GitHub Pages repository path. The included GitHub Actions workflow builds and deploys to Pages when the repository's Pages source is set to GitHub Actions.

## Artwork

- `src/art/title-courtyard.png` — AI-generated fictional coastal market title illustration.
- `src/art/regions.png` — AI-generated fictional three-region concept illustration.

Both were generated with the built-in image-generation tool from prompts based on the design document. They are exploratory illustrations rather than final cultural assets.
