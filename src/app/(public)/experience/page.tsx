import Image from "next/image";
import { experienceData } from "../../features/experience/data";
import { ExperienceTimeline } from "../../features/experience/components/ExperienceTimeline";
console.log(experienceData);

export default function ExperiencePage() {
  return (
    <section className="section-container">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <ExperienceTimeline />
      </div>
    </section>
  );
}
