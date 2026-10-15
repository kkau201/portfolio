"use client";

import { Icon } from "@/components/ui/Icon";

export function BackToTop() {
  return (
    <a
      href="#top"
      className="focus-ring inline-flex items-center gap-1 rounded-sm font-extrabold tracking-wide text-tangerine hover:text-blueberry"
      aria-label="Back to top"
      onClick={(event) => {
        event.preventDefault();
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
    >
      <Icon name="up" className="size-3.5" /> BACK TO TOP
    </a>
  );
}
