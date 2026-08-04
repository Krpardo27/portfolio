import { Hero } from "@/features/home/Hero";
import { TechStack } from "@/features/home/components/TechStack";
import { ServicesSection } from "@/features/services/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServicesSection compactTop variant="compact" />
    </>
  );
}
