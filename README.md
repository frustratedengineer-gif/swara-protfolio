# Frames by Swara — Swara Shendge

Cinematographer & photographer portfolio site, built with React, Vite, and Framer Motion.

## Stack

- React 18 + Vite
- React Router (client-side routing: `/`, `/work`, `/work/:slug`, `/about`, `/contact`)
- Framer Motion (page transitions, scroll reveals, shared-layout gallery transitions, cursor parallax)
- Plain CSS with design tokens (`src/styles/tokens.css`) — no CSS framework

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Content

All work/bio content lives in `src/data/work.json` and `src/data/about.json`. Work-grid imagery is currently placeholder photography hotlinked from Unsplash (see `src/utils/image.js`) — swap the `coverId`/`galleryIds` fields for real shoot photos when ready; no component changes are needed. The hero portrait, about portrait, and logo (`src/assets/swara-cutout.webp`, `src/assets/swara.webp`, `src/assets/logo.webp`) are the real brand assets.

## Contact

No contact form — the Contact page links straight out to WhatsApp (`src/data/site.js` → `WHATSAPP_LINK`) and Instagram, plus a mailto link for the email address.
