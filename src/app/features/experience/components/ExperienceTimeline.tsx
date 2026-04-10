import { Timeline } from "../../../shared/components/ui/Timeline";
import { experienceData } from "../data";

export function ExperienceTimeline() {
  return (
    <Timeline
      title="Experiencia Laboral"
      description="Experiencia desarrollando interfaces modernas con foco en performance y UX."
      data={experienceData.map((job) => ({
        id: job.id,
        title: job.position,
        subtitle: job.company,
        period: job.period,
        location: job.location,
        description: job.description,
        tech: job.tech,
        logo: job.logo,
      }))}
    />
  );
}