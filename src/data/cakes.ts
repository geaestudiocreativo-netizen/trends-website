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
};

export type Cake = {
  name: string;
  category: string;
  description: string;
  allergens: string[];
  sizes: CakeSize[];
  flavors: string[];
  image: string;
  // Optional set of images for a swipeable gallery; falls back to `image` alone when absent.
  images?: string[];
};

export const cakes: Cake[] = [
  {
    name: "Cremosa de Oreo",
    category: "INTENSO",
    description: "La galleta de toda la vida hecha tarta",
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
  },
  {
    name: "Recuerdos de la infancia",
    category: "CLÁSICO",
    description: "Laminado de galletas y chocolate. Un clásico que nunca falla.",
    allergens: [],
    sizes: [
      { size: "15 cm", price: "15 €" },
      { size: "24 cm", price: "25 €" },
    ],
    flavors: [],
    image: "/images/cakes/Recuerdos-de-la-infancia.jpeg",
  },
  {
    name: "Duo cítrico",
    category: "CÍTRICO",
    description: "Cremosa de limon con un toque fresco de lima que te dejara con ganas de mas.",
    allergens: [
      "No apto para intolerantes a lactosa y gluten",
      "Contiene huevo crudo",
      "Puede contener trazas de: leche, soja, mostaza"
    ],
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
  },
];
