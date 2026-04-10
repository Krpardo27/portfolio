export type ExperienceItem = {
  id: string;
  company: string;
  logo: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    id: "prisa-media",
    company: "Prisa Media Chile",
    logo: "https://res.cloudinary.com/dy651pevq/image/upload/v1775788949/portfolio/prisamedia_komdfo.jpg",
    position: "Desarrollador Digital",
    period: "2024 - Presente",
    location: "Providencia, RM, Chile",
    description: [
      "Desarrollo y mantenimiento de componentes en React.",
      "Implementación de nuevas funcionalidades para Radio ADN.",
      "Optimización de performance (LCP, CLS, lazy loading, imágenes).",
      "Integración de APIs REST y manejo de estado.",
      "Participación en metodologías ágiles (scrum).",
      "Mejoras continuas y corrección de bugs en producción.",
    ],
    tech: ["React", "TypeScript", "SASS", "Node.js", "Docker", "GitHub"],
  },
  {
    id: "smart-device-heliboss",
    company: "Smart Device / Heliboss",
    logo: "https://res.cloudinary.com/dy651pevq/image/upload/v1775788947/portfolio/heliboss_j5bjfw.jpg",
    position: "Desarrollador Web",
    period: "2023 - 2024",
    location: "Providencia, RM, Chile",
    description: [
      "Optimización SEO técnica y mejora de rendimiento.",
      "Desarrollo y mantención de secciones clave.",
      "Gestión de catálogo y productos en PrestaShop.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PrestaShop"],
  },
  {
    id: "fusion-agency",
    company: "Fusion Agency",
    logo: "https://res.cloudinary.com/dy651pevq/image/upload/v1775788945/portfolio/fusion_si1kom.jpg",
    position: "Desarrollador Web Junior",
    period: "2021 - 2022",
    location: "Remoto",
    description: [
      "Desarrollo de sitios web, ecommerce y landing pages.",
      "Implementación de soluciones para clientes en Chile y Perú.",
      "Construcción de sitios con WordPress y herramientas visuales.",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "WordPress",
      "WooCommerce",
    ],
  },
];
