import type { Education } from "@/types/portfolio";
import {
  OutlinedCard,
  OutlinedCardMeta,
  OutlinedCardPill,
  OutlinedCardTitle,
} from "@/components/ui/OutlinedCard";

export function EducationCard({ education }: { education: Education }) {
  return (
    <OutlinedCard>
      <OutlinedCardPill>{education.dates}</OutlinedCardPill>
      <OutlinedCardTitle as="h4" className="text-[22px] md:text-[24px]">
        {education.title}
      </OutlinedCardTitle>
      <OutlinedCardMeta>{education.institution}</OutlinedCardMeta>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-[14px] leading-6 text-oatmeal/95 marker:text-oatmeal">
        {education.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </OutlinedCard>
  );
}
