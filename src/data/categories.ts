// Filter pills shown above the catalogue.
// `tone: "special"` renders the dark-brown pill (NUEVAS, MÁS VENDIDAS in the design).
// `slug` must match the `categories` array on each cake in cakes.ts.

export type Category = {
  slug: string;
  label: string;
  tone?: "default" | "special";
};

export const categories: Category[] = [
  { slug: "dulces", label: "Dulces" },
  { slug: "frescas", label: "Frescas" },
  { slug: "cheesecake", label: "Cheesecake" },
  { slug: "bizcocho", label: "Bizcocho" },
  { slug: "nuevas", label: "NUEVAS", tone: "special" },
  { slug: "mas-vendidas", label: "MÁS VENDIDAS", tone: "special" },
];
