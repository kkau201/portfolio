"use client";

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
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

function useDesktopDrag() {
  const [canDrag, setCanDrag] = useState(true);

  useEffect(() => {
    const touchOnly = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setCanDrag(!touchOnly.matches);
    update();
    touchOnly.addEventListener("change", update);
    return () => touchOnly.removeEventListener("change", update);
  }, []);

  return canDrag;
}

interface HeroBadgesProps {
  constraintsRef: RefObject<HTMLElement | null>;
}

interface DraggableBadgeProps {
  badge: HeroBadge;
  index: number;
  constraintsRef: RefObject<HTMLElement | null>;
  resetId: number;
  stageSize: number;
  canDrag: boolean;
}

function useHeroDragBounds(
  sectionRef: RefObject<HTMLElement | null>,
  layoutRef: RefObject<HTMLElement | null>,
) {
  const [bounds, setBounds] = useState<{
    left: number;
    right: number;
    top: number;
    bottom: number;
  } | false>(false);

  useEffect(() => {
    const layout = layoutRef.current;
    const update = () => {
      const section = sectionRef.current;
      const node = layoutRef.current;
      if (!section || !node) return;

      const sectionBox = section.getBoundingClientRect();
      const layoutBox = node.getBoundingClientRect();
      const header = document.getElementById("site-header");
      const headerBottom = header?.getBoundingClientRect().bottom ?? sectionBox.top;
      const topEdge = Math.max(sectionBox.top, headerBottom);

      const next = {
        left: sectionBox.left - layoutBox.left,
        right: sectionBox.right - layoutBox.right,
        top: topEdge - layoutBox.top,
        bottom: sectionBox.bottom - layoutBox.bottom,
      };

      if (next.left > next.right || next.top > next.bottom) {
        setBounds(false);
        return;
      }

      setBounds(next);
    };

    update();
    const observer = layout ? new ResizeObserver(update) : null;
    if (layout) {
      observer?.observe(layout);
    }
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [sectionRef, layoutRef]);

  return bounds;
}

function useElementSize(ref: RefObject<HTMLElement | null>) {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const measure = () => {
      const box = node.getBoundingClientRect();
      setSize(Math.round(Math.min(box.width, box.height)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function DraggableBadge({
  badge,
  index,
  constraintsRef,
  resetId,
  stageSize,
  canDrag,
}: DraggableBadgeProps) {
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

  const box = stageSize > 0 ? (stageSize * badge.w) / 100 : 0;

  return (
    <div
      ref={layoutRef}
      className="pointer-events-none absolute"
      style={{
        left: stageSize > 0 ? (stageSize * badge.x) / 100 - box / 2 : `calc(${badge.x}% - ${badge.w / 2}%)`,
        top: stageSize > 0 ? (stageSize * badge.y) / 100 - box / 2 : `calc(${badge.y}% - ${badge.w / 2}%)`,
        width: stageSize > 0 ? box : `${badge.w}%`,
        height: stageSize > 0 ? box : `${badge.w}%`,
        zIndex: dragging ? 18 : rested ? 16 : 6,
      }}
    >
    <motion.div
      className={`hero-badge-drag relative h-full w-full select-none ${
        dragging ? "is-dragging" : ""
      }${canDrag ? "" : " is-static"}`}
      style={{ x, y }}
      drag={canDrag}
      dragConstraints={canDrag ? dragBounds : false}
      dragElastic={0.12}
      dragMomentum={false}
      dragListener={canDrag}
      onDragStart={() => {
        setRested(true);
        setDragging(true);
      }}
      onDragEnd={() => {
        setDragging(false);
      }}
      aria-label={canDrag ? `Move ${badge.alt} sticker` : badge.alt}
      role={canDrag ? "button" : undefined}
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
          <div className="hero-sticker-face">
            <AssetImage
              src={`/img/badges/${badge.file}`}
              alt=""
              aria-hidden="true"
              draggable={false}
              width={160}
              height={160}
              className="pointer-events-none block h-full w-full max-w-none object-contain"
            />
            <span
              className="hero-sticker-sheen"
              aria-hidden="true"
              style={{
                ["--badge-mask" as string]: `url("${withBasePath(`/img/badges/${badge.file}`)}")`,
              }}
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
  const canDrag = useDesktopDrag();
  const stageRef = useRef<HTMLDivElement>(null);
  const stageSize = useElementSize(stageRef);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[540px] overflow-visible md:translate-x-4"
      aria-label="Kayla illustrated with skill stickers"
    >
      <div ref={stageRef} className="absolute inset-[7%] overflow-visible sm:inset-0">
      {badges.map((badge, index) => (
        <DraggableBadge
          key={badge.alt}
          badge={badge}
          index={index}
          constraintsRef={constraintsRef}
          resetId={resetId}
          stageSize={stageSize}
          canDrag={canDrag}
        />
      ))}
      <button
        type="button"
        className="focus-ring absolute left-1/2 top-[48%] z-[5] aspect-square w-[52%] -translate-x-1/2 -translate-y-1/2 cursor-pointer overflow-visible rounded-full border-0 bg-transparent p-0"
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
    </div>
  );
}
