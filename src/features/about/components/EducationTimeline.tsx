import { Timeline } from "@/shared/components/ui/Timeline";
import { educationData } from "../data";

export function EducationTimeline() {
  return (
    <Timeline
      data={educationData.map((item) => ({
        id: item.id.toString(),
        title: item.title,
        subtitle: item.institution,
        period: item.period,
        description: item.description,
        logo: item.logoUrl,
      }))}
    />
  );
}