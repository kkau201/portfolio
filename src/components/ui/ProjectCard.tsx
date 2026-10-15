import type { ArchiveProject } from "@/types/portfolio";
import { AssetImage } from "@/components/ui/AssetImage";

interface ProjectCardProps {
  project: ArchiveProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card rounded-[28px] bg-strawberry p-0.5 text-left shadow-card">
      <div className="grid overflow-hidden rounded-[26px] bg-oatmeal md:grid-cols-2 md:items-stretch">
        <div className="project-card-media min-h-[240px] md:h-full md:min-h-[280px]">
          <AssetImage
            src={project.img}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full max-w-none object-cover object-[center_70%]"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blueberry/70">
            {project.year}
          </p>
          <h3 className="mt-1 font-display text-3xl font-normal text-blueberry">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-blueberry">{project.desc}</p>
        </div>
      </div>
    </article>
  );
}
