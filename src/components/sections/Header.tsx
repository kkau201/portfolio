"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navLinks, siteMeta } from "@/data/portfolioData";

const linkClass =
  "focus-ring rounded-sm text-[15px] font-extrabold text-tangerine hover:opacity-80";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => setOpen(false);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-oatmeal/95 backdrop-blur-sm">
      <div className="page-wrap flex items-center justify-between py-6">
        <Link
          href="/"
          className="focus-ring rounded-sm font-display text-[22px] font-normal text-tangerine"
          onClick={() => setOpen(false)}
        >
          {siteMeta.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-sm text-tangerine md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="flex h-3.5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Primary"
        className={`${open ? "flex" : "hidden"} page-wrap flex-col gap-4 pb-6 md:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
