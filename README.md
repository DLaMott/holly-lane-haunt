# The Holly Lane Haunt

Static marketing site for The Holly Lane Haunt, a free, volunteer-run haunted trail in Mocksville, NC. Built with [Astro](https://astro.build) for near-zero JS and strong SEO.

## Pages

- `/`: Home
- `/about/`: Our story
- `/attractions/`: The 13 scenes
- `/location/`: Address, map, parking
- `/faqs/`: Frequently asked questions

## Updating content

Almost everything editable (dates, stats, address, FAQs, scene list, social/donation links, press mentions) lives in one file: **`src/data/site.ts`**. Update that file rather than hunting through page markup.

Things to fill in once known:

- `eventDates`: flip `announced` to `true` and set the real dates for the season.
- `links.venmo` / `links.cashapp`: real donation handles.
- `scenes`: 4 of the 13 have real names/photos (Crowley's Crypt, The Witch's Shack, House of Horror, The Fungal Trail); the rest are still placeholder names/descriptions until the full lineup is finalized.
- `astro.config.mjs` / `site.ts` `url`: update to the real custom domain (e.g. `https://holly-lane-haunt.com`) once it's connected in Vercel.
- `press`: add new local press write-ups here as they're published (used by the `PressStrip` component on Home and About).

## Images

Real photos live in `src/assets/` (`logo.png`, `scenes/*.jpg`) and are optimized automatically at build time via Astro's image pipeline (resized + converted to WebP, no manual work needed). To add more scene photos:

1. Drop the image in `src/assets/scenes/`.
2. Import it in `src/pages/attractions.astro` and add it to the `sceneImages` map.
3. Set that scene's `photoKey` in `src/data/site.ts` to match.

`public/favicon.png`, `public/apple-touch-icon.png`, and `public/og-image.png` were generated from the logo. Regenerate them the same way (crop the black corners to transparent, then resize) if the logo changes.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Deployment

This is a fully static site. Deploy the `dist/` output anywhere, (it auto-detects Astro, no config needed). Once deployed, point your custom domain (`holly-lane-haunt.com`) at the Vercel project in the Vercel dashboard's Domains settings.
