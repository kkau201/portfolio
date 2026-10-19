"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { AssetImage } from "@/components/ui/AssetImage";
import { puioioCaseStudy } from "@/data/puioioCaseStudy";

const slides = puioioCaseStudy.appSlides;

export function AppSlides() {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const blocks = [...root.querySelectorAll<HTMLElement>("[data-slide-index]")];
    const layers = [...root.querySelectorAll<HTMLElement>("[data-phone-layer]")];
    if (!blocks.length || !layers.length) return;

    let current = -1;

    const show = (next: number) => {
      if (next === current) return;
      current = next;
      const duration = reduceMotion ? "none" : "opacity 0.5s ease-in-out";
      layers.forEach((layer, index) => {
        layer.style.transition = duration;
        layer.style.opacity = index === next ? "1" : "0";
        layer.classList.toggle("is-on", index === next);
      });
      setActive((value) => (value === next ? value : next));
    };

    const fromScroll = () => {
      const midpoint = window.innerHeight * 0.42;
      let next = 0;
      let closest = Infinity;
      for (const block of blocks) {
        const rect = block.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - midpoint);
        if (distance < closest) {
          closest = distance;
          next = Number(block.dataset.slideIndex);
        }
      }
      show(next);
    };

    fromScroll();
    const pulse = window.setInterval(fromScroll, 80);
    window.addEventListener("scroll", fromScroll, { passive: true });
    window.addEventListener("resize", fromScroll);
    return () => {
      window.clearInterval(pulse);
      window.removeEventListener("scroll", fromScroll);
      window.removeEventListener("resize", fromScroll);
    };
  }, [reduceMotion]);

  return (
    <div ref={rootRef} className="relative mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
      <div>
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            id={`app-slide-${index}`}
            data-slide-index={index}
            className="flex min-h-[80vh] flex-col justify-center py-16 md:py-24"
          >
            <h3 className="text-[20px] font-medium leading-tight text-tangerine md:text-[24px]">
              {slide.title}
            </h3>
            {slide.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-5 max-w-[34rem] leading-normal text-blueberry"
              >
                {paragraph}
              </p>
            ))}
            <AssetImage
              src={slide.image.src}
              alt={slide.image.alt}
              width={257}
              height={556}
              className="mt-8 h-[min(480px,70vh)] w-[220px] rounded-[20px] object-cover object-top md:hidden"
            />
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="sticky top-32 flex h-[calc(100vh-8rem)] items-center justify-center">
          <div className="relative h-[min(600px,70vh)] w-[278px] overflow-hidden rounded-[24px] bg-oatmeal">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                data-phone-layer={index}
                className={`app-phone-layer absolute inset-0 ${active === index ? "is-on" : ""}`}
              >
                <AssetImage
                  src={slide.image.src}
                  alt={active === index ? slide.image.alt : ""}
                  width={268}
                  height={580}
                  eager
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
