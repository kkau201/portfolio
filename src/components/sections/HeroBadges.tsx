"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { hero } from "@/data/portfolioData";
import { AssetImage } from "@/components/ui/AssetImage";
import { withBasePath } from "@/lib/paths";

type HeroBadge = (typeof hero.badges)[number];

function peelStyle(x: number, y: number, index: number) {
  const right = x >= 50;
  const below = y >= 48;
  const twist = 5 + (index % 3);

  return {
    ["--peel-origin-x" as string]: right ? "18%" : "82%",
    ["--peel-origin-y" as string]: below ? "18%" : "82%",
    ["--peel-rot" as string]: `${right ? -twist : twist}deg`,
    ["--peel-rx" as string]: `${below ? -13 : 13}deg`,
    ["--peel-ry" as string]: `${right ? -12 : 12}deg`,
    ["--peel-tx" as string]: `${right ? 5 : -5}px`,
    ["--peel-ty" as string]: `${below ? 5 : -6}px`,
    ["--peel-sx" as string]: `${right ? 12 : -12}px`,
    ["--peel-sy" as string]: `${below ? 15 : 8}px`,
  };
}

const dragSpring = { type: "spring" as const, stiffness: 300, damping: 20 };

const whileDragMotion = {
  scale: 1.15,
  rotate: 6,
  cursor: "grabbing",
};

interface HeroBadgesProps {
  constraintsRef: RefObject<HTMLElement | null>;
}

interface DraggableBadgeProps {
  badge: HeroBadge;
  index: number;
  constraintsRef: RefObject<HTMLElement | null>;
  resetId: number;
}

function useHeroDragBounds(
  sectionRef: RefObject<HTMLElement | null>,
  layoutRef: RefObject<HTMLElement | null>,
) {
  const [bounds, setBounds] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const layout = layoutRef.current;
      if (!section || !layout) return;

      const sectionBox = section.getBoundingClientRect();
      const layoutBox = layout.getBoundingClientRect();
      const header = document.getElementById("site-header");
      const headerBottom = header?.getBoundingClientRect().bottom ?? sectionBox.top;
      const topEdge = Math.max(sectionBox.top, headerBottom);

      setBounds({
        left: sectionBox.left - layoutBox.left,
        right: sectionBox.right - layoutBox.right,
        top: topEdge - layoutBox.top,
        bottom: sectionBox.bottom - layoutBox.bottom,
      });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [sectionRef]);

  return bounds;
}

function DraggableBadge({ badge, index, constraintsRef, resetId }: DraggableBadgeProps) {
  const reduceMotion = useReducedMotion();
  const layoutRef = useRef<HTMLDivElement>(null);
  const dragBounds = useHeroDragBounds(constraintsRef, layoutRef);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [rested, setRested] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (resetId === 0) return;
    setRested(false);
    setDragging(false);
    if (reduceMotion) {
      x.set(0);
      y.set(0);
      return;
    }
    const snap = { type: "spring" as const, stiffness: 420, damping: 28 };
    animate(x, 0, snap);
    animate(y, 0, snap);
  }, [resetId, reduceMotion, x, y]);

  return (
    <div
      ref={layoutRef}
      className="pointer-events-none absolute aspect-square"
      style={{
        left: `calc(${badge.x}% - ${badge.w / 2}%)`,
        top: `calc(${badge.y}% - ${badge.w / 2}%)`,
        width: `${badge.w}%`,
        zIndex: dragging ? 18 : rested ? 16 : 2,
      }}
    >
    <motion.div
      className={`hero-badge-drag relative h-full w-full select-none ${
        dragging ? "is-dragging" : ""
      }`}
      style={{ x, y }}
      drag
      dragConstraints={dragBounds}
      dragElastic={0}
      dragMomentum={false}
      dragSnapToOrigin={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      animate={{ scale: 1, rotate: 0 }}
      whileDrag={reduceMotion ? { cursor: "grabbing" } : whileDragMotion}
      transition={dragSpring}
      onDragStart={() => {
        setRested(true);
        setDragging(true);
      }}
      onDragEnd={() => {
        setDragging(false);
      }}
      aria-label={`Move ${badge.alt} sticker`}
      role="button"
    >
      <div
        className={`hero-badge-float relative h-full w-full${rested ? " is-rested" : ""}`}
        style={{
          ["--float-x" as string]: `${badge.amp}px`,
          ["--float-y" as string]: `${Math.round(badge.amp * 0.85)}px`,
          ["--float-dur" as string]: `${((Math.PI * 2) / badge.speed).toFixed(2)}s`,
          ["--float-delay" as string]: `${badge.phase}s`,
        }}
      >
        <div
          className={`hero-sticker${dragging ? " is-dragging" : ""}`}
          style={peelStyle(badge.x, badge.y, index)}
        >
          <div
            className="hero-sticker-face"
            style={{
              ["--badge-mask" as string]: `url("${withBasePath(`/img/badges/${badge.file}`)}")`,
            }}
          >
            <AssetImage
              src={`/img/badges/${badge.file}`}
              alt=""
              aria-hidden="true"
              draggable={false}
              fill
              sizes="20vw"
              className="pointer-events-none max-w-none object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export function HeroBadges({ constraintsRef }: HeroBadgesProps) {
  const { badges, avatar } = hero;
  const [resetId, setResetId] = useState(0);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[540px] overflow-visible md:translate-x-4"
      aria-label="Kayla illustrated with skill stickers"
    >
      {badges.map((badge, index) => (
        <DraggableBadge
          key={badge.alt}
          badge={badge}
          index={index}
          constraintsRef={constraintsRef}
          resetId={resetId}
        />
      ))}
      <button
        type="button"
        className="focus-ring absolute left-1/2 top-[48%] z-[17] w-[52%] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full"
        aria-label="Reset skill stickers"
        onClick={() => setResetId((count) => count + 1)}
      >
        <AssetImage
          src={avatar.src}
          alt={avatar.alt}
          width={306}
          height={306}
          draggable={false}
          className="pointer-events-none h-auto w-full object-contain"
          priority
        />
      </button>
    </div>
  );
}
