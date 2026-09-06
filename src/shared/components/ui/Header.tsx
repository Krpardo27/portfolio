"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Navbar } from "@/shared/components/ui/Navbar";
import { SocialLinks } from "@/shared/components/ui/SocialLinks";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b1220]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="group flex items-center gap-3"
        >
          <span className="font-mono text-sm font-semibold text-white">KP</span>
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="font-semibold tracking-tight text-white sm:block">
            Kevin Pardo
          </span>
        </Link>

        <Navbar />

        <div className="flex items-center gap-4">
          <SocialLinks
            className="md:hidden items-center gap-3.5"
            iconClassName="h-4 w-4"
          />

          <Link
            href="/contact"
            aria-current={false}
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
