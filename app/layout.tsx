import { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio - Kevin Pardo Veas",
  description: "Bienvenido a mi portfolio, donde podrás descubrir mis proyectos, habilidades y experiencia en el desarrollo web. Soy un apasionado desarrollador con un enfoque en la creación de soluciones innovadoras y eficientes. Explora mi trabajo y no dudes en contactarme para colaborar en futuros proyectos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} bg-gray-100 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}