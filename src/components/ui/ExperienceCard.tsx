import type { Role } from "@/types/portfolio";
import { Tag } from "@/components/ui/Tag";
import {
  OutlinedCard,
  OutlinedCardMeta,
  OutlinedCardPill,
  OutlinedCardTitle,
} from "@/components/ui/OutlinedCard";

export function ExperienceCard({ role }: { role: Role }) {
  return (
    <article className="relative">
      <span className="absolute -left-6 top-0 z-[1] h-3 w-3 rounded-full border-2 border-oatmeal bg-tangerine md:-left-8" />
      <OutlinedCard>
        <OutlinedCardPill>{role.dates}</OutlinedCardPill>
        <OutlinedCardTitle>{role.title}</OutlinedCardTitle>
        <OutlinedCardMeta>{role.company}</OutlinedCardMeta>
        <p className="mt-6 max-w-3xl text-[14px] leading-6 text-oatmeal/95">{role.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {role.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </OutlinedCard>
    </article>
  );
}
