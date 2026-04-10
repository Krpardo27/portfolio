

import { Timeline } from "@/src/app/shared/components/ui/Timeline";
import { educationData } from "../data";

export function EducationTimeline() {
  return (
    <Timeline
      title="Educación"
      description="Formación académica y especialización en desarrollo web."
        data={educationData.map((item) => ({
        id: item.id.toString(),
        title: item.title,
        subtitle: item.institution,
        period: item.period,
        description: [item.description],
        logo: item.logoUrl,
      }))}
    />
  );
}