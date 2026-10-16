import { experience } from "@/data/portfolioData";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-tangerine text-oatmeal"
    >
      <div className="page-wrap py-16 md:py-20">
        <h2 id="experience-heading" className="section-title text-left text-oatmeal">
          Professional Experience
        </h2>
        <div className="relative mt-10 space-y-8 pl-6 md:pl-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-[6px] top-0 flex w-0.5 -translate-x-1/2 flex-col items-center"
          >
            <span className="w-full flex-1 bg-oatmeal" />
            <span
              className="w-full shrink-0"
              style={{
                height: 30,
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #F9F0EE 0 6px, transparent 6px 12px)",
              }}
            />
          </div>
          {experience.map((role) => (
            <article key={role.title} className="relative">
              <span className="absolute -left-6 top-0 z-[1] h-3 w-3 rounded-full border-2 border-oatmeal bg-tangerine md:-left-8" />
              <div className="rounded-[22px] border-2 border-oatmeal/80 px-6 py-6 text-left md:px-8">
                <p className="inline-flex rounded-full bg-oatmeal/25 px-3 py-1 text-[11px] font-medium uppercase tracking-wide">
                  {role.dates}
                </p>
                <h3 className="mt-4 font-display text-[28px] font-normal leading-tight md:text-[32px]">
                  {role.title}
                </h3>
                <h6 className="mt-2 font-display text-[14px] font-normal leading-tight md:text-[14px]">
                  {role.company}
                </h6>
                <p className="mt-6 max-w-3xl text-[14px] leading-6 text-oatmeal/95">
                  {role.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
