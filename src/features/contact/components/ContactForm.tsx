"use client";

import { toast } from "react-toastify";
import { useTransition } from "react";
import { sendContactForm } from "../actions/contact.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormValues,
  ContactInput,
} from "../schema";
import {
  CONTACT_FORM_MIN_LOADING_MS,
  CONTACT_MESSAGE_MAX_LENGTH,
} from "../constants";
import { sanitizeName } from "../utils/sanitize-contact-field";
import ContactTextField from "./ContactTextField";
import PhoneField from "./PhoneField";
import SubmitOverlay from "./SubmitOverlay";

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
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: ContactInput) => {
    startTransition(async () => {
      const start = Date.now();

      const res = await sendContactForm(data);

      const elapsed = Date.now() - start;
      const remaining = CONTACT_FORM_MIN_LOADING_MS - elapsed;

      if (remaining > 0) {
        await new Promise((resolve) => setTimeout(resolve, remaining));
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
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-6">
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">
          Envíame un mensaje
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7"
      >
        <input
          {...register("website")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="space-y-5">
          <ContactTextField
            id="name"
            label="Ingresa tu nombre:"
            placeholder="Nombre"
            register={register}
            errorMessage={errors.name?.message?.toString()}
            registerOptions={{
              onChange: (e) => {
                setValue("name", sanitizeName(e.target.value), {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              },
            }}
          />

          <PhoneField
            register={register}
            setValue={setValue}
            errorMessage={errors.phone?.message?.toString()}
          />

          <ContactTextField
            id="email"
            label="Ingresa tu correo electrónico:"
            placeholder="Correo electrónico"
            type="email"
            register={register}
            errorMessage={errors.email?.message?.toString()}
          />

          <ContactTextField
            id="message"
            label="Ingresa tu mensaje:"
            placeholder="Mensaje"
            maxLength={CONTACT_MESSAGE_MAX_LENGTH}
            register={register}
            errorMessage={errors.message?.message?.toString()}
            multiline
          />

          <div className="pt-1">
            <button
              type="submit"
              disabled={isPending}
              className="
                w-full rounded-lg bg-zinc-950 px-4 py-3
                text-sm font-medium text-white cursor-pointer
                transition-colors duration-200
                hover:bg-zinc-800
                active:bg-zinc-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {isPending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        </div>
      </form>

      <SubmitOverlay show={isPending} />
    </div>
  );
}