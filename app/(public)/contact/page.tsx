"use client";

import ContactForm from "@/features/contact/components/ContactForm";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionHeader level={1} eyebrow="Contacto" title="Hablemos" description="¿Tienes un proyecto en mente o necesitas ayuda con una aplicación web? Puedes escribirme directamente o utilizar el formulario.">

          <a
            href="mailto:kpardoveas@gmail.com"
            className="mt-4 inline-block text-sm text-slate-400 underline decoration-slate-700 underline-offset-4 transition-colors hover:text-blue-400 hover:decoration-blue-400"
          >
            kpardoveas@gmail.com
          </a>
        </SectionHeader>

        <div className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
