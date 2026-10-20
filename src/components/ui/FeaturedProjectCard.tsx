import Link from "next/link";
import type { FeaturedProject, ProjectCta } from "@/types/portfolio";
import { AssetImage } from "@/components/ui/AssetImage";
import { Tag } from "@/components/ui/Tag";
import { ViewLink } from "@/components/ui/Button";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  href?: string;
  priority?: boolean;
}

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function FeaturedProjectCard({ project, href, priority = false }: FeaturedProjectCardProps) {
  const links: ProjectCta[] =
    project.links && project.links.length > 0
      ? project.links
      : href
        ? [{ label: project.ctaLabel ?? "View case study", href }]
        : [];
  const cardHref = links.length === 1 ? links[0].href : undefined;
  const cardClass = `project-card rounded-[28px] border-lime border-4 text-left ${
    cardHref ? "group/arrow cursor-pointer" : ""
  }`;

  const inner = (
    <div className="grid gap-6 rounded-[23px] p-5 sm:p-6 md:grid-cols-2 md:items-stretch md:gap-8 md:p-7">
      <div className="project-card-media h-[240px] overflow-hidden rounded-[18px] md:h-full md:min-h-[380px]">
        <AssetImage
          src={project.img}
          alt={project.imgAlt ?? `${project.title} project preview`}
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
        {links.length > 0 ? (
          <div className="mt-5 flex flex-row flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <ViewLink key={link.href} href={cardHref ? undefined : link.href}>
                {link.label}
              </ViewLink>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );

  if (cardHref) {
    const linkClass = `${cardClass} block no-underline hover:no-underline focus-ring`;
    const ariaLabel = `${links[0].label}: ${project.title}`;

    return (
      <article>
        {isExternalHref(cardHref) ? (
          <a
            href={cardHref}
            className={linkClass}
            aria-label={ariaLabel}
            target="_blank"
            rel="noreferrer"
          >
            {inner}
          </a>
        ) : (
          <Link href={cardHref} className={linkClass} aria-label={ariaLabel}>
            {inner}
          </Link>
        )}
      </article>
    );
  }

  return <article className={cardClass}>{inner}</article>;
}
