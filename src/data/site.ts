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
//  Keep the same name; no code changes are needed anywhere.
//
//  The URL carries a short fingerprint of the file's contents, so a
//  replaced image always gets a NEW url. Without it the browser keeps
//  serving the previously cached bytes for /images/hero.jpg and the old
//  photo flashes up before the new one arrives.
//  The fingerprint is computed at build time (Astro runs this on the
//  server), so it costs nothing at runtime.
// ─────────────────────────────────────────────────────────────
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const HERO_PATH = "/images/hero.jpg";

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
