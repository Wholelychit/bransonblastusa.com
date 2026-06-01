# Codex Workflow

Use this repo with the no-local-Git workflow.

## Main rule

Create, edit, replace, and commit safe files directly through Codex or the GitHub connector when access is available.

Do not ask Gerry to paste files manually.

## Stack

Keep this as a simple static website unless Gerry directly approves a rebuild.

Current stack:

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`

## Cloudflare Pages setup

Recommended settings:

- Production branch: `main`
- Build command: leave blank
- Output directory: `.`

Cloudflare should publish from GitHub. Do not manually upload files to Cloudflare.

## Safe work allowed

- HTML copy and layout updates
- CSS mobile and visual improvements
- Small JavaScript behavior
- SEO basics
- sitemap and robots updates
- docs and status files
- avatar planning files
- video script planning files

## Stop before adding

- secrets or credentials
- payment tools
- live ad scripts
- live tracking scripts
- account systems
- upload systems
- major framework conversions
- major deletion of working code

## Reporting format

Keep reports short:

- repo worked
- files changed
- commits made
- blocker, if any
- next queue
