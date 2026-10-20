interface CaseStudyBlock {
  title: string;
  body: string;
}

interface CaseStudyBlocksProps {
  blocks: readonly CaseStudyBlock[];
}

export function CaseStudyBlocks({ blocks }: CaseStudyBlocksProps) {
  return (
    <div className="mt-6 max-w-[73rem] space-y-6">
      {blocks.map((block) => (
        <div key={block.title}>
          <h3 className="text-xl font-medium text-tangerine">{block.title}</h3>
          <p className="mt-1 leading-normal text-blueberry">{block.body}</p>
        </div>
      ))}
    </div>
  );
}
