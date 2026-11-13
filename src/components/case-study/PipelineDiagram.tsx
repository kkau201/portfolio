"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { puioioCaseStudy } from "@/data/puioioCaseStudy";

const steps = puioioCaseStudy.architectureSteps;

type Box = { l: number; t: number; r: number; b: number; cx: number; cy: number; h: number };
type Line = { x1: number; y1: number; x2: number; y2: number; dashed?: boolean };

export function PipelineDiagram() {
  const reduceMotion = useReducedMotion();
  const markerId = useId().replace(/:/g, "");
  const [active, setActive] = useState(1);
  const { size, lines, setNode, containerRef } = usePipelineArrows();

  return (
    <figure className="mt-12">
      <ol className="space-y-3 lg:hidden">
        {steps.map((item) => (
          <li key={item.n} className="rounded-[20px] bg-lime px-6 py-6 text-blueberry">
            <StepDetail n={item.n} title={item.title} body={item.body} />
          </li>
        ))}
      </ol>

      <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:items-stretch lg:gap-5">
        <div className="overflow-visible rounded-[24px] border border-dashed border-blueberry/25 bg-blueberry/[0.04] px-6 py-8">
          <div ref={containerRef} className="relative pl-3">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gridTemplateRows: "auto auto",
              columnGap: "3.25rem",
              rowGap: "3.25rem",
            }}
          >
            <FrameNode name={"Current\nImage"} nodeRef={setNode("current")} />
            <StepNode
              n={1}
              name={"Pose\nDetection"}
              active={active === 1}
              onActivate={() => setActive(1)}
              nodeRef={setNode("pose")}
            />
            <StepNode
              n={2}
              name="Thresholding"
              active={active === 2}
              onActivate={() => setActive(2)}
              nodeRef={setNode("thresh")}
            />
            <div className="col-start-4 row-span-2 flex items-center">
              <StepNode
                n={4}
                name={"State\nMachine"}
                active={active === 4}
                onActivate={() => setActive(4)}
                nodeRef={setNode("sm")}
              />
            </div>
            <div className="col-start-5 row-span-2 flex items-center">
              <StepNode
                n={5}
                name="Counter"
                active={active === 5}
                onActivate={() => setActive(5)}
                nodeRef={setNode("counter")}
              />
            </div>
            <FrameNode name={"Previous\nImage"} nodeRef={setNode("previous")} />
            <StepNode
              n={3}
              name={"Optical\nFlow"}
              active={active === 3}
              onActivate={() => setActive(3)}
              nodeRef={setNode("optical")}
            />
          </div>

          {size.w > 0 ? (
            <svg
              width={size.w}
              height={size.h}
              viewBox={`0 0 ${size.w} ${size.h}`}
              className="pointer-events-none absolute inset-0 overflow-visible text-blueberry/55"
              aria-hidden
            >
              <defs>
                <marker
                  id={markerId}
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="4"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
                </marker>
              </defs>
              {lines.map((line, index) => (
                <line
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray={line.dashed ? "5 5" : undefined}
                  markerEnd={`url(#${markerId})`}
                />
              ))}
            </svg>
          ) : null}
          </div>
        </div>

        <div className="flex rounded-[20px] bg-lime px-6 py-6 text-blueberry">
          <div className="grid w-full content-center">
            {steps.map((step) => (
              <div
                key={step.n}
                className={`col-start-1 row-start-1 ${
                  step.n === active ? "visible" : "invisible"
                } ${reduceMotion ? "" : "transition-opacity duration-200"}`}
                aria-hidden={step.n !== active}
              >
                <StepDetail n={step.n} title={step.title} body={step.body} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-5 text-center text-sm leading-normal text-blueberry/75 lg:text-left">
        Pose and thresholding run on the current frame. Optical flow is the fallback. Both feed the
        state machine, which only counts a full cycle.
      </figcaption>
    </figure>
  );
}

function usePipelineArrows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodes = useRef(new Map<string, HTMLElement>());
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [lines, setLines] = useState<Line[]>([]);

  const setNode = (id: string) => (el: HTMLElement | null) => {
    if (el) nodes.current.set(id, el);
    else nodes.current.delete(id);
  };

  useLayoutEffect(() => {
    const measure = () => {
      const root = containerRef.current;
      if (!root) return;
      const rootBox = root.getBoundingClientRect();
      const box = (id: string): Box | null => {
        const el = nodes.current.get(id);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          l: r.left - rootBox.left,
          t: r.top - rootBox.top,
          r: r.right - rootBox.left,
          b: r.bottom - rootBox.top,
          cx: r.left + r.width / 2 - rootBox.left,
          cy: r.top + r.height / 2 - rootBox.top,
          h: r.height,
        };
      };

      const current = box("current");
      const pose = box("pose");
      const thresh = box("thresh");
      const previous = box("previous");
      const optical = box("optical");
      const sm = box("sm");
      const counter = box("counter");
      if (!current || !pose || !thresh || !previous || !optical || !sm || !counter) return;

      setSize({ w: rootBox.width, h: rootBox.height });
      setLines([
        { x1: current.r, y1: current.cy, x2: pose.l, y2: pose.cy },
        { x1: pose.r, y1: pose.cy, x2: thresh.l, y2: thresh.cy },
        { x1: current.l - 8, y1: current.b, x2: current.l - 8, y2: previous.t, dashed: true },
        { x1: previous.r, y1: previous.cy, x2: optical.l, y2: optical.cy },
        { x1: current.r - 10, y1: current.b, x2: optical.l + 12, y2: optical.t },
        { x1: thresh.r, y1: thresh.cy, x2: sm.l, y2: sm.t + sm.h * 0.32 },
        { x1: optical.r, y1: optical.cy, x2: sm.l, y2: sm.t + sm.h * 0.68 },
        { x1: sm.r, y1: sm.cy, x2: counter.l, y2: counter.cy },
      ]);
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    nodes.current.forEach((node) => observer.observe(node));
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return { size, lines, setNode, containerRef };
}

function StepDetail({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div>
      <p className="font-medium text-tangerine">
        {n} / {title}
      </p>
      <p className="mt-1 leading-normal text-blueberry">{body}</p>
    </div>
  );
}

function FrameNode({
  name,
  nodeRef,
}: {
  name: string;
  nodeRef: (el: HTMLElement | null) => void;
}) {
  return (
    <div
      ref={nodeRef}
      className="relative z-[1] flex min-h-[4.5rem] items-center justify-center rounded-[16px] border-[3px] border-tangerine bg-oatmeal px-2 py-3 text-center text-tangerine"
    >
      <p className="whitespace-pre-line text-sm font-medium leading-tight">{name}</p>
    </div>
  );
}

function StepNode({
  n,
  name,
  active,
  onActivate,
  nodeRef,
}: {
  n: number;
  name: string;
  active: boolean;
  onActivate: () => void;
  nodeRef: (el: HTMLElement | null) => void;
}) {
  return (
    <button
      ref={nodeRef}
      type="button"
      aria-label={`${n} / ${name.replace(/\n/g, " ")}`}
      aria-pressed={active}
      onClick={onActivate}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`relative z-[1] flex min-h-[4.5rem] w-full items-center justify-center rounded-[16px] bg-lime px-2 py-3 text-center text-blueberry focus-ring ${
        active ? "ring-2 ring-tangerine ring-offset-2 ring-offset-oatmeal" : ""
      }`}
    >
      <span className="absolute -left-2.5 -top-2.5 flex size-7 items-center justify-center rounded-full bg-blueberry text-sm font-semibold text-oatmeal">
        {n}
      </span>
      <p className="whitespace-pre-line text-sm font-medium leading-tight">{name}</p>
    </button>
  );
}
