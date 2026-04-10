import { Footer } from "../shared/components/layout/Footer";
import { Header } from "../shared/components/layout/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 py-10 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}