"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { hero } from "@/data/portfolioData";

const PUSH_RADIUS = 160;
const PUSH_STRENGTH = 78;

type MouseState = {
  x: number | null;
  y: number | null;
  inside: boolean;
};

type Displacement = {
  x: number;
  y: number;
};

export function HeroBadges() {
  const { badges, avatar } = hero;
  const rootRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mouse = useRef<MouseState>({ x: null, y: null, inside: false });
  const displace = useRef<Displacement[]>(badges.map(() => ({ x: 0, y: 0 })));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const box = root.getBoundingClientRect();
      mouse.current = {
        x: event.clientX - box.left,
        y: event.clientY - box.top,
        inside: true,
      };
    };

    const onLeave = () => {
      mouse.current = { x: null, y: null, inside: false };
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);

    const tick = (now: number) => {
      const t = (now - started) / 1000;
      const box = root.getBoundingClientRect();
      const { x: mx, y: my, inside } = mouse.current;

      badges.forEach((badge, i) => {
        const node = badgeRefs.current[i];
        if (!node) return;

        const restX = (badge.x / 100) * box.width;
        const restY = (badge.y / 100) * box.height;

        let floatX = 0;
        let floatY = 0;
        if (!reduced) {
          floatX = Math.sin(t * badge.speed + badge.phase) * badge.amp;
          floatY = Math.cos(t * badge.speed * 0.85 + badge.phase) * badge.amp;
        }

        let targetX = 0;
        let targetY = 0;
        if (inside && mx !== null && my !== null) {
          const dx = restX - mx;
          const dy = restY - my;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < PUSH_RADIUS) {
            const force = (1 - dist / PUSH_RADIUS) ** 2 * PUSH_STRENGTH;
            targetX = (dx / dist) * force;
            targetY = (dy / dist) * force;
          }
        }

        const current = displace.current[i];
        current.x += (targetX - current.x) * 0.12;
        current.y += (targetY - current.y) * 0.12;

        node.style.transform = `translate(-50%, -50%) translate(${
          floatX + current.x
        }px, ${floatY + current.y}px)`;
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [badges]);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-square w-full max-w-[540px] md:translate-x-4"
      aria-label="Kayla illustrated with skill stickers"
    >
      {badges.map((badge, i) => (
        <div
          key={badge.alt}
          ref={(el) => {
            badgeRefs.current[i] = el;
          }}
          className="pointer-events-none absolute aspect-square select-none will-change-transform"
          style={{
            left: `${badge.x}%`,
            top: `${badge.y}%`,
            width: `${badge.w}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={`/img/badges/${badge.file}`}
            alt=""
            aria-hidden="true"
            fill
            sizes="20vw"
            className="object-contain"
          />
        </div>
      ))}
      <Image
        src={avatar.src}
        alt={avatar.alt}
        width={306}
        height={306}
        className="pointer-events-none absolute left-1/2 top-[48%] z-10 w-[52%] -translate-x-1/2 -translate-y-1/2 object-contain"
        priority
      />
    </div>
  );
}
