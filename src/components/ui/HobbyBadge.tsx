"use client";

import { useState } from "react";
import type { Hobby } from "@/types/portfolio";
import { AssetImage } from "@/components/ui/AssetImage";

export function HobbyBadge({ hobby }: { hobby: Hobby }) {
  const [playKey, setPlayKey] = useState(0);

  const play = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setPlayKey((count) => count + 1);
  };

  return (
    <li
      className={`hobby hobby--${hobby.motion} min-w-0${playKey > 0 ? " is-playing" : ""}`}
    >
      <button
        type="button"
        title={hobby.label}
        aria-label={hobby.label}
        className="focus-ring w-full cursor-pointer border-0 bg-transparent p-0"
        onClick={play}
      >
        <AssetImage
          key={playKey}
          src={hobby.src}
          alt=""
          aria-hidden="true"
          width={160}
          height={160}
          className="hobby-icon block h-auto w-full min-w-0 max-w-full object-contain"
        />
      </button>
    </li>
  );
}
