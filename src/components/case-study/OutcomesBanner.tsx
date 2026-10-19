interface Outcome {
  value: string;
  caption: string;
}

interface OutcomesBannerProps {
  outcomes: readonly Outcome[];
}

export function OutcomesBanner({ outcomes }: OutcomesBannerProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {outcomes.map((item) => (
        <div
          key={item.value}
          className="flex min-h-[14rem] flex-col items-center justify-center rounded-[20px] border-[3px] border-oatmeal px-4 py-8 text-center"
        >
          <p className="font-display text-[48px] leading-none md:text-[32px]">{item.value}</p>
          <p className="mt-2 whitespace-pre-line text-xl">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
