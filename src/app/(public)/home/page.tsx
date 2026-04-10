"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-7xl items-center py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col gap-6 text-center md:text-left"
        >

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm text-blue-400 font-medium tracking-wide"
          >
            Disponible para proyectos freelance
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Hola, soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Kevin Pardo
            </span>
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-lg md:text-xl text-slate-300 font-medium"
          >
            Frontend Developer especializado en React & Next.js
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Construyo interfaces modernas, optimizadas y escalables con foco en
            performance, UX y buenas prácticas de desarrollo.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
          >
            <Link
              href="/projects"
              className="
                px-6 py-3 rounded-xl 
                bg-gradient-to-r from-blue-600 to-indigo-600 
                hover:from-blue-500 hover:to-indigo-500 
                text-white font-medium 
                shadow-lg shadow-blue-900/30
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              Ver proyectos
            </Link>

            <Link
              href="/contact"
              className="
                px-6 py-3 rounded-xl 
                border border-slate-600 
                hover:border-blue-400 
                text-white 
                transition-all duration-300
                hover:bg-slate-800
              "
            >
              Contacto
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center relative"
        >

          {/* Glow */}
          <div className="absolute w-52 h-52 md:w-[420px] md:h-[420px] bg-blue-500/20 blur-3xl rounded-full" />

          {/* Imagen */}
          <div
            className="
              relative 
              w-[220px] h-[220px]
              sm:w-[260px] sm:h-[260px]
              md:w-[320px] md:h-[320px]
              lg:w-[380px] lg:h-[380px]
              xl:w-[440px] xl:h-[440px]

              rounded-3xl overflow-hidden 
              border border-white/10 
              bg-slate-900
              shadow-xl shadow-black/40
              transition-all duration-500
              hover:scale-[1.03]
            "
          >
            <Image
              src="https://res.cloudinary.com/dy651pevq/image/upload/v1775785552/portfolio/perfil_flmc7z.jpg"
              alt="Kevin Pardo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}