import type { Metadata } from "next";
import { AppSlides } from "@/components/case-study/AppSlides";
import { CaseStudyBlocks } from "@/components/case-study/CaseStudyBlocks";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { OutcomesBanner } from "@/components/case-study/OutcomesBanner";
import { PipelineDiagram } from "@/components/case-study/PipelineDiagram";
import { puioioCaseStudy as study } from "@/data/puioioCaseStudy";

export const metadata: Metadata = {
  title: "Pūioio — Kayla Kautai",
  description: study.overview,
};

export default function PuioioCaseStudyPage() {
  return (
    <CaseStudyLayout next={study.next}>
      <CaseStudyHero
        title={study.title}
        subtitle={study.subtitle}
        overview={study.overview}
        facts={study.facts}
        cta={{ href: study.paperHref, label: study.paperLabel, external: true }}
      />

      <CaseStudySection index="01" title="The Challenge" intro={study.challenge} invert />

      <CaseStudySection index="02" title="Architecture & Pipeline" intro={study.architectureIntro}>
        <PipelineDiagram />
      </CaseStudySection>

      <CaseStudySection index="03" title="Mobile Application Development" intro={study.appIntro} flushTop>
        <AppSlides />
      </CaseStudySection>

      <CaseStudySection index="04" title="Optimising the On-Device Pipeline" flushTop>
        <CaseStudyBlocks blocks={study.pipeline} />
      </CaseStudySection>

      <CaseStudySection index="05" title="Outcomes & Impact" invert>
        <OutcomesBanner outcomes={study.outcomes} />
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
