# TRENDS · by Gabriel García — Astro site

Astro implementation of the final Figma frames **Desktop | Home Page** and
**Mobile | Home Page**. Responsive (one set of components, no duplication),
keyboard accessible, and tuned for Lighthouse.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # preview the production build
```

> **No build step?** Open **`preview.html`** in a browser. It's a single
> self-contained file mirroring the site — handy for showing clients.
> (Needs an internet connection so the Google Fonts load.)

---

## Set these two before going live

1. **WhatsApp number** — `src/data/site.ts` → `whatsappNumber`.
   International format, digits only (Spain example: `34600112233`).
   Every order button uses it automatically.

2. **Your photos** — drop images into `public/images/` over the existing
   filenames; no code changes needed.

   The hero is a **single asset**: replace `public/images/hero.jpg`, keep the
   name, and it updates the background, the `<link rel="preload">` hint and the
   social share image at once. The path is declared once in `src/data/site.ts`
   (`heroImage`) if you ever need to point somewhere else.

| File | Where it appears |
|---|---|
| `hero.jpg` | Hero background, preload hint and social share image |
| `tiramisu.jpg`, `cheesecake-pistacho.jpg`, `cheesecake-caramelo.jpg`, `cheesecake-frutos-rojos.jpg`, `tarta-chocolate.jpg`, `chocolate-fundente.jpg` | Cake cards |
| `para-ti.jpg`, `para-restaurante.jpg`, `para-evento.jpg` | Unused by the current design; kept with the Services data |

---

## Editing content (no code)

Everything lives in `src/data/`:

- **`site.ts`** — brand, hero eyebrow line, tagline, WhatsApp number and
  message templates.
- **`cakes.ts`** — the 9 cards. Card text (title, description, subline,
  badge price, image) plus the expanded detail. `SIZE_CATALOG` defines
  S/M/L once (name, dimensions, price, chip colours); each cake lists the
  sizes it comes in via `sizes: ["S","M","L"]`.
- **`categories.ts`** — the filter pills. `tone: "special"` = dark pill.
- **`allergens.ts`** — allergen names (listed in the expanded card).
- **`audiences.ts`** — the three Services rows (`label` + `short`).
  `detail`/`cta`/`image` are retained but unused by the current design.

---

## Layout (from the final frames)

- **Hero** — full-bleed photo, left-aligned: eyebrow line, `TRENDS`
  wordmark (Krona One), `— BY GABRIEL GARCÍA`, then a dark and a gold
  button (300×50). Buttons stack full-width on mobile.
- **Services** — light `#FFFAF4` band with three static rows:
  `LABEL — short descriptor`.
- **Catalogue** — dark `#291918` band, light heading, category pills
  (124×35), and cards on a `#FFFAF4` surface (360×485, radius 10) with a
  dark `desde …` badge. Three columns → two → one as the viewport narrows.

## Interactions

- Hero "Nuestras Tartas" smooth-scrolls to the catalogue; "Haz tu pedido ya"
  opens WhatsApp.
- Cake cards expand on click/Enter/Space to sizes, prices, allergens,
  storage and an order button. Only one card open at a time.
- Category pills filter the grid (single-select; click again to clear).

## Motion

GPU-friendly only: `transform` and `opacity`. Expand/collapse uses
`grid-template-rows: 0fr → 1fr` with an opacity/translateY fade. A gentle
hero drift plus scroll-reveal on section headers. All of it is disabled
under `prefers-reduced-motion`.

## Accessibility

Real `<button>` toggles with `aria-expanded` / `aria-controls`,
region-labelled panels, visible `:focus-visible` rings, a skip link, and
alt text on every image.

## Performance

- No JS framework — a few KB of vanilla JS, no hydration.
- Images pre-optimized with explicit `width`/`height` (no layout shift),
  `loading="lazy"` (hero preloaded), `decoding="async"`.
- Fonts via `preconnect` + `display=swap`; `compressHTML` enabled.

**Optional next step:** move images to `src/assets/` and use Astro's
`<Image>` component for automatic responsive WebP/AVIF. They're kept in
`public/` so photo swaps stay drag-and-drop.

## Deploy

Static output — host `dist/` anywhere (Netlify, Vercel, Cloudflare Pages,
GitHub Pages). Set your domain in `astro.config.mjs` (`site:`) for correct
canonical/OG URLs.

---

## Structure

```
src/
  data/         → editable content (site, cakes, categories, allergens, audiences)
  components/   → Hero, Audiences (Services), Catalogue, CakeCard, WhatsAppIcon
  layouts/      → Base.astro (head, fonts, footer, global scripts)
  pages/        → index.astro
  styles/       → global.css (design tokens from the final frames)
public/images/  → all photos
preview.html    → zero-install standalone preview
```

## Fonts

- **Krona One** — `TRENDS` wordmark and cake card titles
- **Poppins** — UI and body text
- **Cormorant Garamond** — loaded and available via `--font-display`
