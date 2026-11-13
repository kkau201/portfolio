import type { Metadata } from "next";
import { CaseStudyBento } from "@/components/case-study/CaseStudyBento";
import { CaseStudyBlocks } from "@/components/case-study/CaseStudyBlocks";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { OutlineBanner } from "@/components/case-study/OutcomesBanner";
import { PikauArchitectureGraph } from "@/components/case-study/PikauArchitectureGraph";
import { pikauCaseStudy as study } from "@/data/pikauCaseStudy";

export const metadata: Metadata = {
  title: "Pīkau | Kayla Kautai",
  description: study.overview,
  alternates: {
    canonical: "/projects/pikau",
  },
  openGraph: {
    title: "Pīkau | Kayla Kautai",
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

      <CaseStudySection index="02" title="Architecture" intro={study.architectureIntro}>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-14">
          <PikauArchitectureGraph />
          <CaseStudyBlocks className="mt-0 lg:pt-1" blocks={study.architecture} />
        </div>
      </CaseStudySection>

      <CaseStudySection index="03" title="Design" intro={study.bentoIntro}>
        <CaseStudyBento cards={study.bento} />
      </CaseStudySection>

      <CaseStudySection index="04" title="Quality" intro={study.qualityIntro}>
        <CaseStudyBlocks blocks={study.quality} />
      </CaseStudySection>

      <CaseStudySection index="05" title="Next" intro={study.nextIntro} invert>
        <OutlineBanner items={study.nextSteps} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
