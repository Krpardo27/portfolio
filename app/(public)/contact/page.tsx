"use client"; // Asegúrate de tener esto si usas motion aquí

import ContactForm from "@/src/features/contact/components/ContactForm";
import Heading from "@/src/shared/components/ui/Heading";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactPage() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto space-y-6 section-container"
      >
        <div className="space-y-1 text-center max-w-lg flex flex-col items-center justify-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Heading level={1} className="text-white mt-10">
              Contáctame
            </Heading>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-zinc-500"
          >
            ¡Trabajemos juntos! Si tienes un proyecto en mente, no dudes en contactarme. Estoy abierto a nuevas
            oportunidades y colaboraciones. Puedes enviarme un correo electrónico
            a{" "}
            <a
              href="mailto:kpardoveas@gmail.com"
              className="text-blue-500 underline"
            >
              kpardoveas@gmail.com
            </a>
            .
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}