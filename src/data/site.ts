// Site configuration for the Punto G website.
// Edit these values to update the whole site. No code changes needed.

export const site = {
  // Line above the wordmark in the final Home Page frame
  eyebrow: "2026 — Tartas de autor en Las Rozas",
  tagline: "— BY GABRIEL GARCÍA",

  // ⚠️ REPLACE THIS with your real WhatsApp number in international format,
  //    digits only, no "+", no spaces. Example (Spain): 34600112233
  whatsappNumber: "34609086964",

  // Default message pre-filled when a customer opens WhatsApp.
  // {item} is replaced by the cake name when ordering a specific cake.
  whatsappDefaultMessage: "Hola! Me gustaría hacer un encargo especial.",
  whatsappItemMessage: "Hola! Me gustaría hacer un encargo de {item}.",
} as const;

/** Build a wa.me link with an URL-encoded message. */
export function waLink(message: string = site.whatsappDefaultMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Hero photograph — single source of truth.
// Replace public/images/hero.jpg to change the hero image.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const HERO_PATH = "/images/hero/hero.jpg";

function fingerprint(publicPath: string): string {
  try {
    const file = new URL(`../../public${publicPath}`, import.meta.url);
    return createHash("sha1").update(readFileSync(file)).digest("hex").slice(0, 8);
  } catch {
    // Missing file at build time: fall back to an unversioned URL rather
    // than breaking the build.
    return "";
  }
}

const heroVersion = fingerprint(HERO_PATH);

export const heroImage = heroVersion ? `${HERO_PATH}?v=${heroVersion}` : HERO_PATH;
