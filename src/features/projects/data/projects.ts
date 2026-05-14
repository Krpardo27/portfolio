export async function getProjects() {
  return [
    {
      id: "1",
      slug: "restaurant-landing",
      title: "Restaurant Landing",
      description:
        "Landing moderna para restaurante con enfoque en diseño visual y conversión.",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1776398975/portfolio/restaurant_px174z.jpg",
      categories: ["landings"],
      tags: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Cloudinary",
        "Framer Motion",
        "Performance Optimization",
      ],
      demo: "https://restaurant-landing-one.vercel.app/",
    },
    {
      id: "2",
      slug: "drinks-landing",
      title: "Drinks Landing",
      description:
        "Landing page para tienda de vinos y bebidas premium con diseño elegante y animaciones fluidas.",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1777493266/portfolio/drinks-project_vi9acg.jpg",
      categories: ["landings"],
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React icons"],
      demo: "https://drinks-landing-page.vercel.app/",
    },
    {
      id: "3",
      slug: "tienda-next",
      title: "Tienda Next.js",
      description:
        "E-commerce fullstack desarrollado con Next.js App Router, autenticación avanzada con Better Auth, recuperación de contraseña vía Mailtrap, dashboard administrativo, gestión de productos y categorías, búsqueda en tiempo real, carrito de compras y arquitectura moderna orientada a escalabilidad.",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1778782801/portfolio/tienda-next_qawypv.jpg",

      categories: ["fullstack", "ecommerce"],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "Mailtrap",
        "TailwindCSS",
        "Zod",
        "API Routes",
        "Server Actions",
        "Dashboard Admin",
        "Live Search",
      ],

      features: [
        "Registro e inicio de sesión",
        "Recuperación y reseteo de contraseña",
        "Correos transaccionales con Mailtrap",
        "Dashboard administrativo",
        "CRUD de productos y categorías",
        "Búsqueda dinámica en tiempo real",
        "Protección de rutas privadas",
        "Validaciones con Zod",
        "Arquitectura App Router",
        "Responsive Design",
      ],

      techStack: {
        frontend: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        backend: ["Next.js API Routes", "Server Actions", "Prisma ORM"],
        database: ["PostgreSQL"],
        auth: ["Better Auth"],
        services: ["Mailtrap", "Cloudinary", "Vercel"],
      },

      demo: "https://tienda-next-eight.vercel.app/order/cafe",
    },

    {
      id: "5",
      slug: "real-estate",
      title: "Real Estate App",
      description:
        "Aplicación inmobiliaria con listados dinámicos y filtrado avanzado.",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1776398975/portfolio/real-estate_ts67hk.jpg",
      categories: ["pages"],
      tags: ["Next.js", "API", "Filters"],
      demo: "https://real-estate-app-eight-virid.vercel.app/",
    },
    {
      id: "4",
      slug: "menu-template",
      title: "Menu Template",
      description: "Plantilla de menú interactivo para restaurantes",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1776880764/portfolio/menu-template_puevym.jpg",
      categories: ["landings"],
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demo: "https://menu-template-next.vercel.app/",
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
    description: "Fundamentos de JavaScript moderno: DOM, AJAX y JSON.",
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
