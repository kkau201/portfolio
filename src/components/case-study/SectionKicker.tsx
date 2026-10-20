interface SectionKickerProps {
  index: string;
  title: string;
  light?: boolean;
}

export function SectionKicker({ index, title, light = false }: SectionKickerProps) {
  return (
    <h2
      className={`font-display text-[40px] font-normal leading-none md:text-[32px] ${
        light ? "text-oatmeal" : "text-blueberry"
      }`}
    >
      <span className={light ? "text-oatmeal" : "text-tangerine"}>{index}/ </span>
      {title}
    </h2>
  );
}
