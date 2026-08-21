"use client";

import ContactForm from "@/features/contact/components/ContactForm";
import Heading from "@/shared/components/ui/Heading";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <header className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Contacto
            </span>
          </div>

          <Heading level={1}>Hablemos</Heading>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            ¿Tienes un proyecto en mente o necesitas ayuda con una aplicación
            web? Puedes escribirme directamente o utilizar el formulario.
          </p>

          <a
            href="mailto:kpardoveas@gmail.com"
            className="mt-4 inline-block text-sm text-slate-400 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-blue-400 hover:decoration-blue-400"
          >
            kpardoveas@gmail.com
          </a>
        </header>

        <div className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
