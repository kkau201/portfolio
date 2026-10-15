import { withBasePath } from "@/lib/paths";

const icons = {
  up: "/img/icons/arrow-up.svg",
  down: "/img/icons/arrow-down.svg",
  right: "/img/icons/arrow-right.svg",
  open: "/img/icons/open-link.svg",
  sparkle: "/img/icons/sparkle.svg",
} as const;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "size-4" }: IconProps) {
  const src = withBasePath(icons[name]);

  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
