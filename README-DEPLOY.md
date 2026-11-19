# MetallicHamed site: how to deploy

A plain static site (HTML, CSS, JS, images, videos). No build step, no server code, no database.
Put the **contents** of this folder at the root of the site and it works as-is.

- Entry page: `index.html`. Arabic version: `ar/`.
- All content (videos, clients, testimonials) lives in `assets/js/data.js`; Arabic text overrides are in `assets/js/i18n-ar.js`.
- Self-hosted videos are in `media/` (about 720 MB, ~416 files in total).
- A `CNAME` file for `metallichamed.com` is included for GitHub Pages.

## GitHub Pages
1. Push everything in this folder to the root of the Pages repository (branch `main`, root).
   Four videos in `media/` are bigger than 25 MB (largest is 43 MB), so upload with **git or GitHub Desktop**:
   the browser uploader rejects files over 25 MB. Every file is under GitHub's 100 MB limit.
2. Settings → Pages → Source: "Deploy from a branch", `main` / root.
3. Custom domain: `metallichamed.com`, then tick "Enforce HTTPS".
4. DNS at the domain registrar:
   - A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME for `www`: `<github-username>.github.io`

## Category links to send clients
- metallichamed.com/gaming/
- metallichamed.com/english/
- metallichamed.com/irl/
- metallichamed.com/ads/
- metallichamed.com/ugc/
- metallichamed.com/podcast/   (podcast, talking head & documentary; /documentary/ redirects here)
- metallichamed.com/ai/
- metallichamed.com/spec/

## Adding a video later
Edit `assets/js/data.js`: copy one line in `videos`, change the id, client and category, and upload the changed file.
