"use client";

import { useRef } from "react";
import { hero } from "@/data/portfolioData";
import { HeroBadges } from "@/components/sections/HeroBadges";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const constraintsRef = useRef<HTMLElement>(null);

  return (
    <>
      <section
        ref={constraintsRef}
        aria-labelledby="hero-heading"
        className="page-wrap relative grid items-center gap-10 overflow-visible pb-16 pt-6 sm:pb-20 sm:pt-8 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:pb-24 md:pt-10 lg:pb-28 lg:pt-12"
      >
        <div className="text-left">
          <p className="text-[22px] font-bold italic text-blueberry">{hero.greeting}</p>
          <h1
            id="hero-heading"
            className="mt-1 font-display text-[52px] font-normal leading-[0.95] tracking-tight text-blueberry md:text-[64px]"
          >
            {hero.name}
          </h1>
          <p className="mt-2 font-display text-[28px] font-normal leading-none text-tangerine md:text-[34px]">
            {hero.role}
          </p>
          {hero.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-5 max-w-[34rem] text-[15px] leading-6 text-blueberry last:mt-4"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <HeroBadges constraintsRef={constraintsRef} />
      </section>

      <div className="flex justify-center pb-10 sm:pb-12 md:pb-16">
        <a
          href="#about"
          className="group/arrow focus-ring inline-flex rounded-sm text-tangerine"
          aria-label="Scroll to about"
        >
          <Icon
            name="down"
            className="size-8 motion-safe:group-hover/arrow:animate-arrow-nudge motion-safe:group-focus-visible/arrow:animate-arrow-nudge"
          />
        </a>
      </div>
    </>
  );
}
