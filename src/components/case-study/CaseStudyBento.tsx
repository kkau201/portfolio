"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AssetImage } from "@/components/ui/AssetImage";
import { arapeyItalic, nanumMyeongjo } from "@/fonts/inkle";
import { afacadFlux } from "@/fonts/pikau";
import { withBasePath } from "@/lib/paths";

export interface BentoCard {
  title: string;
  body: string;
  tone: "lime" | "tangerine" | "blueberry" | "guava" | "strawberry" | "oatmeal";
  layout: "tall" | "wide" | "span3" | "span4" | "span5" | "span5short" | "span6";
  column?: "left" | "right";
  grow?: boolean;
  chips?: readonly string[];
  swatches?: readonly { name: string; hex: string }[];
  specimens?: readonly {
    sample: string;
    label: string;
    size?: "display" | "body";
    face?: "nanum" | "arapey" | "afacad";
  }[];
  icons?: readonly { src: string; alt: string; label: string }[];
  video?: {
    src: string;
    alt: string;
    poster?: string;
    /** Media width. Defaults to md. */
    size?: "sm" | "md" | "lg" | "xl" | "full";
    /** Place media beside, above, or below the copy. Defaults to below. */
    align?: "beside" | "above" | "below";
    /** When false, skips the lift animation, drop shadow, and outline. Defaults to true. */
    hoverable?: boolean;
  };
  image?: {
    src: string;
    alt: string;
    rotate?: number;
    /** phone = framed screenshot; card/panel = uncropped UI section */
    fit?: "phone" | "card" | "panel";
    /** Media width. Defaults: phone/card md, panel lg. */
    size?: "sm" | "md" | "lg" | "xl" | "full";
    /**
     * Place media beside, above, or below the copy.
     * Phone screenshots default to a corner overlay unless align is set.
     * Card/panel default to below.
     */
    align?: "beside" | "above" | "below";
    /** When false, skips the lift animation and drop shadow. Defaults to true. */
    hoverable?: boolean;
  };
}

type MediaSize = NonNullable<NonNullable<BentoCard["image"]>["size"]>;
type MediaAlign = NonNullable<NonNullable<BentoCard["image"]>["align"]>;

const panelWidthClass: Record<MediaSize, string> = {
  sm: "w-[min(100%,16rem)]",
  md: "w-[min(100%,22rem)]",
  lg: "w-[min(100%,28rem)]",
  xl: "w-[min(100%,34rem)]",
  full: "w-full",
};

const phoneWidthClass: Record<MediaSize, string> = {
  sm: "w-[min(32%,10rem)]",
  md: "w-[min(40%,12.5rem)]",
  lg: "w-[min(58%,17rem)]",
  xl: "w-[min(68%,20rem)]",
  full: "w-[min(75%,22rem)]",
};

function resolveMediaSize(
  size: MediaSize | undefined,
  fit: NonNullable<BentoCard["image"]>["fit"],
): MediaSize {
  if (size) return size;
  return fit === "panel" ? "lg" : "md";
}

function resolveMediaAlign(card: BentoCard): MediaAlign | "overlay" | null {
  if (card.video) return card.video.align ?? "below";
  if (!card.image) return null;
  if (card.image.align) return card.image.align;
  if (!card.image.fit || card.image.fit === "phone") return "overlay";
  return "below";
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
  tall: "min-h-[32rem] md:col-span-2 lg:col-span-5 lg:row-span-2",
  wide: "min-h-[28rem] md:col-span-2 lg:col-span-7",
  span3: "min-h-[18rem] lg:col-span-3",
  span4: "min-h-[24rem] lg:col-span-4",
  span5: "min-h-[28rem] md:col-span-2 lg:col-span-5",
  span5short: "self-start md:col-span-2 lg:col-span-5",
  span6: "min-h-[18rem] lg:col-span-6",
};

function specimenClass(specimen: NonNullable<BentoCard["specimens"]>[number]) {
  const size =
    specimen.size === "body"
      ? "text-[16px] leading-6"
      : "text-4xl font-semibold leading-none md:text-5xl";
  if (specimen.face === "nanum") {
    return `${nanumMyeongjo.className} ${size} tracking-[-0.024em]`;
  }
  if (specimen.face === "arapey") {
    return `${arapeyItalic.className} italic ${size}`;
  }
  if (specimen.face === "afacad") {
    const weight = specimen.size === "body" ? "font-normal" : "font-semibold";
    return `${afacadFlux.className} ${weight} ${size}`;
  }
  return size;
}

const stackedLayoutClass: Record<BentoCard["layout"], string> = {
  tall: "min-h-[32rem]",
  wide: "min-h-[28rem]",
  span3: "min-h-[18rem]",
  span4: "min-h-[24rem]",
  span5: "min-h-[28rem]",
  span5short: "w-full",
  span6: "min-h-[18rem]",
};

export function CaseStudyBento({ cards }: { cards: readonly BentoCard[] }) {
  const reduceMotion = useReducedMotion();
  const groupedCards = cards.filter((card) => card.column);
  const restCards = cards.filter((card) => !card.column);

  const renderCard = (card: BentoCard, index: number, stacked = false) => (
    <BentoArticle
      key={card.title}
      card={card}
      index={index}
      stacked={stacked}
      reduceMotion={Boolean(reduceMotion)}
    />
  );

  const groupedSection =
    groupedCards.length > 0 ? (
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-stretch">
        <div className="flex flex-col gap-4 max-lg:contents">
          {groupedCards
            .filter((card) => card.column !== "right")
            .map((card) => renderCard(card, cards.indexOf(card), true))}
        </div>
        <div className="flex min-h-0 w-full flex-col gap-4 lg:h-full max-lg:contents">
          {groupedCards
            .filter((card) => card.column === "right")
            .map((card) => renderCard(card, cards.indexOf(card), true))}
        </div>
      </div>
    ) : null;

  const gridSection =
    restCards.length > 0 ? (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {restCards.map((card) => renderCard(card, cards.indexOf(card)))}
      </div>
    ) : null;

  return (
    <div className="mt-10 flex flex-col gap-4">
      {groupedSection}
      {gridSection}
    </div>
  );
}

function BentoArticle({
  card,
  index,
  stacked,
  reduceMotion,
}: {
  card: BentoCard;
  index: number;
  stacked: boolean;
  reduceMotion: boolean;
}) {
  const align = resolveMediaAlign(card);
  const isPhoneOverlay = align === "overlay";
  const phoneSize = card.image
    ? resolveMediaSize(card.image.size, card.image.fit ?? "phone")
    : "md";

  const copy = (
    <div
      className={`relative z-[1] ${
        isPhoneOverlay
          ? ["lg", "xl", "full"].includes(phoneSize)
            ? "max-w-[min(18rem,calc(100%-12rem))]"
            : "max-w-[min(18rem,calc(100%-9rem))]"
          : align === "beside"
            ? "min-w-0 flex-1 max-w-md"
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
  );

  const extras = (
    <>
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
              <p className={specimenClass(specimen)}>{specimen.sample}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide opacity-70">
                {specimen.label}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {card.icons?.length ? (
        <ul className="relative z-[1] mt-6 flex flex-wrap gap-4">
          {card.icons.map((icon) => (
            <li key={icon.src} className="min-w-[7.5rem] flex-1">
              <AssetImage
                src={icon.src}
                alt={icon.alt}
                width={512}
                height={512}
                eager
                className="aspect-square h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(70,90,225,0.18)]"
              />
              <p className="mt-2 text-xs font-medium uppercase tracking-wide opacity-70">
                {icon.label}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  const media = (
    <BentoMedia card={card} align={align} reduceMotion={reduceMotion} />
  );

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[28px] p-7 md:p-8 ${toneClass[card.tone]} ${
        stacked ? `${stackedLayoutClass[card.layout]} w-full` : layoutClass[card.layout]
      } ${card.grow ? "lg:flex-1" : ""} ${
        stacked ? ["max-lg:order-1", "max-lg:order-2", "max-lg:order-3", "max-lg:order-4"][index] : ""
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.05, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {align === "beside" ? (
        <div className="relative z-[1] flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            {copy}
            {extras}
          </div>
          {media}
        </div>
      ) : align === "above" ? (
        <>
          {media}
          <div className="mt-6">
            {copy}
            {extras}
          </div>
        </>
      ) : (
        <>
          {copy}
          {extras}
          {media}
        </>
      )}
    </motion.article>
  );
}

function BentoMedia({
  card,
  align,
  reduceMotion,
}: {
  card: BentoCard;
  align: MediaAlign | "overlay" | null;
  reduceMotion: boolean;
}) {
  if (!align) return null;

  const hoverable = (card.video ?? card.image)?.hoverable !== false;
  const liftClass = hoverable
    ? "transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1.5"
    : "";
  const frameClass = hoverable ? "shadow-card ring-1 ring-blueberry/10" : "";

  if (card.video) {
    const spacing =
      align === "below" ? "mt-6" : align === "beside" ? "shrink-0 self-start" : "";
    return (
      <div
        className={`pointer-events-none relative z-[1] ${
          panelWidthClass[resolveMediaSize(card.video.size, "card")]
        } ${spacing} ${liftClass}`}
      >
        <div className={`overflow-hidden rounded-[20px] ${frameClass}`}>
          <video
            src={withBasePath(card.video.src)}
            poster={card.video.poster ? withBasePath(card.video.poster) : undefined}
            aria-label={card.video.alt}
            autoPlay={!reduceMotion}
            muted
            loop={!reduceMotion}
            playsInline
            preload="metadata"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    );
  }

  if (!card.image) return null;

  if (align === "overlay") {
    return (
      <div
        className={`pointer-events-none absolute bottom-5 right-5 ${
          phoneWidthClass[resolveMediaSize(card.image.size, "phone")]
        } ${liftClass}`}
      >
        <div
          className={`w-full overflow-hidden rounded-[24px] ${frameClass}`}
          style={{
            aspectRatio: "9 / 19.5",
            transform: `rotate(${card.image.rotate ?? 0}deg) ${
              card.image.rotate ? "scale(0.94)" : ""
            }`,
          }}
        >
          <AssetImage
            src={card.image.src}
            alt={card.image.alt}
            width={412}
            height={917}
            eager
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  const isPhone = !card.image.fit || card.image.fit === "phone";
  const spacing =
    align === "below" ? "mt-6" : align === "beside" ? "shrink-0 self-start" : "";
  const widthClass = isPhone
    ? phoneWidthClass[resolveMediaSize(card.image.size, "phone")]
    : panelWidthClass[resolveMediaSize(card.image.size, card.image.fit)];

  return (
    <div className={`pointer-events-none relative z-[1] ${widthClass} ${spacing} ${liftClass}`}>
      <div
        className={`overflow-hidden ${isPhone ? "rounded-[24px]" : "rounded-[20px]"} ${frameClass}`}
        style={{
          aspectRatio: isPhone ? "9 / 19.5" : undefined,
          transform: card.image.rotate
            ? `rotate(${card.image.rotate}deg) scale(${isPhone ? "0.94" : "0.97"})`
            : undefined,
        }}
      >
        <AssetImage
          src={card.image.src}
          alt={card.image.alt}
          width={isPhone ? 412 : 960}
          height={isPhone ? 917 : 720}
          eager
          className={
            isPhone ? "h-full w-full object-cover object-top" : "h-auto w-full object-contain"
          }
        />
      </div>
    </div>
  );
}
