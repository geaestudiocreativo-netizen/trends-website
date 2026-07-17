// The little coloured squares on each cake card are an allergen legend.
// The Figma used three chip colours — map them to real allergens here.
// Add/rename freely; `id` is what you reference from each cake in cakes.ts.

export type Allergen = {
  id: string;
  name: string;
  color: string; // chip colour (hex)
};

export const allergens: Allergen[] = [
  { id: "gluten", name: "Gluten", color: "#A49250" },
  { id: "lacteos", name: "Lácteos", color: "#452928" },
  { id: "frutos-secos", name: "Frutos secos", color: "#8AC3BE" },
  { id: "huevo", name: "Huevo", color: "#574D29" },
  { id: "soja", name: "Soja", color: "#567B77" },
];

export const allergenById = Object.fromEntries(allergens.map((a) => [a.id, a]));
