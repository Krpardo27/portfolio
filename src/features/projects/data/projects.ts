import { Project } from "../types/project.types";

export async function getProjects(): Promise<Project[]> {
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
      slug: "restaurant-admin-panel",
      title: "Restaurant Admin Panel",
      description:
        "Panel administrativo fullstack para la gestión de productos, categorías y control de disponibilidad en tiempo real. Incluye autenticación segura con Google OAuth mediante Better Auth, protección de rutas privadas, y una interfaz optimizada para operación diaria en entornos de restaurante.",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1782003541/portfolio/Captura_de_pantalla_2026-06-20_205738_ic7bjo.png",
      categories: ["fullstack"],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "Google OAuth",
        "Tailwind CSS",
        "Vercel",
      ],
      demo: "https://restaurant-admin-products.vercel.app/",
    },
    {
      id: "4",
      slug: "barber-app",
      title: "Gestión de Barberías",
      description:
        "Aplicación web fullstack para la gestión integral de barberías. Permite reservas online, administración de clientes, agenda por barbero, catálogo de servicios, panel administrativo y cálculo inteligente de disponibilidad según la duración de cada servicio.",
      image:
        "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783300000/portfolio/portada_svogce.jpg",
      categories: ["fullstack"],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
        "Google OAuth",
        "Tailwind CSS",
        "React Hook Form",
        "Zod",
        "Vitest",
      ],

      features: [
        "Reservas online con disponibilidad en tiempo real",
        "Agenda diaria por barbero",
        "Panel administrativo protegido",
        "Gestión de clientes",
        "Gestión de servicios y categorías",
        "Duración personalizada por servicio y barbero",
        "Prevención de doble reserva mediante transacciones",
        "Autenticación con Google OAuth",
        "Dashboard con métricas",
        "Responsive Design",
      ],
      architecture: [
        "App Router",
        "Server Components",
        "Server Actions",
        "Prisma ORM",
        "Relaciones many-to-many",
        "Transacciones SQL",
        "Validaciones con Zod",
        "Autenticación con Better Auth",
      ],

      techStack: {
        frontend: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS 4",
          "React Hook Form",
          "Framer Motion",
          "React Icons",
          "Zod",
        ],
        backend: ["Next.js Server Actions", "Prisma ORM", "Better Auth"],
        database: ["PostgreSQL"],
        auth: ["Better Auth", "Google OAuth"],
        testing: ["Vitest"],
        services: ["Vercel"],
      },

      gallery: [
        {
          src: "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783300000/portfolio/portada_svogce.jpg",
          alt: "Vista principal",
        },
        {
          src: 'https://res.cloudinary.com/kpardo-cloud/image/upload/v1783304501/portfolio/dashboard_gttzth.jpg',
          alt: "Vista del dashboard",
        },
        {
          src: "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783302811/portfolio/agenda_nt4fw5.jpg",
          alt: "Vista de la agenda diaria",
        },
        {
          src: "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783302811/portfolio/clientes_h7qnxm.jpg",
          alt: "Vista de la gestión de clientes",
        },
        {
          src: "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783302811/portfolio/barberos_jockdx.jpg",
          alt: "Vista de la gestión de barberos",
        },
        {
          src: "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783304402/portfolio/editar_riyxcd.jpg",
          alt: "Vista de la edición de clientes",
        },
        {
          src: "https://res.cloudinary.com/kpardo-cloud/image/upload/v1783302810/portfolio/confirm_ziis06.jpg",
          alt: "Vista de la confirmación",
        },
      ],

      demo: "https://barber-app-chi-two.vercel.app/",
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
    image:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/v1775782711/portfolio/adalid_mkfj0y.png",
    description:
      "Especialización enfocada en fundamentos de programación web, arquitectura frontend y diseño de interfaces.",
  },
  {
    id: "coderhouse-react",
    period: "2023",
    title: "Certificación React.js",
    institution: "CoderHouse",
    image:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/v1775782721/portfolio/coderhouse_f2dc79.png",
    description:
      "Curso avanzado de React: componentes, hooks, routing y consumo de APIs.",
  },
  {
    id: "coderhouse-js",
    period: "2022",
    title: "Certificación JavaScript",
    institution: "CoderHouse",
    image:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/v1775782721/portfolio/coderhouse_f2dc79.png",
    description: "Fundamentos de JavaScript moderno: DOM, AJAX y JSON.",
  },
  {
    id: "titulo-profesional",
    period: "2019 – 2022",
    title: "Técnico en Programación y Análisis de Sistemas",
    institution: "Instituto Profesional AIEP",
    image:
      "https://res.cloudinary.com/kpardo-cloud/image/upload/v1777497977/portfolio/logo_vjjzdh.png",
    description:
      "Formación técnica en análisis, diseño, desarrollo e implementación de sistemas de software, cubriendo el ciclo completo del desarrollo.",
  },
];
