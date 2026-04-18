import { BaseEmail } from "./layout/BaseEmail";

type Props = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmail({ name, email, message }: Props) {
  return (
    <BaseEmail>
      <h3>Nuevo mensaje de contacto</h3>

      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>

      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
        }}
      >
        <p style={{ margin: 0 }}>{message}</p>
      </div>
    </BaseEmail>
  );
}
