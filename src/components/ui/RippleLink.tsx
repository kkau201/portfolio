"use client";

import type { AnchorHTMLAttributes, PointerEvent, ReactNode } from "react";
import { useCallback, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

let rippleId = 0;

export function RippleLink({
  children,
  className = "",
  onPointerDown,
  ...props
}: RippleLinkProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = useCallback((event: PointerEvent<HTMLAnchorElement>) => {
    onPointerDown?.(event);
    if (event.defaultPrevented) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.25;
    const next: Ripple = {
      id: ++rippleId,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      size,
    };

    setRipples((current) => [...current, next]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== next.id));
    }, 600);
  }, [onPointerDown]);

  return (
    <a
      {...props}
      className={`ink-host ${className}`.trim()}
      onPointerDown={spawnRipple}
    >
      <span className="ink-content">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ink-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            marginLeft: -ripple.size / 2,
            marginTop: -ripple.size / 2,
          }}
        />
      ))}
    </a>
  );
}
