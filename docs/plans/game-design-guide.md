# STRINGS interactive game-design guide

## Goal

Replace the unfinished playable prototype with a static website for the development team to explore the complete STRINGS Game Design Document v1.0. The Markdown document remains the source of truth and is preserved in the repository.

## Scope and approach

- Organize all 20 sections and the glossary into navigable chapters, preserving meaningful details, locked decisions, proposals, initial tuning, deferred work, milestones, open questions, and supersession notes. Make it easy to distinguish design authority from unvalidated ideas and completed implementation.
- Provide a clear overview and linked sections for the world, campaign and run rules, player controls, combat, enemies, artifact discovery, regions, Guardians, museum, presentation, technical/accessibility requirements, cultural editorial rules, milestones, testing, and risks. Include a way to reach the original document.
- Add practical client-side navigation and search or filtering for a long reference, with anchors/deep links and accessible keyboard operation. Do not invent cultural facts, mechanics, or development status. The guide is informational, not a playable game or a data-editing application.
- Create an illustrated, responsive visual direction suited to the project's low-poly, cel-shaded world. Reuse suitable generated art and generate additional images where they help explain the design. Treat concept art as fictional illustration; do not depict an invented weapon as a locked mechanic.
- Replace the prototype's game-specific code and tests with the guide while retaining the original document, relevant plan history, and useful generated assets. Reuse the existing approved Vite/TypeScript setup where helpful; no additional dependencies without approval.
- Prepare the static build for the previously supplied GitHub repository and GitHub Pages. The user has already authorized pushing and enabling Pages. Verify the repository and account before publishing; do not overwrite existing remote work.

## Validation

- Check coverage against every section of the source document, especially locked/proposed/deferred labels and persistence, campaign, healing, and artifact rules.
- Run safe project checks and a production build; test navigation, search/filtering, direct links, accessibility basics, and responsive layouts in a browser where available. Report what could not be visually verified.
- Review changed files and Git status, ensure the static site works under the repository's GitHub Pages path, and confirm the published URL and deployment status when possible.

## Checklist

- [x] Clarify audience, coverage, presentation, and replacement of the prototype.
- [x] Obtain review approval for this revised plan.
- [x] Build the guide and integrate generated artwork.
- [ ] Check source-document coverage, behavior, accessibility, and production build.
- [ ] Review changes and publish to the authorized GitHub repository and Pages, if account access permits.

## Progress

The guide and artwork are implemented. Four focused tests and the production build pass; desktop browser search, chapter navigation, direct links, and the revised table layout were checked. Mobile layout still needs browser verification. Source was uploaded to the private GitHub repository, but Pages is not yet enabled: the in-app browser is signed out and the connected GitHub tool does not provide Pages settings. The local repository is initialized but has no commit or remote tracking branch; the remote files were written through the GitHub connector.
