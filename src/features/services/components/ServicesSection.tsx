"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import { serviceProcess, services } from "../data";
import Heading from "@/shared/components/ui/Heading";

const icons = [FiLayers, FiCode, FiDatabase];

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
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14 px-4"
        >
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
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {services.map((service, index) => {
          const Icon = icons[index];

          return (
            <motion.article
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 34, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.05]"
            >
              <motion.div
                whileHover={{ rotate: -5, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300"
              >
                <Icon size={22} />
              </motion.div>

              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.description}
              </p>

              <ul className="mt-5 space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
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

              <p className="mt-6 border-t border-white/10 pt-4 text-xs font-medium uppercase tracking-wide text-blue-300/80">
                {service.proof}
              </p>
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
          className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-slate-950/50 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8"
        >
          <div>
            <Heading level={2} className="text-white">
              Cómo trabajo un proyecto
            </Heading>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex gap-3 rounded-xl bg-white/[0.03] p-4 text-sm text-slate-300"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-semibold text-blue-300">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
            <p className="text-sm leading-6 text-slate-300">
              Si tienes una idea, una web que necesita mejorar o una herramienta interna pendiente, puedo ayudarte a bajarla a una solución concreta.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </motion.div>
      )}
    </section>
  );
}