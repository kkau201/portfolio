interface Outcome {
  value: string;
  caption: string;
}

interface OutcomesBannerProps {
  outcomes: readonly Outcome[];
}

const boxClass =
  "rounded-[20px] border-[3px] border-oatmeal px-6 py-8 md:px-7";

export function OutcomesBanner({ outcomes }: OutcomesBannerProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {outcomes.map((item) => (
        <div
          key={item.value}
          className={`flex min-h-[14rem] flex-col items-center justify-center text-center ${boxClass}`}
        >
          <p className="font-display text-[48px] leading-none md:text-[32px]">{item.value}</p>
          <p className="mt-2 whitespace-pre-line text-xl">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}

interface OutlineItem {
  title: string;
  body: string;
}

export function OutlineBanner({ items }: { items: readonly OutlineItem[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className={boxClass}>
          <h3 className="font-display text-[28px] font-normal leading-none text-lime md:text-[32px]">
            {item.title}
          </h3>
          <p className="mt-4 leading-normal text-oatmeal">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
