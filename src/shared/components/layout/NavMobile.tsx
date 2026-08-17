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
  { href: "/experience", label: "Exp.", icon: FiBriefcase },
  { href: "/contact", label: "Contacto", icon: FiMail },
];

export function NavMobile() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <nav
        aria-label="Navegación móvil"
        className="mx-auto max-w-md border border-white/10 bg-[#0b1220]"
      >
        <div className="grid grid-cols-6">
          {navLinks.map((link) => {
            const Icon = link.icon;

            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-16 flex-col items-center justify-center gap-1.5 px-1 text-[10px] transition-colors ${
                  active ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <Icon
                  className={`h-[17px] w-[17px] ${
                    active ? "text-blue-400" : ""
                  }`}
                  strokeWidth={active ? 2 : 1.6}
                />

                <span className="truncate">{link.label}</span>

                {active && (
                  <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
