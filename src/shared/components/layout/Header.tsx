"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import { SocialLinks } from "@/shared/components/ui/SocialLinks";

const navLinks = [
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

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b1220]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="group flex items-center gap-3"
        >
          <span className="font-mono text-sm font-semibold text-white">KP</span>
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className=" font-semibold tracking-tight text-white sm:block">
            Kevin Pardo
          </span>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="relative py-2 text-sm transition-colors"
              >
                <span
                  className={`transition-colors ${
                    active
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </span>

                {active && (
                  <motion.span
                    layoutId="header-active"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="absolute -bottom-[1px] left-0 right-0 h-px bg-blue-500"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <SocialLinks
            className="md:hidden items-center gap-3.5"
            iconClassName="h-4 w-4"
          />

          <Link
            href="/contact"
            className="group hidden items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-white md:flex"
          >
            Hablemos
            <FiArrowUpRight
              size={15}
              className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
