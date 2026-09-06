import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CONTACT_PHONE_DIGITS, CONTACT_PHONE_PREFIX } from "../constants";
import type { ContactFormValues } from "../schema";
import { sanitizePhone } from "../utils/sanitize-contact-field";
import FormErrors from "./FormErrors";

type PhoneFieldProps = {
  register: UseFormRegister<ContactFormValues>;
  setValue: UseFormSetValue<ContactFormValues>;
  errorMessage?: string;
};

export default function PhoneField({
  register,
  setValue,
  errorMessage,
}: PhoneFieldProps) {
  return (
    <div>
      <label htmlFor="phone" className="text-sm font-semibold mb-1 text-gray-700">
        Teléfono
      </label>

      <div className="relative">
        <div className="absolute top-[13px] left-0 pl-3 text-gray-500 text-sm font-semibold pointer-events-none">
          {CONTACT_PHONE_PREFIX}
        </div>
        <input
          id="phone"
          type="text"
          inputMode="numeric"
          maxLength={CONTACT_PHONE_DIGITS}
          {...register("phone")}
          onChange={(event) => {
            setValue("phone", sanitizePhone(event.target.value), {
              shouldValidate: true,
            });
          }}
          className="w-full pl-13 pr-4 py-3 rounded-xl border border-zinc-300 bg-white text-black text-sm outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200"
        />
      </div>

      {errorMessage ? <FormErrors>{errorMessage}</FormErrors> : null}
    </div>
  );
}
