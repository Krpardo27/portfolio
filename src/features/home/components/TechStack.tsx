"use client";

import Heading from "@/shared/components/ui/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
  SiCloudinary,
  SiDocker,
  SiFramer,
  SiGit,
  SiGithub,
  SiGoogle,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiResend,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";

type StackItem = {
  name: string;
  icon?: IconType;
  iconSrc?: string;
  brandColor?: string;
};

type StackCategory = {
  title: string;
  items: StackItem[];
};

const stackByCategory: StackCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact, brandColor: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, brandColor: "#0055FF" },
      { name: "TanStack Query", icon: SiReactquery, brandColor: "#FF4154" },
      { name: "Zustand", icon: FiCode, brandColor: "#A1856E" },
      { name: "React Hook Form", icon: FiCode, brandColor: "#EC5990" },
      { name: "Zod", icon: SiZod, brandColor: "#3E67B1" },
    ],
  },
  {
    title: "Backend y Datos",
    items: [
      { name: "Prisma", icon: SiPrisma, brandColor: "#2D3748" },
      { name: "Better Auth", icon: FiCode, brandColor: "#6366F1" },
      { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#336791" },
      { name: "MongoDB", icon: SiMongodb, brandColor: "#47A248" },
      { name: "Neon", iconSrc: "/neon-logo.svg", brandColor: "#00E699" },
      { name: "Resend", icon: SiResend, brandColor: "#9CA3AF" },
    ],
  },
  {
    title: "Infra y Deploy",
    items: [
      { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
      { name: "Git", icon: SiGit, brandColor: "#F05032" },
      { name: "GitHub", icon: SiGithub, brandColor: "#111827" },
      { name: "Vercel", icon: SiVercel, brandColor: "#000000" },
      { name: "Cloudinary", icon: SiCloudinary, brandColor: "#3448C5" },
    ],
  },
  {
    title: "SEO y Analytics",
    items: [
      {
        name: "Google Search Console",
        icon: SiGooglesearchconsole,
        brandColor: "#4285F4",
      },
      {
        name: "Google Analytics",
        icon: SiGoogleanalytics,
        brandColor: "#E37400",
      },
      { name: "Google Search Platform", icon: SiGoogle, brandColor: "#4285F4" },
      { name: "Google OAuth", icon: SiGoogle, brandColor: "#4285F4" },
    ],
  },
];

const categoryAccentStyles: Record<string, string> = {
  Frontend: "from-cyan-400/35 to-blue-400/25",
  "Backend y Datos": "from-emerald-400/35 to-teal-400/20",
  "Infra y Deploy": "from-orange-400/35 to-amber-400/20",
  "SEO y Analytics": "from-fuchsia-400/30 to-pink-400/20",
};

function StackIcon({ icon, iconSrc, name }: StackItem) {
  if (iconSrc) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-4 w-4 items-center justify-center"
      >
        <Image src={iconSrc} alt="" width={16} height={16} className="h-4 w-4" />
      </span>
    );
  }

  const Icon = icon;

  if (!Icon) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-[10px] font-semibold text-slate-200"
      >
        {name.slice(0, 1)}
      </span>
    );
  }

  return <Icon aria-hidden="true" className="h-4 w-4 text-current" />;
}

export function TechStack() {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  return (
    <section className="section-container pt-6 md:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl border border-slate-700/60 bg-slate-900/55 backdrop-blur-sm p-5 md:p-7"
      >
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.22em] text-blue-300/90">
            Stack principal
          </span>
          <Heading level={2} className="text-white">
            Tecnologías con las que trabajo
          </Heading>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {stackByCategory.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/60 p-4"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${categoryAccentStyles[category.title] ?? "from-blue-400/30 to-indigo-400/20"}`}
              />

              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold tracking-wide text-blue-300">
                  {category.title}
                </h3>
              </div>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.025,
                    },
                  },
                }}
                className="mt-3 flex flex-wrap gap-2.5"
              >
                {category.items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 8, scale: 0.98 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    whileHover={{
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onHoverStart={() => setActiveChip(item.name)}
                    onHoverEnd={() => setActiveChip((current) => (current === item.name ? null : current))}
                    onTapStart={() => setActiveChip(item.name)}
                    onTapCancel={() => setActiveChip((current) => (current === item.name ? null : current))}
                    onTap={() => setActiveChip((current) => (current === item.name ? null : current))}
                    style={
                      activeChip === item.name
                        ? {
                            borderColor: item.brandColor ?? "#60A5FA",
                            backgroundColor: item.brandColor
                              ? `${item.brandColor}26`
                              : "rgba(30, 41, 59, 0.95)",
                            color: item.brandColor ?? "#E2E8F0",
                          }
                        : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-800/85 px-3 py-1.5 text-xs sm:text-sm text-slate-100 shadow-sm shadow-blue-900/20 transition-[border-color,background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70"
                  >
                    <StackIcon name={item.name} icon={item.icon} iconSrc={item.iconSrc} />
                    <span>{item.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
