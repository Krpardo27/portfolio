import { Header } from "@/shared/components/layout/Header";
import "./globals.css";
import { Footer } from "@/shared/components/layout/Footer";
import { NavMobile } from "@/shared/components/layout/NavMobile";
import ToastNotification from "@/shared/components/ui/ToastNotification";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-dvh">
        <Header />
        <main
          className="
            flex-1 container mx-auto max-w-6xl px-4"
        >
          {children}
        </main>
        <Footer />
        <NavMobile />
        <ToastNotification />
      </body>
    </html>
  );
}
