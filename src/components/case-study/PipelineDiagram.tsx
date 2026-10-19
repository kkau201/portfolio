"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AssetImage } from "@/components/ui/AssetImage";
import { puioioCaseStudy } from "@/data/puioioCaseStudy";
import styles from "./PipelineDiagram.module.css";

const steps = puioioCaseStudy.architectureSteps;

function Arrow({
  area,
  src,
  className = "",
}: {
  area: string;
  src: string;
  className?: string;
}) {
  return (
    <div className={`${styles.puioioArrow} ${className}`} style={{ gridArea: area }} aria-hidden="true">
      <AssetImage src={src} alt="" />
    </div>
  );
}

function StepCard({
  n,
  title,
  body,
}: {
  n: number;
  title: string;
  body: string;
}) {
  return (
    <div className="w-full max-w-[23rem] rounded-[10px] bg-lime px-6 py-8 text-left text-blueberry shadow-[0_12px_32px_rgba(70,90,225,0.12)]">
      <div className="flex items-center gap-3">
        <span className="relative flex size-[41px] shrink-0 items-center justify-center">
          <AssetImage
            src="/img/projects/puioio/step-dot.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0"
          />
          <span className="relative font-semibold text-white">{n}</span>
        </span>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-normal">{body}</p>
    </div>
  );
}

function StepButton({
  n,
  area,
  label,
  onMouseEnter,
  onMouseLeave,
}: {
  n: number;
  area: string;
  label: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      data-n={n}
      className={`${styles.puioioNode} ${styles.puioioNodeStep}`}
      style={{ gridArea: area }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseLeave}
    >
      <span className={styles.puioioStep}>
        <AssetImage src="/img/projects/puioio/step-dot.svg" alt="" aria-hidden="true" />
        <span>{n}</span>
      </span>
      {label}
    </div>
  );
}

export function PipelineDiagram() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className={styles.puioioFlowWrap}>
      <ol className="space-y-3 lg:hidden">
        {steps.map((item) => (
          <li key={item.n} className="flex justify-center">
            <StepCard n={item.n} title={item.title} body={item.body} />
          </li>
        ))}
      </ol>

      <div className={`${styles.pipelineStage} relative hidden lg:block`}>
        <div className={styles.puioioFlow}>
          <div className={styles.puioioNode} style={{ gridArea: "current" }}>
            Current Image
          </div>
          <Arrow area="a1" src="/img/projects/puioio/arrow-1.svg" />
          <StepButton
            n={1}
            area="pose"
            label="Pose Detection"
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
          />
          <Arrow area="a2" src="/img/projects/puioio/arrow-5.svg" />
          <StepButton
            n={2}
            area="thresh"
            label="Thresholding"
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
          />
          <Arrow area="diagDown" src="/img/projects/puioio/arrow-8.svg" className={styles.isDiagDown} />
          <Arrow area="vline" src="/img/projects/puioio/arrow-2.svg" className={styles.isVert} />
          <Arrow area="diagOpt" src="/img/projects/puioio/arrow-4.svg" className={styles.isDiagOpt} />
          <div className={styles.puioioNode} style={{ gridArea: "prev" }}>
            Previous Image
          </div>
          <Arrow area="a4" src="/img/projects/puioio/arrow-1.svg" />
          <StepButton
            n={3}
            area="optical"
            label="Optical Flow"
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
          />
          <Arrow area="long" src="/img/projects/puioio/arrow-6.svg" className={styles.isLong} />
          <StepButton
            n={4}
            area="state"
            label="State Machine"
            onMouseEnter={() => setHoveredStep(4)}
            onMouseLeave={() => setHoveredStep(null)}
          />
          <Arrow area="a6" src="/img/projects/puioio/arrow-5.svg" />
          <StepButton
            n={5}
            area="counter"
            label="Counter"
            onMouseEnter={() => setHoveredStep(5)}
            onMouseLeave={() => setHoveredStep(null)}
          />
        </div>

        <AnimatePresence>
          {steps.map((item) => (
            <motion.div
              key={item.n}
              data-card={item.n}
              className={`${styles.pipelineCard} ${hoveredStep === item.n ? styles.isVisible : ""}`}
              role="tooltip"
              initial={false}
            >
              <StepCard n={item.n} title={item.title} body={item.body} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
