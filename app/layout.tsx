import "./globals.css";
import { Header } from "@/src/shared/components/layout/Header";
import { Footer } from "@/src/shared/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 py-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}