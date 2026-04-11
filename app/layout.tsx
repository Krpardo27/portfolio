import { Header } from "@/src/shared/components/layout/Header";
import "./globals.css";
import { Footer } from "@/src/shared/components/layout/Footer";
import { NavMobile } from "@/src/shared/components/layout/NavMobile";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main
          className="
            flex-1
            pt-16       
            pb-20        
            lg:pb-0     
            px-4 lg:px-6
          "
        >
          {children}
        </main>
        <Footer />
        <NavMobile />
      </body>
    </html>
  );
}
