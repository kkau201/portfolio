interface CaseStudyBlock {
  title: string;
  body: string;
}

interface CaseStudyBlocksProps {
  blocks: readonly CaseStudyBlock[];
  invert?: boolean;
  className?: string;
}

export function CaseStudyBlocks({
  blocks,
  invert = false,
  className = "",
}: CaseStudyBlocksProps) {
  return (
    <div className={`max-w-[73rem] space-y-6 ${className || "mt-6"}`}>
      {blocks.map((block) => (
        <div key={block.title}>
          <h3 className={`text-xl font-medium ${invert ? "text-lime" : "text-tangerine"}`}>
            {block.title}
          </h3>
          <p className={`mt-1 leading-normal ${invert ? "text-oatmeal" : "text-blueberry"}`}>
            {block.body}
          </p>
        </div>
      ))}
    </div>
  );
}
