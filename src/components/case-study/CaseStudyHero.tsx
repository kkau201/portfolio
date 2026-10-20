import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  overview: string;
  facts: {
    timeline: string;
    role: string;
    stack: string[];
  };
  cta?: {
    href: string;
    label: string;
    external?: boolean;
  };
}

export function CaseStudyHero({ title, subtitle, overview, facts, cta }: CaseStudyHeroProps) {
  return (
    <div className="page-wrap pb-8 pt-4 md:pb-10 md:pt-6">
      <Link
        href="/projects"
        className="group/arrow focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-medium text-tangerine hover:opacity-80"
      >
        <span className="inline-flex motion-safe:group-hover/arrow:animate-arrow-nudge-left motion-safe:group-focus-visible/arrow:animate-arrow-nudge-left">
          <Icon name="right" className="size-4 rotate-180" />
        </span>
        RETURN TO ALL PROJECTS
      </Link>

      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
        <div>
          <h1 className="font-display text-[40px] font-normal leading-none text-blueberry md:text-[64px]">
            {title}
          </h1>
          <p className="mt-4 text-2xl font-medium text-blueberry">{subtitle}</p>
          <p className="mt-6 max-w-[41rem] leading-normal text-blueberry">{overview}</p>
        </div>

        <aside className="rounded-[20px] border-4 border-lime px-8 py-8">
          <p className="font-semibold text-tangerine">Timeline</p>
          <p className="mt-1 text-blueberry">{facts.timeline}</p>
          <p className="mt-4 font-semibold text-tangerine">Role</p>
          <p className="mt-1 text-blueberry">{facts.role}</p>
          <p className="mt-4 font-semibold text-tangerine">Stack</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {facts.stack.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {cta ? (
            <div className="mt-12">
              <ButtonLink href={cta.href} variant="outline" external={cta.external}>
                {cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
