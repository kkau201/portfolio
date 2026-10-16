"use client";

import { useRef, useState } from "react";
import { contact } from "@/data/portfolioData";
import { withBasePath } from "@/lib/paths";
import { Icon } from "@/components/ui/Icon";

const FILL_MS = 1180;
const HOLD_MS = 380;

function startDownload() {
  const link = document.createElement("a");
  link.href = withBasePath(contact.cvHref);
  link.download = contact.cvHref.split("/").pop() ?? "KaylaKautai-CV.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function DownloadCvButton() {
  const [filling, setFilling] = useState(false);
  const busy = useRef(false);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    event.preventDefault();
    if (busy.current) return;

    busy.current = true;
    setFilling(true);

    window.setTimeout(() => {
      startDownload();
      window.setTimeout(() => {
        setFilling(false);
        busy.current = false;
      }, HOLD_MS);
    }, FILL_MS);
  };

  return (
    <a
      href={withBasePath(contact.cvHref)}
      download
      className={`cv-liquid-btn focus-ring inline-flex items-center gap-2 rounded-full bg-strawberry px-5 py-2.5 text-sm font-extrabold text-oatmeal ${
        filling ? "is-filling" : "hover:opacity-90"
      }`}
      aria-label="Download CV"
      aria-busy={filling}
      onClick={onClick}
    >
      <span className="cv-liquid-fill" aria-hidden="true">
        <svg
          className="cv-liquid-wave cv-liquid-wave--back"
          viewBox="0 0 144 24"
          preserveAspectRatio="none"
        >
          <path d="M0 14c12 0 12-10 24-10s12 10 24 10 12-10 24-10 12 10 24 10 12-10 24-10 12 10 24 10v26H0z" />
        </svg>
        <svg className="cv-liquid-wave" viewBox="0 0 144 24" preserveAspectRatio="none">
          <path d="M0 14c12 0 12-10 24-10s12 10 24 10 12-10 24-10 12 10 24 10 12-10 24-10 12 10 24 10v26H0z" />
        </svg>
      </span>
      <span className="cv-liquid-label">
        <Icon name="down" className="size-4" />
        {contact.cvLabel}
      </span>
    </a>
  );
}
