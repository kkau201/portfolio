import Link from "next/link";
import type { FeaturedProject } from "@/types/portfolio";
import { AssetImage } from "@/components/ui/AssetImage";
import { Tag } from "@/components/ui/Tag";
import { ViewLink } from "@/components/ui/Button";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  href?: string;
  priority?: boolean;
}

export function FeaturedProjectCard({ project, href, priority = false }: FeaturedProjectCardProps) {
  const ctaLabel = project.ctaLabel ?? "View case study";
  const isExternal = Boolean(href?.startsWith("http"));
  const cardClass = `project-card rounded-[28px] border-lime border-4 text-left ${
    href ? "group/arrow cursor-pointer" : ""
  }`;

  const inner = (
    <div className="grid gap-6 rounded-[23px] p-5 sm:p-6 md:grid-cols-2 md:items-stretch md:gap-8 md:p-7">
      <div className="project-card-media h-[240px] overflow-hidden rounded-[18px] md:h-full md:min-h-[380px]">
        <AssetImage
          src={project.img}
          alt={project.title}
          fill
          priority={priority}
          sizes="(min-width: 760px) 50vw, 100vw"
          className="h-full w-full max-w-none object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="flex h-full flex-col items-start md:py-1">
        <p className="inline-flex rounded-full bg-strawberry/25 px-3 py-1 text-[12px] font-normal leading-none text-tangerine">
          {project.kicker}
        </p>
        <h3 className="mt-4 font-display text-[32px] font-normal leading-none text-blueberry md:text-[36px]">
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-6 text-blueberry">{project.desc}</p>
        {project.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2 md:mt-auto md:pt-8">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
        {href ? (
          <div className="mt-5">
            <ViewLink>{ctaLabel}</ViewLink>
          </div>
        ) : null}
      </div>
    </div>
  );

  if (href) {
    const linkClass = `${cardClass} block no-underline hover:no-underline focus-ring`;
    const ariaLabel = `${ctaLabel}: ${project.title}`;

    return (
      <article>
        {isExternal ? (
          <a
            href={href}
            className={linkClass}
            aria-label={ariaLabel}
            target="_blank"
            rel="noreferrer"
          >
            {inner}
          </a>
        ) : (
          <Link href={href} className={linkClass} aria-label={ariaLabel}>
            {inner}
          </Link>
        )}
      </article>
    );
  }

  return <article className={cardClass}>{inner}</article>;
}
