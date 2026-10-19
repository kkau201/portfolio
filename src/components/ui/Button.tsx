import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { RippleLink } from "@/components/ui/RippleLink";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant: "outline" | "pill" | "text" ;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
  ripple?: boolean;
}

const variants: Record<ButtonLinkProps["variant"], string> = {
  outline:
    "inline-flex items-center gap-2 rounded-lg border-2 border-tangerine px-5 py-2.5 text-xs font-extrabold tracking-[0.14em] text-tangerine hover:bg-tangerine hover:text-oatmeal",
  pill: "inline-flex items-center gap-2 rounded-full bg-strawberry px-5 py-2.5 text-sm font-extrabold text-oatmeal hover:opacity-90",
  text: "text-link",
};

export function ButtonLink({
  href,
  children,
  variant,
  download,
  external,
  ariaLabel,
  ripple = false,
}: ButtonLinkProps) {
  const className = `${variants[variant]} focus-ring`;
  const extra = external
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  if (download || href.startsWith("mailto:") || href.startsWith("http")) {
    const Anchor = ripple ? RippleLink : "a";
    return (
      <Anchor
        href={href}
        className={className}
        download={download || undefined}
        aria-label={ariaLabel}
        {...extra}
      >
        {children}
      </Anchor>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

interface ViewLinkProps {
  href?: string;
  children: ReactNode;
}

const viewLinkIconClass =
  "size-3.5 motion-safe:group-hover/arrow:animate-arrow-nudge-right motion-safe:group-focus-visible/arrow:animate-arrow-nudge-right motion-safe:group-focus-within/arrow:animate-arrow-nudge-right";

export function ViewLink({ href, children }: ViewLinkProps) {
  const label = (
    <>
      {children}
      <Icon name="right" className={viewLinkIconClass} />
    </>
  );

  const className =
    "group/arrow focus-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium text-tangerine no-underline hover:no-underline";

  if (!href) {
    return (
      <span
        className="inline-flex items-center gap-1 text-sm font-medium text-tangerine"
        aria-hidden="true"
      >
        {label}
      </span>
    );
  }

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
