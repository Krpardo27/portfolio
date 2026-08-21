import type {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import FormErrors from "./FormErrors";

type ContactTextFieldProps<TFormValues extends FieldValues> = {
  id: Path<TFormValues>;
  label: string;
  placeholder: string;
  register: UseFormRegister<TFormValues>;
  registerOptions?: RegisterOptions<TFormValues, Path<TFormValues>>;
  errorMessage?: string;
  type?: "text" | "email";
  multiline?: boolean;
  maxLength?: number;
};

const inputClassName =
  "w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm text-black outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200";

export default function ContactTextField<TFormValues extends FieldValues>({
  id,
  label,
  placeholder,
  register,
  registerOptions,
  errorMessage,
  type = "text",
  multiline = false,
  maxLength,
}: ContactTextFieldProps<TFormValues>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="my-2 block text-sm font-medium text-zinc-700"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          className={inputClassName}
          {...register(id, registerOptions)}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          maxLength={maxLength}
          className={inputClassName}
          {...register(id, registerOptions)}
        />
      )}

      {errorMessage ? <FormErrors>{errorMessage}</FormErrors> : null}
    </div>
  );
}
