"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiGrid,
  FiLayers,
  FiUser,
} from "react-icons/fi";

const navLinks = [
  { href: "/about", label: "Sobre mí", icon: FiUser },
  { href: "/services", label: "Servicios", icon: FiLayers },
  { href: "/projects", label: "Proyectos", icon: FiGrid },
  { href: "/experience", label: "Experiencia", icon: FiBriefcase },
];

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="
        fixed left-0 top-0 z-50 w-full
        border-b border-white/10 bg-[#0b1220]/80
        shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="group flex items-center gap-3"
        >
          <motion.span
            whileHover={{ rotate: -4, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-sm font-bold text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.16)] transition group-hover:border-blue-300/50 group-hover:bg-blue-500/15"
          >
            KP
          </motion.span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-tight text-white">
              Kevin<span className="text-blue-400">Dev</span>
            </span>
            <span className="mt-1 hidden text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
              Frontend Developer
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center rounded-2xl border border-white/10 bg-white/[0.03] p-1 text-sm shadow-inner shadow-white/5 md:flex gap-3"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative isolate flex items-center gap-2 overflow-hidden rounded-xl px-3.5 py-2 font-medium transition ${
                  active
                    ? "text-white shadow-sm shadow-blue-950/30"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="active-header-link"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 -z-10 rounded-xl bg-blue-500/15"
                  />
                )}
                <Icon
                  size={15}
                  className={active ? "text-blue-300" : "text-slate-500 transition group-hover:text-blue-300"}
                />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-200">
            <motion.span
              animate={{ scale: [1, 1.35, 1], opacity: [1, 0.75, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]"
            />
            Disponible
          </span>

          <Link
            href="/contact"
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
            className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Hablemos
            <FiArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}