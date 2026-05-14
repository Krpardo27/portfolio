export interface EducationItem {
  id: number;
  period: string;
  title: string;
  institution: string;
  description: string[];
  logoUrl: string;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    period: "2024 – 2025",
    title: "Especialización en Desarrollo de Aplicaciones Frontend",
    institution: "Adalid",
    description: [
      "Fundamentos de programación web y arquitectura frontend",
      "Desarrollo de interfaces modernas con enfoque UX/UI",
      "Aplicación de buenas prácticas y patrones de diseño",
    ],
    logoUrl:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/v1775782711/portfolio/adalid_mkfj0y.png",
  },
  {
    id: 2,
    period: "2023",
    title: "Certificación React.js",
    institution: "CoderHouse",
    description: [
      "Desarrollo de componentes reutilizables",
      "Uso de Hooks (useState, useEffect, etc.)",
      "Routing con React Router",
      "Consumo de APIs REST",
      "Gestión de estado con Context API",
    ],
    logoUrl:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/f_auto,q_auto/v1775782721/portfolio/coderhouse_f2dc79.png",
  },
  {
    id: 3,
    period: "2022",
    title: "Certificación JavaScript",
    institution: "CoderHouse",
    description: [
      "Manipulación del DOM",
      "Uso de AJAX y Fetch API",
      "Trabajo con JSON",
      "Buenas prácticas de JavaScript moderno",
    ],
    logoUrl:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/f_auto,q_auto/v1775782721/portfolio/coderhouse_f2dc79.png",
  },
  {
    id: 4,
    period: "2019 – 2022",
    title: "Técnico en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    description: [
      "Análisis y diseño de sistemas",
      "Desarrollo de software",
      "Modelamiento de bases de datos",
      "Implementación de soluciones tecnológicas",
    ],
    logoUrl:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/v1777497977/portfolio/logo_vjjzdh.png",
  },
];
