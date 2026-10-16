import { experience } from "@/data/portfolioData";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

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
            <ExperienceCard key={role.title} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
