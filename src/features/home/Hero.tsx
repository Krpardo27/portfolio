"use client";

import Heading from "@/shared/components/ui/Heading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-24 sm:px-8 md:pt-32">
      <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-20">
        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="max-w-2xl"
        >
          {/* Availability */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Disponible para proyectos freelance
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Heading level={1}>Kevin Pardo</Heading>
          </motion.div>

          {/* Role */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-5 text-xl font-medium tracking-tight text-slate-300 sm:text-2xl"
          >
            Frontend Developer
            <span className="text-slate-600"> · </span>
            React & Next.js
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            Desarrollo interfaces y aplicaciones web enfocadas en rendimiento,
            experiencia de usuario y código mantenible.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-blue-400"
            >
              Ver proyectos
              <span
                aria-hidden="true"
                className="text-slate-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-400"
              >
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-white"
            >
              Contacto
            </Link>

            <a
              href="/CV-Kevin-Pardo.pdf"
              download="CV-Kevin-Pardo.pdf"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-white"
            >
              Descargar CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative hidden justify-center md:flex md:justify-end"
        >
          <div className="relative">
            {/* Decorative line */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 h-px w-24 bg-blue-500"
            />

            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-24 w-px bg-white/10"
            />

            {/* Image */}
            <div className="relative h-[320px] w-[280px] overflow-hidden bg-slate-900 sm:h-[380px] sm:w-[330px] lg:h-[440px] lg:w-[380px]">
              <Image
                src="https://res.cloudinary.com/kpardo-cloud/image/upload/v1775785552/portfolio/perfil_flmc7z.jpg"
                alt="Kevin Pardo"
                fill
                priority
                className="object-cover grayscale-[15%] transition-all duration-500 hover:grayscale-0"
                sizes="(max-width: 1024px) 330px, 380px"
              />
            </div>

            {/* Image caption */}
            <div className="absolute -bottom-8 right-0 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
              Santiago, Chile
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="mt-24 origin-left border-t border-white/10"
      />
    </section>
  );
}
