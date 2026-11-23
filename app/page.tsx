import { Hero } from "@/features/home/Hero";
import { FeaturedProjects } from "@/features/home/components/FeaturedProjects";
import { TechStack } from "@/features/home/components/TechStack";
import { ServicesSection } from "@/features/services/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <ServicesSection compactTop variant="compact" />
    </>
  );
}
