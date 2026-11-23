import type { Project } from "../types/project.types";

export const restaurantLanding: Project = {
  id: "1",
  slug: "restaurant-landing",
  title: "Restaurant Landing",
  description:
    "Landing moderna para restaurante con enfoque en diseño visual y conversión.",
  image: "/projects/landing-pizzas/pizzas-1.png",
  categories: ["landings"],
  tags: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Performance Optimization",
  ],
  features: [
    "Carta digital por categorías, con buscador y filtros de pizzas",
    "Fichas de productos con ingredientes, precios y acceso al pedido por WhatsApp",
    "Carrusel y galería de fotos sobre la masa, los ingredientes y la preparación",
    "Acceso a reservas de mesa, horarios de atención y datos de contacto",
  ],
  architecture: [
    "Frontend en React con Vite como herramienta de desarrollo y compilación",
    "Dos vistas principales: la presentación de la pizzería y la carta interactiva",
    "Estilos con Tailwind CSS y animaciones de interfaz con Framer Motion",
  ],
  gallery: [
    "Portada de Pizza Nova con una pizza artesanal recién horneada",
    "Selección de pizzas con fotografías y precios",
    "Historia de la pizzería y preparación de la masa",
    "Carrusel sobre los ingredientes frescos de Pizza Nova",
    "Galería de la cocina y las pizzas servidas",
    "Sección de reservas, horarios y datos de contacto",
    "Portada de la carta con sus categorías",
    "Listado de pizzas con buscador, filtros y botones para pedir",
  ].map((alt, index) => ({
    src: `/projects/landing-pizzas/pizzas-${index + 1}.png`,
    alt,
    width: 1914,
    height: 954,
  })),
  demo: "https://restaurant-landing-one.vercel.app/",
};
