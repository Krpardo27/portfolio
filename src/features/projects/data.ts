export async function getProjects() {
  return [
    {
      slug: "fmdos",
      title: "FMDOS Concurso",
      description: "Sistema de votación con alto tráfico",
      image: "https://res.cloudinary.com/xxx/fmdos.jpg",
    },
    {
      slug: "radio-app",
      title: "Radio App",
      description: "Streaming y noticias",
      image: "https://res.cloudinary.com/xxx/radio-app.jpg",
    },
  ];
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

export const educationData = [
  {
    id: "adalid-frontend",
    period: "2024 – 2025",
    title: "Especialización en Desarrollo de Aplicaciones Frontend",
    institution: "Adalid",
    image: "https://www.kevcodesdev.cl/images/education/adalid.png",
    description:
      "Especialización enfocada en fundamentos de programación web, arquitectura frontend y diseño de interfaces.",
  },
  {
    id: "coderhouse-react",
    period: "2023",
    title: "Certificación React.js",
    institution: "CoderHouse",
    image: "/images/education/coderhouse.png",
    description:
      "Curso avanzado de React: componentes, hooks, routing y consumo de APIs.",
  },
  {
    id: "coderhouse-js",
    period: "2022",
    title: "Certificación JavaScript",
    institution: "CoderHouse",
    image: "https://www.kevcodesdev.cl/images/education/coderhouse.png",
    description:
      "Fundamentos de JavaScript moderno: DOM, AJAX y JSON.",
  },
  {
    id: "titulo-profesional",
    period: "2019 – 2022",
    title: "Técnico en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    image: "https://www.kevcodesdev.cl/images/education/aiep.png",
    description:
      "Formación técnica en análisis, diseño, desarrollo e implementación de sistemas de software, cubriendo el ciclo completo del desarrollo.",
  },
];
