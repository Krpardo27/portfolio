"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBriefcase,
  FiGrid,
  FiHome,
  FiLayers,
  FiMail,
  FiUser,
} from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Inicio", icon: FiHome },
  { href: "/about", label: "Sobre", icon: FiUser },
  { href: "/services", label: "Servicios", icon: FiLayers },
  { href: "/projects", label: "Proyectos", icon: FiGrid },
  { href: "/experience", label: "Exp", icon: FiBriefcase },
  { href: "/contact", label: "Contacto", icon: FiMail },
];

export function NavMobile() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <nav
        aria-label="Navegación móvil"
        className="relative mx-auto max-w-xl animate-[dockIn_380ms_cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#111111]/95 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl motion-reduce:animate-none"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent" />
        <div className="grid grid-cols-6 gap-1 p-1.5">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`
                group relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-0.5 py-1
                text-[9px] leading-none transition-colors min-[390px]:text-[10px]
                ${active
                  ? "font-semibold text-white"
                  : "font-medium text-zinc-400 hover:text-white"
                }
              `}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="max-w-full truncate leading-none">
                {link.label}
              </span>
              <span
                className={
                  active
                    ? "absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-blue-400 transition-all duration-300 ease-out"
                    : "absolute inset-x-1/2 bottom-1 h-0.5 rounded-full bg-blue-400/80 opacity-0 transition-all duration-300 ease-out group-hover:inset-x-4 group-hover:opacity-100"
                }
              />
            </Link>
          );
        })}
        </div>
      </nav>
    </div>
  );
}
