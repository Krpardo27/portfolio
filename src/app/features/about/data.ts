export interface EducationItem {
  id: number;
  period: string;
  title: string;
  institution: string;
  description: string;
  logoUrl: string;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    period: "2024 – 2025",
    title: "Especialización en Desarrollo de Aplicaciones Frontend",
    institution: "Adalid",
    description:
      "Especialización enfocada en fundamentos de programación web, arquitectura frontend y diseño de interfaces.",
    logoUrl:
      "https://res.cloudinary.com/dy651pevq/image/upload/v1775782711/portfolio/adalid_mkfj0y.png",
  },
  {
    id: 2,
    period: "2023",
    title: "Certificación React.js",
    institution: "CoderHouse",
    description:
      "Curso avanzado de React: componentes, hooks, routing, consumo de APIs, Context API y proyecto final.",
    logoUrl:
      "https://res.cloudinary.com/dy651pevq/image/upload/f_auto,q_auto/v1775782721/portfolio/coderhouse_f2dc79.png",
  },
  {
    id: 3,
    period: "2022",
    title: "Certificación JavaScript",
    institution: "CoderHouse",
    description:
      "Fundamentos de JavaScript moderno: DOM, AJAX, JSON y prácticas aplicadas.",
    logoUrl:
      "https://res.cloudinary.com/dy651pevq/image/upload/f_auto,q_auto/v1775782721/portfolio/coderhouse_f2dc79.png",
  },
  {
    id: 4,
    period: "2019 – 2022",
    title: "Técnico en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    description:
      "Formación técnica en análisis, diseño, desarrollo e implementación de sistemas de software.",
    logoUrl:
      "https://res.cloudinary.com/dy651pevq/image/upload/v1775782711/portfolio/aiep_tyyios.svg", 
  },
];
