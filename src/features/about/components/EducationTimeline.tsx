

import { Timeline } from "@/src/shared/components/ui/Timeline";
import { educationData } from "../data";

export function EducationTimeline() {
  return (
    <Timeline
      data={educationData.map((item) => ({
        id: item.id.toString(),
        period: item.period,
        description: [item.description],
        logo: item.logoUrl,
      }))}
    />

  );
}