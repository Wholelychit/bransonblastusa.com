# BransonBlastUSA.com

BransonBlastUSA.com is a visitor and local marketing website for Branson, Missouri. The first production goal is a simple, fast, mobile-friendly static site that can publish safely through GitHub and Cloudflare Pages.

## Purpose

Help visitors quickly find Branson trip ideas, local deals, show and food discovery, and simple planning help. The long-term business goal is local advertising and sponsored placements, but this repo must not add live ads, tracking scripts, payments, affiliate links, private keys, or user accounts without direct approval.

## Current stack

- Plain HTML
- Plain CSS
- Plain JavaScript
- GitHub repository source
- Cloudflare Pages publishing

Do not convert this project to React, Vite, Next.js, TypeScript, or another build system unless Gerry directly approves it.

## Main files

- `index.html` — public homepage
- `styles.css` — mobile-first site styling
- `script.js` — small safe interactive behavior
- `robots.txt` — crawler rules
- `sitemap.xml` — basic sitemap
- `AGENTS.md` — repo work rules
- `CODEX-WORKFLOW.md` — Codex/GitHub work process
- `CODEX-CURRENT-TASK.md` — active repair queue
- `PROJECT-STATUS.md` — current checkpoint

## Deployment notes

Cloudflare Pages should connect to this GitHub repository.

Recommended Pages settings:

- Production branch: `main`
- Build command: leave blank
- Output directory: `.`

Do not manually upload files to Cloudflare. Cloudflare should publish from GitHub.

## Safe production queue

1. Keep the homepage fast, readable, and mobile-first.
2. Add real local content pages only after the starter site is stable.
3. Add SEO basics: title, description, canonical URL, robots.txt, sitemap.xml.
4. Add advertiser inquiry sections without live payment or tracking.
5. Add clear status/checkpoint files after each useful repair batch.

## Stop points

Pause before adding:

- API keys or secrets
- Live ad networks
- Tracking scripts
- Payment setup
- Affiliate links
- Upload systems
- User accounts
- Major code deletion
- Framework rebuilds
