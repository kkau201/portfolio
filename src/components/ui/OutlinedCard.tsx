import type { ReactNode } from "react";

interface OutlinedCardProps {
  children: ReactNode;
  className?: string;
}

export function OutlinedCard({ children, className = "" }: OutlinedCardProps) {
  return (
    <div
      className={`rounded-[22px] border-2 border-oatmeal/80 px-6 py-6 text-left md:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function OutlinedCardPill({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex rounded-full bg-oatmeal/25 px-3 py-1 text-[11px] font-medium uppercase tracking-wide">
      {children}
    </p>
  );
}

export function OutlinedCardTitle({
  children,
  as: Heading = "h3",
  className = "text-[28px] md:text-[32px]",
}: {
  children: ReactNode;
  as?: "h3" | "h4";
  className?: string;
}) {
  return (
    <Heading className={`mt-4 font-display font-normal leading-tight ${className}`}>
      {children}
    </Heading>
  );
}

export function OutlinedCardMeta({ children }: { children: ReactNode }) {
  return <p className="mt-2 text-[14px] font-normal leading-tight">{children}</p>;
}
