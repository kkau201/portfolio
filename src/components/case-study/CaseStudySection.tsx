import type { ReactNode } from "react";
import { SectionKicker } from "@/components/case-study/SectionKicker";

interface CaseStudySectionProps {
  index: string;
  title: string;
  intro?: string;
  invert?: boolean;
  flushTop?: boolean;
  children?: ReactNode;
}

export function CaseStudySection({
  index,
  title,
  intro,
  invert = false,
  flushTop = false,
  children,
}: CaseStudySectionProps) {
  const introClass = invert
    ? "mt-8 max-w-[70rem] leading-normal"
    : "mt-6 max-w-[73rem] leading-normal text-blueberry";

  const body = (
    <>
      <SectionKicker index={index} title={title} light={invert} />
      {intro ? <p className={introClass}>{intro}</p> : null}
      {children}
    </>
  );

  if (invert) {
    return (
      <section className="bg-tangerine text-oatmeal">
        <div className="page-wrap py-16 md:py-[4.5rem]">{body}</div>
      </section>
    );
  }

  return (
    <section className={`page-wrap ${flushTop ? "pb-16 md:pb-20" : "py-16 md:py-20"}`}>
      {body}
    </section>
  );
}
