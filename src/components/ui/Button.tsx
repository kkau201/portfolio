import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { RippleLink } from "@/components/ui/RippleLink";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant: "outline" | "pill" | "text";
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
  href: string;
  children: ReactNode;
}

export function ViewLink({ href, children }: ViewLinkProps) {
  return (
    <ButtonLink href={href} variant="text">
      {children} <Icon name="right" className="size-3.5" />
    </ButtonLink>
  );
}
