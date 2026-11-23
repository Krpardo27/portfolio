import type { Project } from "../types/project.types";

export const restaurantAdminPanel: Project = {
  id: "3",
  slug: "restaurant-admin-panel",
  title: "Restaurant Admin Panel",
  description:
    "Panel administrativo fullstack para la gestión de productos, categorías y control de disponibilidad en tiempo real. Incluye autenticación segura con Google OAuth mediante Better Auth, protección de rutas privadas, y una interfaz optimizada para operación diaria en entornos de restaurante.",
  image: "/projects/restaurant-admin-panel/panel.webp",
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
  demoNote:
    "Sin iniciar sesión puedes recorrer la carta, buscar un plato y abrir su ficha. La edición de productos y disponibilidad requiere acceso autorizado.",
  features: [
    "Carta pública con categorías, subcategorías y búsqueda de productos",
    "Detalle de cada plato con fotografía, precio y descripción",
    "Gestión de productos y categorías desde un panel privado",
    "Control de disponibilidad por producto sin eliminarlo de la carta de administración",
  ],
  architecture: [
    "Aplicación en Next.js y TypeScript con vistas separadas para la carta y la administración",
    "Catálogo organizado en rutas por categoría, con datos en PostgreSQL y acceso mediante Prisma",
    "Autenticación con Better Auth y Google OAuth para las rutas privadas",
  ],
  gallery: [
    {
      src: "/projects/restaurant-admin-panel/catalogo.webp",
      alt: "Carta pública de almuerzos con categorías, buscador y precios",
      width: 1440,
      height: 900,
    },
    {
      src: "/projects/restaurant-admin-panel/plato.webp",
      alt: "Ficha del atún sellado con fotografía, acompañamientos y precio",
      width: 1440,
      height: 900,
    },
    {
      src: "/projects/restaurant-admin-panel/panel.webp",
      alt: "Panel privado con controles de disponibilidad junto a cada producto",
      width: 1911,
      height: 940,
    },
  ],
};
