"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiGrid, FiBriefcase, FiMail, FiHome } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/about", label: "About", icon: FiUser },
  { href: "/projects", label: "Projects", icon: FiGrid },
  { href: "/experience", label: "Exp", icon: FiBriefcase },
  { href: "/contact", label: "Contact", icon: FiMail },
];

export function NavMobile() {
  const pathname = usePathname();

  return (
    <nav
      className="
    md:hidden
    fixed bottom-0 left-0 w-full z-50
    border-t border-white/10
    bg-slate-900/80 backdrop-blur-xl
  "
    >
      <div className="grid grid-cols-5 h-16">
        {navLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
        relative flex flex-col items-center justify-center gap-1
        text-xs transition-all duration-200 rounded-lg py-1

        ${link.href === "/"
                  ? pathname === "/"
                    ? "text-blue-500 bg-white/5"
                    : "text-slate-400"
                  : pathname.startsWith(link.href)
                    ? "text-blue-500 bg-white/5"
                    : "text-slate-400"
                }
      `}
            >
              {/* ICON */}
              <Icon size={18} />

              {/* LABEL */}
              <span>{link.label}</span>

              {/* INDICADOR */}
              {(link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)) && (
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-blue-500" />
                )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
