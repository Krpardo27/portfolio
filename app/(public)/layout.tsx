import { Footer } from "@/src/shared/components/layout/Footer";
import { Header } from "@/src/shared/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 p-5 min-h-screen">
        {children}
      </main>
      <Footer />
    </>

  );
}
