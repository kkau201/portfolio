import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Tag } from "@/components/ui/Tag";
import { pikauCaseStudy as study } from "@/data/pikauCaseStudy";

export const metadata: Metadata = {
  title: "Pīkau — Kayla Kautai",
  description: study.overview,
};

function SectionKicker({
  index,
  title,
  light = false,
}: {
  index: string;
  title: string;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-display text-[40px] font-normal leading-none md:text-[32px] ${
        light ? "text-oatmeal" : "text-blueberry"
      }`}
    >
      <span className={light ? "text-oatmeal" : "text-tangerine"}>{index}/ </span>
      {title}
    </h2>
  );
}

export default function PikauCaseStudyPage() {
  return (
    <main className="text-left [&_.page-wrap]:max-w-[70rem]">
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
              {study.title}
            </h1>
            <p className="mt-4 text-2xl font-medium text-blueberry">{study.subtitle}</p>
            <p className="mt-6 max-w-[41rem] leading-normal text-blueberry">{study.overview}</p>
          </div>

          <aside className="rounded-[20px] border-4 border-lime px-8 py-8">
            <p className="font-semibold text-tangerine">Timeline</p>
            <p className="mt-1 text-blueberry">{study.facts.timeline}</p>
            <p className="mt-4 font-semibold text-tangerine">Role</p>
            <p className="mt-1 text-blueberry">{study.facts.role}</p>
            <p className="mt-4 font-semibold text-tangerine">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.facts.stack.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-12">
              <ButtonLink href={study.repoHref} variant="outline" external>
                {study.repoLabel}
              </ButtonLink>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-tangerine text-oatmeal">
        <div className="page-wrap py-16 md:py-[4.5rem]">
          <SectionKicker index="01" title="The Challenge" light />
          <p className="mt-8 max-w-[70rem] leading-normal">{study.challenge}</p>
        </div>
      </section>

      <section className="page-wrap py-16 md:py-20">
        <SectionKicker index="02" title="Approach" />
        <p className="mt-6 max-w-[73rem] leading-normal text-blueberry">{study.approachIntro}</p>
        <div className="mt-6 max-w-[73rem] space-y-6">
          {study.approach.map((block) => (
            <div key={block.title}>
              <h3 className="text-xl font-medium text-tangerine">{block.title}</h3>
              <p className="mt-1 leading-normal text-blueberry">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="page-wrap flex justify-center pb-16 md:pb-20">
        <ButtonLink href={study.next.href} variant="outline">
          {study.next.label} <Icon name="right" className="size-6" />
        </ButtonLink>
      </div>
    </main>
  );
}
