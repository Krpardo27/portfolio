import type { Project } from "../types/project.types";

export const drinksLanding: Project = {
  id: "2",
  slug: "drinks-landing",
  title: "Drinks Landing",
  description:
    "Landing editorial de Vin Rouge. Presenta los vinos de la bodega con notas de cata y precios en pesos chilenos, y reúne fotografías del viñedo, perfiles del equipo y un archivo de eventos.",
  image: "/projects/drinks-landing/portada.webp",
  thumbnail: "/projects/drinks-landing/tarjeta.webp",
  repository: "https://github.com/Krpardo27/landing-wine",
  categories: ["landings"],
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Embla Carousel",
  ],
  features: [
    "Carrusel de vinos con notas de cata y precios en pesos chilenos; se recorre con gestos o con el teclado",
    "Galería de fotografías del viñedo con visor ampliado",
    "Preguntas desplegables sobre el origen de los vinos y su elaboración",
    "Archivo de visitas, catas y vendimias con fechas y detalles desplegables",
  ],
  architecture: [
    "Página compuesta por secciones en Next.js App Router, con contenido editorial renderizado en el servidor",
    "Componentes de cliente para el menú móvil, el carrusel Embla y el visor de fotografías bajo demanda",
    "Catálogo y navegación definidos en módulos de datos; precios formateados con Intl.NumberFormat para Chile",
    "Desplegables de historia y eventos con HTML nativo, utilizables sin JavaScript",
    "Pruebas de navegación por teclado y diseño adaptable con Playwright, y comprobaciones de accesibilidad con axe",
  ],
  gallery: [
    {
      src: "/projects/drinks-landing/portada.webp",
      alt: "Portada de Vin Rouge con una botella de Pinot Noir sobre un viñedo ilustrado",
      width: 1440,
      height: 692,
    },
    {
      src: "/projects/drinks-landing/categorias.webp",
      alt: "Selección ilustrada de botellas, copas, uvas y regalos",
      width: 1440,
      height: 780,
    },
    {
      src: "/projects/drinks-landing/equipo.webp",
      alt: "Retratos de los cuatro propietarios y sus funciones en la bodega",
      width: 1440,
      height: 802,
    },
    {
      src: "/projects/drinks-landing/historia.webp",
      alt: "Preguntas sobre la bodega junto a un mapa ilustrado",
      width: 1440,
      height: 724,
    },
    {
      src: "/projects/drinks-landing/eventos.webp",
      alt: "Archivo de eventos con visitas al viñedo, catas y vendimias",
      width: 1440,
      height: 1066,
    },
  ],
  demo: "https://drinks-landing-page.vercel.app/",
};
