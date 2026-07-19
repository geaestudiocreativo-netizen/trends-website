// ─────────────────────────────────────────────────────────────
//  EUFORIA · GABS — Site configuration
//  Edit these values to update the whole site. No code changes needed.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Line above the wordmark in the final Home Page frame
  eyebrow: "2026 — Tartas de autor en Majadahonda",
  brand: "TRENDS",
  tagline: "— BY GABRIEL GARCÍA",

  // ⚠️ REPLACE THIS with your real WhatsApp number in international format,
  //    digits only, no "+", no spaces. Example (Spain): 34600112233
  whatsappNumber: "34600000000",

  // Default message pre-filled when a customer opens WhatsApp.
  // {item} is replaced by the cake name when ordering a specific cake.
  whatsappDefaultMessage: "¡Hola GABS! Me gustaría hacer un pedido.",
  whatsappItemMessage: "¡Hola GABS! Me gustaría pedir: {item}.",
} as const;

/** Build a wa.me link with an URL-encoded message. */
export function waLink(message: string = site.whatsappDefaultMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ─────────────────────────────────────────────────────────────
//  Hero photograph — single source of truth.
//
//  To change the hero image, just replace this file:
//      public/images/hero.jpg
//  Keep the same name and no code changes are needed anywhere.
//  (Referenced by Hero.astro for the background and by Base.astro
//   for the preload hint and the social share image.)
// ─────────────────────────────────────────────────────────────
export const heroImage = "/images/hero.jpg";
