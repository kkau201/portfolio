import type { Metadata } from "next";
import { CaseStudyBlocks } from "@/components/case-study/CaseStudyBlocks";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { pikauCaseStudy as study } from "@/data/pikauCaseStudy";

export const metadata: Metadata = {
  title: "Pīkau — Kayla Kautai",
  description: study.overview,
  alternates: {
    canonical: "/projects/pikau",
  },
  openGraph: {
    title: "Pīkau — Kayla Kautai",
    description: study.overview,
    url: "/projects/pikau",
    type: "article",
  },
};

export default function PikauCaseStudyPage() {
  return (
    <CaseStudyLayout next={study.next}>
      <CaseStudyHero
        title={study.title}
        subtitle={study.subtitle}
        overview={study.overview}
        facts={study.facts}
        cta={{ href: study.repoHref, label: study.repoLabel, external: true }}
      />

      <CaseStudySection index="01" title="The Challenge" intro={study.challenge} invert />

      <CaseStudySection index="02" title="Approach" intro={study.approachIntro}>
        <CaseStudyBlocks blocks={study.approach} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
