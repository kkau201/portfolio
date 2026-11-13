"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AssetImage } from "@/components/ui/AssetImage";

export interface BentoCard {
  title: string;
  body: string;
  tone: "lime" | "tangerine" | "blueberry" | "guava" | "strawberry" | "oatmeal";
  layout: "tall" | "wide" | "span3" | "span4" | "span5" | "span6";
  chips?: readonly string[];
  swatches?: readonly { name: string; hex: string }[];
  specimens?: readonly { sample: string; label: string; size?: "display" | "body" }[];
  image?: {
    src: string;
    alt: string;
    rotate?: number;
  };
}

const toneClass: Record<BentoCard["tone"], string> = {
  lime: "bg-lime text-blueberry",
  tangerine: "bg-tangerine text-oatmeal",
  blueberry: "bg-blueberry text-oatmeal",
  guava: "bg-guava text-blueberry",
  strawberry: "bg-strawberry text-oatmeal",
  oatmeal: "bg-oatmeal text-blueberry ring-1 ring-blueberry/10",
};

const layoutClass: Record<BentoCard["layout"], string> = {
  tall: "min-h-[28rem] md:col-span-2 lg:col-span-5 lg:row-span-2",
  wide: "min-h-[22rem] md:col-span-2 lg:col-span-7",
  span3: "min-h-[18rem] lg:col-span-3",
  span4: "min-h-[18rem] lg:col-span-4",
  span5: "min-h-[18rem] md:col-span-2 lg:col-span-5",
  span6: "min-h-[18rem] lg:col-span-6",
};

export function CaseStudyBento({ cards }: { cards: readonly BentoCard[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      {cards.map((card, index) => (
        <motion.article
          key={card.title}
          className={`group relative overflow-hidden rounded-[28px] p-7 md:p-8 ${toneClass[card.tone]} ${layoutClass[card.layout]}`}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.45,
            delay: Math.min(index * 0.05, 0.28),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className={`relative z-[1] ${
              card.image
                ? card.layout === "tall" || card.layout === "wide"
                  ? "max-w-[18rem]"
                  : "max-w-[10.5rem]"
                : "max-w-md"
            }`}
          >
            <h3 className="font-display text-[28px] font-normal leading-none md:text-[32px]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-normal opacity-90 md:text-[15px]">{card.body}</p>
            {card.chips?.length ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full bg-oatmeal/90 px-3 py-1 text-xs font-medium text-blueberry"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {card.swatches?.length ? (
            <ul className="relative z-[1] mt-6 flex flex-wrap gap-3">
              {card.swatches.map((swatch) => (
                <li key={swatch.hex} className="min-w-[6.5rem] flex-1">
                  <div
                    className="h-16 rounded-[16px] ring-1 ring-blueberry/10 transition-transform duration-200 motion-safe:hover:scale-[1.04]"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <p className="mt-2 text-sm font-medium">{swatch.name}</p>
                  <p className="text-xs uppercase tracking-wide opacity-70">{swatch.hex}</p>
                </li>
              ))}
            </ul>
          ) : null}
          {card.specimens?.length ? (
            <ul className="relative z-[1] mt-6 space-y-4">
              {card.specimens.map((specimen) => (
                <li key={specimen.label}>
                  <p
                    className={
                      specimen.size === "body"
                        ? "text-[16px] leading-6"
                        : "text-4xl font-semibold leading-none md:text-5xl"
                    }
                  >
                    {specimen.sample}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide opacity-70">
                    {specimen.label}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
          {card.image ? (
            <div
              className={`${
                card.layout === "wide"
                  ? "pointer-events-none absolute top-8 -right-5 w-[44%] max-w-[220px]"
                  : "pointer-events-none absolute -bottom-10 -right-8 w-[58%] max-w-[240px] sm:w-[48%]"
              } transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-2`}
            >
              <div
                className="overflow-hidden rounded-[24px] shadow-card ring-1 ring-blueberry/10"
                style={{ transform: `rotate(${card.image.rotate ?? 8}deg)` }}
              >
                <AssetImage
                  src={card.image.src}
                  alt={card.image.alt}
                  width={412}
                  height={917}
                  className="h-auto w-full object-top"
                />
              </div>
            </div>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
