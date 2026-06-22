# AMMAC Aircraft Parts — Next.js

A Next.js 15 (App Router, TypeScript) port of the original single-file
`ammac-platform.html`. This is a **pragmatic port**: the original hand-tuned
markup, inline styles, and vanilla JS are preserved; only the structure around
them changed (real routes, externalized assets, real `<head>`/metadata).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Architecture

- **Routes** — each original SPA screen is a real route:
  `/` (home), `/products`, `/repair`, `/warehousing`, `/why`, `/parts`,
  `/contact`, `/admin`. All are statically prerendered (SSG).
- **Markup** — the original HTML for each screen lives in [`content/`](content/)
  as a fragment and is injected by [`lib/screen.tsx`](lib/screen.tsx) inside the
  original `.amm-page` wrapper (so the client boot script can find it). The shared
  header/footer fragments are injected by [`app/layout.tsx`](app/layout.tsx). Each
  screen's wrapper class comes from `content/_manifest.json` — admin keeps its
  original `amm-page pf-page` class + `data-no-reveal`. The admin screen ships its
  full login + ops-console markup statically; the "enterprise platform" script
  (`__ammBootAdmin`) only toggles which view is shown.
- **Styles** — all of the original's `<style>` blocks (main + admin/platform) are
  merged into [`app/globals.css`](app/globals.css)
  (inline styles in the markup are kept as-is). Fonts (DM Sans + Manrope) load
  from Google Fonts via `<link>` in the layout. Port-only CSS fixes live separately
  in [`app/port-overrides.css`](app/port-overrides.css) (imported after globals) —
  currently an `overflow-x: clip` rule on `html/body` so the home hero's
  `position: sticky` stage pins correctly (with `overflow-x: hidden` the root became
  a scroll container and the hero scrolled away, leaving a blank gap mid-scroll).
- **Client JS** — bundled into [`public/js/`](public/js/):
  - `core.bundle.js` (loaded on every page): world-map dots, parts-search app,
    admin/ops platform, global motion layer, WhatsApp intent, parts-table labels,
    and a **new real-routes router** that replaces the original hash router. The
    router keeps the `window.AMM` chrome object (mega/mobile menus, contact form)
    and, on load, boots whichever single `.amm-page` the route rendered.
  - `three.bundle.js` (Three.js + the 3D hero glue): **lazy-loaded only on the
    home page** by the router, which then calls `initPlaneHero(canvas, '/plane.glb')`.
- **Assets** — the 23 base64 images were decoded to [`public/img/`](public/img/)
  and the GLB aircraft model to [`public/plane.glb`](public/plane.glb).

## Regenerating from the source HTML

The port is reproducible from the original `../ammac-platform.html` via two scripts
in the parent folder:

```bash
cd ..
node extract.mjs    # HTML -> ammac-next/extracted/ + public/img + public/plane.glb
node assemble.mjs   # extracted/ -> content/ fragments + public/js bundles
```

`extracted/` holds the intermediate raw pieces (CSS, fragments, individual JS
blocks) and is only needed when regenerating; the app itself reads from
`content/` and `public/`.

## Known limitations / follow-ups

- Navigation is **full-page-reload MPA** (plain `<a href>`), matching the original
  behavior faithfully; it is not client-side SPA navigation. The shared scripts
  re-init per load, which is why this is safe.
- Inline `onclick="AMM.*"` handlers in the header/footer work because `AMM` is a
  global defined in `core.bundle.js`.
- A full visual/interaction pass in a browser is still recommended (3D hero,
  parts search, admin portal, contact form, mega/mobile menus).
- Possible future hardening: convert `next/image`, migrate the 3D to
  react-three-fiber, and componentize sections (was deliberately out of scope for
  this pragmatic port).
