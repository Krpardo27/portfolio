"use client";

import { toast } from "react-toastify";
import { useTransition } from "react";
import { sendContactForm } from "../actions/contact.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues, ContactInput } from "../schema";
import FormErrors from "./FormErrors";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormValues, unknown, ContactInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactInput) => {
    startTransition(async () => {
      const start = Date.now();

      const res = await sendContactForm(data);

      // mínimo 2000ms
      const elapsed = Date.now() - start;
      const remaining = 2000 - elapsed;

      if (remaining > 0) {
        await new Promise((r) => setTimeout(r, remaining));
      }

      if (!res.success) {
        res.errors.forEach((err) => toast.error(err.message));
        return;
      }

      toast.success(res.message);
      reset();
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto rounded-xl bg-zinc-100 p-6 section-container shadow-lg"
      >
        <input
          {...register("website")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <label
          htmlFor="name"
          className="my-2 block text-sm font-medium text-zinc-700"
        >
          Ingresa tu nombre:
        </label>
        <input
          {...register("name", {
            onChange: (e) => {
              const value = e.target.value
                .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
                .replace(/\s{2,}/g, " ");
              setValue("name", value);
            },
          })}
          type="text"
          id="name"
          placeholder="Nombre"
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-black outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"

        />
        {errors.name && <FormErrors>{errors.name.message}</FormErrors>}
        <label className="text-sm font-semibold mb-1 text-gray-700">
          Teléfono
        </label>

        <div className="relative">
          {/* Prefijo fijo */}
          <div className="absolute top-[13px] left-0 pl-3 text-gray-500 text-sm font-semibold pointer-events-none">
            +56 9
          </div>
          <input
            type="text"
            inputMode="numeric"
            maxLength={8}
            {...register("phone")}
            onChange={(e) => {
              const clean = e.target.value.replace(/\D/g, "").slice(0, 8);

              setValue("phone", clean, {
                shouldValidate: true,
              });
            }}
            className={`
      w-full pl-14 pr-4 py-3 rounded-xl
      border border-zinc-300 bg-white text-black text-sm
      outline-none transition
      focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200
    `}
          />
        </div>

        {errors.phone && <FormErrors>{errors.phone.message}</FormErrors>}

        <label
          htmlFor="email"
          className="my-2 block text-sm font-medium text-zinc-700"
        >
          Ingresa tu correo electrónico:
        </label>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full rounded-xl border border-zinc-300  px-4 py-3 text-sm outline-none transition text-black focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
          {...register("email")}
        />
        {errors.email && <FormErrors>{errors.email.message}</FormErrors>}
        <label
          htmlFor="message"
          className="my-2 block text-sm font-medium text-zinc-700"
        >
          Ingresa tu mensaje:
        </label>
        <textarea
          placeholder="Mensaje"
          maxLength={1500}
          className="w-full rounded-xl border border-zinc-300  px-4 py-3 text-sm outline-none transition text-black focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
          {...register("message")}
        />
        {errors.message && <FormErrors>{errors.message.message}</FormErrors>}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-xl bg-black px-4 py-3 text-sm font-medium text-white
  transition-all duration-200
  hover:bg-zinc-800 cursor-pointer
  active:scale-[0.98]
  disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <AnimatePresence>
        {isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-70"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white px-8 py-6 rounded-2xl shadow-xl flex flex-col items-center gap-4"
            >
              {/* Spinner animado */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "linear",
                }}
                className="w-10 h-10 border-4 border-zinc-300 border-t-black rounded-full"
              />

              <p className="text-sm font-medium text-black">
                Enviando mensaje...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
