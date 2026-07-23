// ─────────────────────────────────────────────────────────────
//  Catalogue data ("Nuestras tartas")
//
//  Collapsed card text (title / description / subline / price /
//  photo) is the Figma placeholder content — replace when ready.
//
//  SIZE COMPONENT: the coloured chips on each card show the sizes
//  available for that cake (S / M / L). Each size carries its own
//  dimensions and price, shown in the expanded card.
//
//  `image` paths point at /public/images — drop your own photos
//  over these filenames and they appear instantly.
// ─────────────────────────────────────────────────────────────

export type SizeCode = "S" | "M" | "L";

export type SizeMeta = {
  code: SizeCode;
  name: string;
  note: string;
  price: string;
  bg: string; // chip background
  fg: string; // chip letter colour (chosen for contrast)
};

// The three sizes, colour-coded as in the design. Edit names/prices here.
export const SIZE_CATALOG: Record<SizeCode, SizeMeta> = {
  S: { code: "S", name: "Pequeña", note: "Ø 12 cm · 2–4 pers.", price: "14 €", bg: "#A49250", fg: "#452928" },
  M: { code: "M", name: "Mediana", note: "Ø 18 cm · 6–8 pers.", price: "20 €", bg: "#452928", fg: "#ffffff" },
  L: { code: "L", name: "Grande",  note: "Ø 24 cm · 12–14 pers.", price: "32 €", bg: "#8AC3BE", fg: "#452928" },
};

export type Cake = {
  id: string;
  title: string;
  description: string;
  subline: string;
  price: string;       // "from" badge on the photo
  image: string;
  alt: string;
  categories: string[];
  sizes: SizeCode[];   // which sizes this cake comes in → the S/M/L chips
  allergens: string[]; // ids from allergens.ts → named list in expanded card
  storage: string;
};

const storage =
  "Conservar en frío (2–4 °C). Consumir preferentemente en 48 h. Sacar 15 minutos antes de servir para disfrutarla en su punto.";

const T = "Suspiro Italiano";
const D = "Nuestra versión del clásico Tiramisú";
const S = "Bizcochos de soletilla, ingrediente secundario, otro ingrediente";

export const cakes: Cake[] = [
  { id: "cake-1", title: "Tarta de Limón", description: "Cremosísima y fresca tarta cítrica con base crujiente.", subline: "Limón, galletas", price: "20 €", image: "/images/tiramisu.jpg",
    alt: "Tarta de tiramisú con cacao espolvoreado", categories: ["dulces", "mas-vendidas"],
    sizes: ["S", "M", "L"], allergens: ["gluten", "lacteos", "huevo"], storage },
  { id: "cake-2", title: "Tarta Cremosa de Oreo", description: "La galleta de toda la vida hecha tarta.", subline: "Oreo", price: "18 €", image: "/images/cheesecake-pistacho.jpg",
    alt: "Cheesecake con topping de pistacho", categories: ["cheesecake", "frescas"],
    sizes: ["M"], allergens: ["lacteos", "frutos-secos"], storage },
  { id: "cake-3", title: "Tarta de Zanahoria", description: "Esponjoso bizcocho de zanahoria con un toque crujiente de nueces y aroma de canela, cubierto de un cremoso icing.", subline: "Zanahoria, nueces, canela", price: "22 €", image: "/images/cheesecake-caramelo.jpg",
    alt: "Cheesecake con caramelo", categories: ["cheesecake", "nuevas"],
    sizes: ["S", "M", "L"], allergens: ["gluten", "lacteos", "frutos-secos"], storage },
  { id: "cake-4", title: "Trilogía de Chocolates", description: "Para los que aman el chocolate, sus tres versiones con una base crujiente de galleta.", subline: "Chocolate blanco, chocolate con leche, chocolate negro, galleta", price: "20 €", image: "/images/cheesecake-frutos-rojos.jpg",
    alt: "Cheesecake con frutos rojos en plato rojo", categories: ["cheesecake", "frescas"],
    sizes: ["S", "M", "L"], allergens: ["lacteos", "huevo"], storage },
  { id: "cake-5", title: "Bizcocho Felisa", description: "Esponjoso bizcocho de limón, el de toda la vida, con una crujiente capa cítrica.", subline: "Limón", price: "20 €", image: "/images/tarta-chocolate.jpg",
    alt: "Tarta fundente de chocolate servida con cuchara", categories: ["dulces", "bizcocho"],
    sizes: ["S", "M"], allergens: ["gluten", "lacteos"], storage },
  { id: "cake-6", title: "Recuerdos de la Infancia", description: "Laminado de galletas y chocolate.", subline: "Galletas, chocolate", price: "20 €", image: "/images/chocolate-fundente.jpg",
    alt: "Tarta de chocolate con ganache", categories: ["dulces", "bizcocho", "mas-vendidas"],
    sizes: ["S", "M", "L"], allergens: ["gluten", "lacteos", "huevo", "soja"], storage },
  { id: "cake-7", title: "Suspiro Italiano", description: "Nuestra versión del clásico tiramisú.", subline: "Bizcochos de soletilla", price: "20 €", image: "/images/tiramisu.jpg",
    alt: "Tarta de tiramisú con cacao espolvoreado", categories: ["dulces", "mas-vendidas"],
    sizes: ["S", "M", "L"], allergens: ["gluten", "lacteos", "huevo"], storage },
  { id: "cake-8", title: "Nuestra Tarta de Queso", description: "Cremosa y con todo el sabor a queso. Te sorprenderá.", subline: "Queso, galletas", price: "18 €", image: "/images/cheesecake-pistacho.jpg",
    alt: "Cheesecake con topping de pistacho", categories: ["cheesecake", "frescas", "nuevas"],
    sizes: ["M"], allergens: ["lacteos", "frutos-secos"], storage },
  { id: "cake-9", title: T, description: D, subline: S, price: "22 €", image: "/images/cheesecake-caramelo.jpg",
    alt: "Cheesecake con caramelo", categories: ["cheesecake"],
    sizes: ["S", "M", "L"], allergens: ["gluten", "lacteos", "frutos-secos"], storage },
];
