import type { CSSProperties, ImgHTMLAttributes } from "react";
import { withBasePath } from "@/lib/paths";

type AssetImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  eager?: boolean;
  sizes?: string;
};

export function AssetImage({
  src,
  alt,
  fill = false,
  priority = false,
  eager = false,
  className,
  sizes,
  width,
  height,
  style,
  ...props
}: AssetImageProps) {
  const fillStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        inset: 0,
        color: "transparent",
      }
    : undefined;

  return (
    // next/image drops the GitHub Pages base path when unoptimized.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={withBasePath(src)}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      sizes={sizes}
      style={{ ...fillStyle, ...style }}
      {...props}
      decoding="async"
      loading={priority || eager ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : eager ? "auto" : "low"}
    />
  );
}
