"use client";

import { motion, useReducedMotion } from "framer-motion";

const bands = [
  {
    key: "ui",
    label: "UI",
    rows: [
      [{ name: "Dashboard", hint: "Destinations · Hilt", accent: true }],
      [
        { name: "Home" },
        { name: "Sessions" },
        { name: "Search" },
        { name: "Profile" },
      ],
    ],
  },
  {
    key: "data",
    label: "Data",
    rows: [
      [
        { name: "FireRepository", hint: "Users · books · sessions" },
        { name: "BookRepository", hint: "Google Books" },
      ],
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    rows: [
      [
        { name: "Firebase Auth" },
        { name: "Firestore" },
        { name: "Books API" },
      ],
    ],
  },
] as const;

export function ReadingArchitectureGraph() {
  const reduceMotion = useReducedMotion();

  return (
    <figure>
      <div className="flex flex-col items-stretch">
        {bands.map((band, index) => (
          <motion.div
            key={band.key}
            className="flex flex-col items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.4,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {index > 0 ? <Connector /> : null}
            <div className="relative w-full rounded-[24px] border border-dashed border-blueberry/25 bg-blueberry/[0.04] px-3 pb-4 pt-8 sm:px-5">
              <p className="absolute left-3 top-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blueberry/55 sm:left-5">
                {band.label}
              </p>
              <div className="flex flex-col items-center gap-3">
                {band.rows.map((row) => (
                  <div
                    key={row.map((node) => node.name).join("-")}
                    className="flex w-full flex-wrap items-stretch justify-center gap-3"
                  >
                    {row.map((node) => (
                      <div
                        key={node.name}
                        className={`min-w-[8.5rem] rounded-[16px] px-3 py-3 text-center transition-transform duration-200 sm:px-4 sm:py-3.5 motion-safe:hover:scale-[1.03] ${
                          row.length > 1 ? "flex-1 sm:flex-none" : "flex-none"
                        } ${
                          "accent" in node && node.accent
                            ? "bg-tangerine text-oatmeal sm:min-w-[12rem]"
                            : "bg-lime text-blueberry"
                        }`}
                      >
                        <p className="font-medium leading-tight">{node.name}</p>
                        {"hint" in node && node.hint ? (
                          <p className="mt-1 text-xs opacity-80">{node.hint}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-sm leading-normal text-blueberry/75 lg:text-left">
        Screens talk to repositories. Auth, the shelf, and sessions live in Firebase. Search hits
        Google Books.
      </figcaption>
    </figure>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden>
      <span className="h-6 w-px bg-blueberry/25" />
      <span className="size-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-blueberry/35" />
    </div>
  );
}
