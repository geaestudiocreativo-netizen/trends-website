# EUFORIA · GABS — Astro site

Production-ready Astro conversion of the GABS (by Gabriel García) Figma homepage.
Pixel-faithful to the design, fully responsive, keyboard-accessible, and tuned for Lighthouse.

---

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # preview the production build
```

> No build step? Open **`preview.html`** directly in a browser. It's a single
> self-contained file that mirrors the site — handy for showing clients right now.
> (It loads fonts from Google Fonts, so it needs an internet connection to look final.)

---

## The two things to set before going live

1. **WhatsApp number** — `src/data/site.ts` → `whatsappNumber`.
   Use international format, digits only (e.g. Spain: `34600112233`). Every
   "order" button across the site uses this automatically.

2. **Your photos** — drop your images into `public/images/` over the existing
   filenames and they appear instantly, no code changes. Current placeholders
   are the Pinterest references from your Figma:

   | File | Where it shows |
   |---|---|
   | `hero-photo.jpg` | Hero background (layered over `hero-cream.jpg`, which stays as a fallback) |
   | `para-ti.jpg` / `para-restaurante.jpg` / `para-evento.jpg` | "Para quiénes" |
   | `tiramisu.jpg`, `cheesecake-pistacho.jpg`, `cheesecake-caramelo.jpg`, `cheesecake-frutos-rojos.jpg`, `tarta-chocolate.jpg`, `chocolate-fundente.jpg` | Cake cards |

---

## Editing content (no code)

Everything lives in `src/data/`:

- **`cakes.ts`** — the 9 cards. Each has the visible card text (title, description,
  subline, price, image) plus the **expanded** detail: `sizes` (label + note + price),
  `allergens`, and `storage`. Card title/description/subline are the Figma
  placeholders ("Suspiro Italiano" …) — rename per cake when ready.
- **`categories.ts`** — the filter pills. `tone: "special"` = the dark-brown pill.
- **`allergens.ts`** — the coloured-chip legend (chip colour + name).
- **`audiences.ts`** — the three "Para quiénes" panels (label, photo, detail, CTA).
- **`site.ts`** — brand, WhatsApp number, and message templates.

---

## Interactions (as specced)

- **Hero** — "Nuestras Tartas" smooth-scrolls to the catalogue; "Haz tu pedido ya"
  opens WhatsApp.
- **Cake cards** — click (or Enter/Space) to expand vertically to sizes, prices,
  allergens, storage and an order button. Only one card open at a time.
- **"Para quiénes"** — each photo is an accordion; opening one closes the others.
- **Filter pills** — single-select; click the active pill again to clear.

## Motion

Subtle and GPU-friendly: reveals and hovers animate only `transform`/`opacity`;
expand/collapse uses the `grid-template-rows: 0fr→1fr` technique with an
`opacity`/`translateY` fade on the inner content. A gentle hero drift and
scroll-reveal on the two section headers — nothing more. All of it is disabled
under `prefers-reduced-motion`.

## Accessibility

Real `<button>` toggles with `aria-expanded` / `aria-controls`, region-labelled
panels, visible `:focus-visible` rings, a skip link, alt text on every image,
and reduced-motion support.

## Performance / Lighthouse

- Zero JS framework — a few KB of vanilla JS, no hydration.
- Images pre-optimized (~700 KB total for all 10) with explicit `width`/`height`
  (no layout shift), `loading="lazy"` (hero preloaded), `decoding="async"`.
- Fonts via `preconnect` + `display=swap`.
- `compressHTML` on.

**Next optimization step (optional):** move images into `src/assets/` and use
Astro's `<Image>` component (`astro:assets`) to emit responsive WebP/AVIF
automatically. Kept as plain `/public` files here so your photo swaps stay a
simple drag-and-drop.

## Deploy

Static output — host `dist/` anywhere (Netlify, Vercel, Cloudflare Pages,
GitHub Pages). Set your domain in `astro.config.mjs` (`site:`) for correct
canonical/OG URLs.

---

## Project structure

```
src/
  data/         → all editable content (cakes, audiences, categories, allergens, site)
  components/   → Hero, Audiences, Catalogue, CakeCard, WhatsAppIcon
  layouts/      → Base.astro (head, fonts, footer, global scripts)
  pages/        → index.astro
  styles/       → global.css (design tokens from the Figma)
public/images/  → all photos
preview.html    → zero-install standalone preview
```
