import { Hero } from "@/features/home/Hero";
import { ServicesSection } from "@/features/services/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection compactTop variant="compact" />
    </>
  );
}
