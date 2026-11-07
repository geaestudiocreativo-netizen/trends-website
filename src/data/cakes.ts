export type CakeSize = {
  size: string;
  price: string;
};

// Definitive size-to-servings chart for the business; single source of truth
// for every place sizes are displayed across the site.
export const SERVINGS_BY_SIZE: Record<string, string> = {
  "15 cm": "8–10 pers.",
  "22 cm": "12–14 pers.",
  "24 cm": "14–16 pers.",
  "29 cm": "10–12 pers.",
};

export type Cake = {
  name: string;
  category: string;
  description: string;
  allergens: string[];
  note?: string;
  sizes: CakeSize[];
  flavors: string[];
  image: string;
  imagePlaceholder?: string;
  // Optional set of images for a swipeable gallery; falls back to `image` alone when absent.
  images?: string[];
};

export const cakes: Cake[] = [
  {
    name: "Cremosa de Oreo",
    category: "INTENSO",
    description: "La galleta de toda la vida .",
    allergens: [
      "No apto para intolerantes a lactosa y gluten",
      "Puede contener trazas de: soja y mostaza"
    ],
    sizes: [
      { size: "15 cm", price: "25 €" },
      { size: "22 cm", price: "35 €" },
    ],
    flavors: [],
    image: "/images/cakes/Cremosa-de-oreo.jpeg",
    images: [
      "/images/cakes/Cremosa-de-oreo.jpeg",
      "/images/cakes/Cremosa-de-oreo-2.jpeg",
      "/images/cakes/Cremosa-de-oreo-3.jpeg",
    ],
  },

  {
    name: "Nuestra tarta de queso",
    category: "ESENCIAL",
    description: "Cremosa y con todo el sabor a queso, te sorprenderá.",
    allergens: [],
    sizes: [
      { size: "15 cm", price: "25 €" },
      { size: "22 cm", price: "35 €" },
    ],
    flavors: [
      "Pistacho",
      "Dulce de leche",
      "Chocolate blanco",
      "Happy Hippo",
      "Galleta Lotus",
    ],
    image: "/images/cakes/Nuestra-tarta-de-queso.jpeg",
    images: [
      "/images/cakes/Nuestra-tarta-de-queso.jpeg",
      "/images/cakes/Nuestra-tarta-de-queso-2.jpeg",
      "/images/cakes/Nuestra-tarta-de-queso-3.jpeg",
    ],
  },
  {
    name: "Recuerdos de la infancia",
    category: "CLÁSICO",
    description: "Laminado de galletas y chocolate. Un clásico que nunca falla.",
    allergens: [],
    note: "Disponible en versión sin gluten.",
    sizes: [
      { size: "15 cm", price: "15 €" },
      { size: "24 cm", price: "25 €" },
    ],
    flavors: [],
    image: "/images/cakes/Recuerdos-de-la-infancia.jpeg",
    images: [
      "/images/cakes/Recuerdos-de-la-infancia.jpeg",
      "/images/cakes/Recuerdos-de-la-infancia-2.jpeg",
      "/images/cakes/Recuerdos-de-la-infancia-3.jpeg",
    ],
  },
  {
    name: "Duo cítrico",
    category: "CÍTRICO",
    description: "Cremosa de limón con un toque fresco de lima que te dejará con ganas de más.",
    allergens: [
      "No apto para intolerantes a lactosa",
      "Contiene huevo crudo",
      "Puede contener trazas de: leche, soja, mostaza"
    ],
    note: "Disponible en versión sin gluten.",
    sizes: [
      { size: "15 cm", price: "20 €" },
      { size: "22 cm", price: "30 €" },
    ],
    flavors: [],
    image: "/images/cakes/Duo-citrico.jpeg",
    images: [
      "/images/cakes/Duo-citrico.jpeg",
      "/images/cakes/Duo-citrico-2.jpeg",
      "/images/cakes/Duo-citrico-3.jpeg",
    ],
  },
  {
    name: "Tarta de zanahoria",
    category: "ESPECIADO",
    description: "Esponjoso bizcocho de zanahoria con un toque crujiente de nueces y aroma de canela cubierto de un cremoso icing.",
    allergens: [
      "No apto para intolerantes a lactosa y gluten",
      "Contiene nueces y canela",
      "Puede contener trazas de: cacahuetes, trigo, soja y frutos de cáscara"
    ],
    sizes: [
      { size: "15 cm", price: "25 €" },
      { size: "22 cm", price: "35 €" },
    ],
    flavors: [],
    image: "/images/cakes/Tarta-de-zanahoria.jpeg",
    images: [
      "/images/cakes/Tarta-de-zanahoria.jpeg",
      "/images/cakes/Tarta-de-zanahoria-2.jpeg",
      "/images/cakes/Tarta-de-zanahoria-3.jpeg",
    ],
  },
  {
    name: "Trilogía de chocolates",
    category: "INTENSO",
    description: "Para los que aman el chocolate, sus tres versiones con base de galleta.",
    allergens: ["Lactosa", "Soja", "Frutos de cáscara", "Gluten"],
    note: "Disponible en versión sin gluten.",
    sizes: [
      { size: "15 cm", price: "20 €" },
      { size: "22 cm", price: "30 €" },
    ],
    flavors: [],
    image: "/images/cakes/Trilogia-chocolates.JPG",
    images: [
      "/images/cakes/Trilogia-chocolates.JPG",
      "/images/cakes/Trilogia-chocolates-2.JPG",
      "/images/cakes/Trilogia-chocolates-3.JPG",
      "/images/cakes/Trilogia-chocolates-5.JPG",
      "/images/cakes/Trilogia-chocolates-7.JPG",
    ],
  },
  {
    name: "Bizcocho Felisa",
    category: "CÍTRICO",
    description: "Esponjoso bizcocho de limón de la abuela, el de toda la vida, recubierto de una crujiente capa cítrica.",
    allergens: ["Gluten", "Lactosa"],
    sizes: [
      { size: "Tamaño único — 10–12 porciones — 29 cm", price: "18 €" },
    ],
    flavors: [],
    image: "/images/cakes/Bizcocho-felisa.JPG",
    images: [
      "/images/cakes/Bizcocho-felisa.JPG",
      "/images/cakes/Bizcocho-felisa-2.JPG",
      "/images/cakes/Bizcocho-felisa-3.JPG",
    ],
  },
  {
    name: "Suspiro Italiano",
    category: "CLÁSICO",
    description: "Nuestra versión del clásico tiramisú.",
    allergens: ["Gluten", "Lactosa", "Soja", "Huevo crudo"],
    sizes: [
      { size: "15 cm", price: "20 €" },
      { size: "24 cm", price: "30 €" },
    ],
    flavors: [],
    image: "/images/cakes/Suspiro-italiano.JPG",
    images: [
      "/images/cakes/Suspiro-italiano.JPG",
      "/images/cakes/Suspiro-italiano-2.JPG",
      "/images/cakes/Suspiro-italiano-3.JPG",
      "/images/cakes/Suspiro-italiano-4.JPG",
    ],
  },
];
