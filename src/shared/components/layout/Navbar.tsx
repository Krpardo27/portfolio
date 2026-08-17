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

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1220]"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
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
                className={`relative py-2 text-sm transition-colors duration-200 ${active ? "text-white" : "text-slate-500 hover:text-white"
                  }`}
              >
                {link.label}

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
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-5">
          {/* Contact */}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className="group hidden items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white md:flex"
          >
            Hablemos
            <FiArrowUpRight
              size={15}
              className="text-slate-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
            />
          </Link>
        </div>
      </div>
    </motion.header >
  );
}
