"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/about",
    label: "Sobre mí",
  },
  {
    href: "/services",
    label: "Servicios",
  },
  {
    href: "/projects",
    label: "Proyectos",
  },
  {
    href: "/experience",
    label: "Experiencia",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden items-center gap-7 md:flex"
    >
      {navLinks.map((link) => {
        const exact = pathname === link.href;
        const active = exact || (link.href !== "/" && pathname.startsWith(`${link.href}/`));

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={exact ? "page" : active ? "location" : undefined}
            className={`group relative rounded-sm py-2 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 motion-reduce:transition-none ${
              active ? "text-white" : "text-slate-400 hover:text-white focus-visible:text-white"
            }`}
          >
            {link.label}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left transition-[scale,background-color] duration-200 motion-reduce:transition-none ${
                active ? "scale-x-100 bg-blue-500" : "scale-x-0 bg-blue-400 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
