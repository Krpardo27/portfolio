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
    period: "2027 – En curso",
    title: "Ingeniería en Computación e Informática",
    institution: "Universidad Andrés Bello (UNAB)",
    description: [
      "Formación en ingeniería de software y desarrollo de sistemas",
      "Profundización en programación, bases de datos y arquitectura de software",
      "Formación orientada al desarrollo de soluciones tecnológicas",
    ],
    logoUrl: "/logos/unab.webp",
  },
  {
    id: 2,
    period: "2024 – 2025",
    title: "Especialización en Desarrollo de Aplicaciones Frontend",
    institution: "Adalid",
    description: [
      "Fundamentos de programación web y arquitectura frontend",
      "Desarrollo de interfaces modernas con enfoque UX/UI",
      "Aplicación de buenas prácticas y patrones de diseño",
    ],
    logoUrl: "/logos/adalid.webp",
  },
  {
    id: 3,
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
    logoUrl: "/logos/coderhouse.webp",
  },
  {
    id: 4,
    period: "2022",
    title: "Certificación JavaScript",
    institution: "CoderHouse",
    description: [
      "Manipulación del DOM",
      "Uso de AJAX y Fetch API",
      "Trabajo con JSON",
      "Buenas prácticas de JavaScript moderno",
    ],
    logoUrl: "/logos/coderhouse.webp",
  },
  {
    id: 5,
    period: "2019 – 2022",
    title: "Técnico en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    description: [
      "Análisis y diseño de sistemas",
      "Desarrollo de software",
      "Modelamiento de bases de datos",
      "Implementación de soluciones tecnológicas",
    ],
    logoUrl: "/logos/aiep.webp",
  },
];
