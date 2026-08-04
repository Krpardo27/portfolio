"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import { serviceProcess, services } from "../data";
import Heading from "@/shared/components/ui/Heading";
import type { IconType } from "react-icons";

const serviceIcons: Record<string, IconType> = {
  "landing-pages": FiLayers,
  "frontend-apps": FiCode,
  "admin-panels": FiDatabase,
};

const serviceStyles: Record<
  string,
  { accent: string; iconTone: string; chipTone: string }
> = {
  "landing-pages": {
    accent: "from-cyan-400/40 to-blue-500/10",
    iconTone: "border-cyan-400/35 bg-cyan-500/10 text-cyan-200",
    chipTone: "border-cyan-400/25 bg-cyan-500/10 text-cyan-200",
  },
  "frontend-apps": {
    accent: "from-violet-400/35 to-blue-500/10",
    iconTone: "border-violet-400/35 bg-violet-500/10 text-violet-200",
    chipTone: "border-violet-400/25 bg-violet-500/10 text-violet-200",
  },
  "admin-panels": {
    accent: "from-emerald-400/35 to-teal-500/10",
    iconTone: "border-emerald-400/35 bg-emerald-500/10 text-emerald-200",
    chipTone: "border-emerald-400/25 bg-emerald-500/10 text-emerald-200",
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

type ServicesSectionProps = {
  showIntro?: boolean;
  compactTop?: boolean;
  variant?: "compact" | "full";
};

export function ServicesSection({
  showIntro = true,
  compactTop = false,
  variant = "full",
}: ServicesSectionProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        compactTop ? "pt-8 pb-16" : "py-24"
      }`}
    >
      {showIntro && (
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 px-4 text-center"
        >
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-blue-200">
            Servicios
          </span>

          <Heading level={isCompact ? 2 : 1}>
            {isCompact ? "Servicios para " : "Soluciones que puedo "}
            <span className="text-blue-500">
              {isCompact ? "tu proyecto" : "construir"}
            </span>
          </Heading>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          />

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            {isCompact
              ? "Desarrollo soluciones web claras, rápidas y pensadas para convertir ideas en productos reales."
              : "Ofrezco desarrollo web frontend y fullstack para negocios que necesitan presencia digital, interfaces claras o herramientas internas listas para crecer."}
          </p>
        </motion.header>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={cardContainerVariants}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = serviceIcons[service.id] ?? FiCode;
          const style = serviceStyles[service.id] ?? {
            accent: "from-blue-400/30 to-indigo-500/10",
            iconTone: "border-blue-400/35 bg-blue-500/10 text-blue-200",
            chipTone: "border-blue-400/25 bg-blue-500/10 text-blue-200",
          };

          return (
            <motion.article
              key={service.id}
              variants={cardItemVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/25 backdrop-blur-sm transition duration-300 hover:border-blue-300/35"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${style.accent}`}
              />

              <div className="flex items-start justify-between gap-4">
                <motion.div
                  whileHover={{ rotate: -5, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${style.iconTone}`}
                >
                  <Icon size={22} />
                </motion.div>
              </div>

              <h2 className="text-xl font-semibold text-white">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${style.chipTone}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-4" />

              {!isCompact && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mt-6 rounded-xl border border-white/10 bg-slate-950/45 p-4"
                >
                  <h3 className="text-sm font-semibold text-white">Incluye</h3>

                  <ul className="mt-3 space-y-2.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-blue-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">
                    {service.outcome}
                  </p>
                </motion.div>
              )}

              {isCompact && (
                <div className="mt-5">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 transition group-hover:text-blue-200"
                  >
                    Ver detalle
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </motion.article>
          );
        })}
      </motion.div>

      {isCompact && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-blue-400/30 px-5 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/10 hover:text-blue-200"
          >
            Ver servicios en detalle
          </Link>
        </motion.div>
      )}

      {!isCompact && (
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-slate-950/50 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">
              Proceso de trabajo
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Trabajo en pasos cortos y claros, con revisiones periódicas y
              entregas parciales para asegurar que el proyecto avance de manera
              ordenada y cumpla con tus expectativas.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/4 p-4 text-base text-slate-300"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/10 text-xs font-semibold text-blue-200">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
