"use client";

import { motion } from "framer-motion";
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

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="hidden items-center gap-7 md:flex"
    >
      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`group relative py-2 text-sm transition-all duration-200 ${
              active ? "text-white" : "text-slate-500 hover:text-white"
            }`}
          >
            <span className="relative inline-block transition-transform duration-200">
              {link.label}
            </span>

            {active && (
              <motion.span
                layoutId="navbar-active"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className="absolute -bottom-[1px] left-0 right-0 h-px bg-blue-500"
              />
            )}

            {!active && (
              <span className="absolute -bottom-[1px] left-0 h-px w-0 bg-blue-400 transition-all duration-200 group-hover:w-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
