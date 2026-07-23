// "Para quiénes" section. Each item is an accordion panel:
// the photo + label always show; clicking reveals `detail` and a WhatsApp CTA.
// Only one panel is open at a time (handled in the component).

export type Audience = {
  id: string;
  label: string;
  short: string; // compact descriptor shown on mobile (from MOBILE frame)
  image: string; // path under /public
  alt: string;
  detail: string; // shown when the panel expands
  cta: string; // WhatsApp message for this audience
};

export const audiences: Audience[] = [
  {
    id: "para-ti",
    label: "Para ti",
    short: "Siempre hay una buena excusa.",
    image: "/images/parami.jpg",
    alt: "Tarta artesanal decorada con flores para una celebración personal",
    detail:
      "Un capricho para regalarte o para sorprender a quien quieres. Elegimos contigo sabor, tamaño y decoración para que cada tarta sea única.",
    cta: "¡Hola GABS! Quiero una tarta para una ocasión especial.",
  },
  {
    id: "para-restaurante",
    label: "Restaurantes",
    short: "Postres para tu carta.",
    image: "/images/restaurante.jpg",
    alt: "Postre emplatado en la mesa de un restaurante",
    detail:
      "Postres de carta y producción recurrente para hostelería. Fichas técnicas, alérgenos y conservación listos para tu equipo de sala.",
    cta: "¡Hola GABS! Represento a un restaurante y me interesa vuestra carta de postres.",
  },
  {
    id: "para-evento",
    label: "Eventos",
    short: "Bodas, cumpleaños y empresas.",
    image: "/images/event.jpg",
    alt: "Pareja cortando la tarta en una boda",
    detail:
      "Bodas, cumpleaños y celebraciones. Diseñamos tartas de varios pisos y mesas dulces a la altura del día más importante.",
    cta: "¡Hola GABS! Organizo un evento y quiero pedir presupuesto de tarta.",
  },
];
