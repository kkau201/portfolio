import Image from "next/image";
import type { FeaturedProject } from "@/types/portfolio";
import { Tag } from "@/components/ui/Tag";
import { ViewLink } from "@/components/ui/Button";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="rounded-[28px] bg-strawberry p-[3px] text-left">
      <div className="grid overflow-hidden rounded-[25px] bg-oatmeal md:grid-cols-2 md:items-stretch">
        <div className="relative h-[260px] overflow-hidden md:h-full md:min-h-[300px]">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full max-w-none object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-7 md:px-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-blueberry/55">
            {project.kicker}
          </p>
          <h3 className="mt-1 font-display text-[32px] font-normal leading-none text-blueberry">
            {project.title}
          </h3>
          <p className="mt-3 text-[14px] leading-6 text-blueberry">{project.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="mt-5">
            <ViewLink href="/projects">View case study</ViewLink>
          </div>
        </div>
      </div>
    </article>
  );
}
