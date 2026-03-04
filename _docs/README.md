# HET Web — Repository Structure

## Website (publicly served via GitHub Pages)

All files at the repository root are served by GitHub Pages:

- `index.html` — Main website entry point
- Any additional CSS, JS, or image assets added at the root

## Supporting Material (not publicly served)

This `_docs/` directory contains reference material that supports the website but is **not** exposed on the public site. Jekyll excludes folders prefixed with `_` from the published site.

Contents:
- `HET_Pack_1_Portfolio_Strategy.docx`
- `HET_Pack_2_Portfolio_Plan_and_Operating_Model.docx`
- `HET_Pack_3_Master_Course_Catalogue.docx`

## Hidden directories

The following dot-prefixed directories are also excluded from the public site by Jekyll:

- `.github/` — GitHub Actions workflows and Copilot configuration
- `.vscode/` — VS Code workspace settings
- `.zoltbot/` — Zoltbot seed configuration

## Deployment

GitHub Pages is configured to serve from the `master` branch root (`/`). Any push to `master` automatically updates the live site. Only root-level files are publicly accessible; `_docs/` and dot-prefixed folders remain private.
