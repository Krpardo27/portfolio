"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import { serviceProcess, services } from "../data";
import type { IconType } from "react-icons";

const serviceIcons: Record<string, IconType> = {
  "landing-pages": FiLayers,
  "frontend-apps": FiCode,
  "admin-panels": FiDatabase,
};

const serviceNumbers: Record<string, string> = {
  "landing-pages": "01",
  "frontend-apps": "02",
  "admin-panels": "03",
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
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${
        compactTop ? "pt-8 pb-16" : "py-24 lg:py-32"
      }`}
    >
      {/* Header */}
      {showIntro && (
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <h2 className="font-bold uppercase tracking-[0.2em]">Servicios</h2>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {isCompact
              ? "Desarrollo sitios y aplicaciones web adaptadas a las necesidades de cada proyecto."
              : "Desde una landing page hasta una aplicación web completa. Desarrollo soluciones enfocadas en rendimiento, usabilidad y una buena experiencia de usuario."}
          </p>
        </motion.header>
      )}

      {/* Services */}
      <div className="border-t border-white/10">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.id] ?? FiCode;
          const number =
            serviceNumbers[service.id] ?? String(index + 1).padStart(2, "0");

          return (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group border-b border-white/10"
            >
              <div className="relative grid gap-8 py-8 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-10 md:py-10">
                {/* Number */}
                <span className="font-mono text-sm text-slate-600 transition-colors duration-300 group-hover:text-blue-500">
                  {number}
                </span>

                {/* Main content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-500 transition-colors duration-300 group-hover:text-blue-400">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <h2 className="text-xl font-medium tracking-tight text-white sm:text-2xl">
                      {service.title}
                    </h2>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {service.highlights.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Full variant content */}
                  {!isCompact && (
                    <div className="mt-6 max-w-2xl border-l border-white/10 pl-4">
                      <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                        Incluye
                      </p>

                      <ul className="mt-3 space-y-2">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="text-sm leading-6 text-slate-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        {service.outcome}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Compact CTA */}
      {isCompact && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Ver todos los servicios
            <FiArrowUpRight
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={16}
            />
          </Link>
        </motion.div>
      )}

      {/* Process */}
      {!isCompact && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-24 pt-10 lg:mt-32 lg:pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Process intro */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-blue-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                  Proceso
                </span>
              </div>

              <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Una forma simple de trabajar.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                Mantengo el proceso claro desde el principio, con avances
                concretos y comunicación durante todo el desarrollo.
              </p>
            </div>

            {/* Process steps */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-5 py-5"
                >
                  <span className="font-mono text-xs text-slate-600 transition-colors group-hover:text-blue-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-slate-400 transition-colors group-hover:text-slate-300">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </section>
  );
}
