// src/shared/components/layout/Header.tsx
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-[var(--color-background)]/70
        border-b border-[var(--color-border)]
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-[var(--color-text)] text-lg font-semibold tracking-tight"
        >
          Kevin
          <span className="text-[var(--color-primary)]">Dev</span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                relative
                text-[var(--color-muted)]
                transition-colors duration-300
                hover:text-[var(--color-text)]

                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[var(--color-primary)]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}