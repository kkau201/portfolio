import { about } from "@/data/portfolioData";
import { EducationCard } from "@/components/ui/EducationCard";
import { HobbyBadge } from "@/components/ui/HobbyBadge";
import { Icon } from "@/components/ui/Icon";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-tangerine text-oatmeal">
      <div className="page-wrap grid min-w-0 gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="min-w-0 text-left">
          <h2 id="about-heading" className="section-title text-oatmeal">
            About me
          </h2>
          <div className="mt-4 space-y-4 text-[14px] leading-6 text-oatmeal">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <h3 className="section-title mt-12 text-oatmeal">Hobbies</h3>
          <ul className="hobby-row mt-4 grid w-full min-w-0 grid-cols-5 items-center gap-2 sm:gap-3">
            {about.hobbies.map((hobby) => (
                <HobbyBadge key={hobby.label} hobby={hobby} />
            ))}
          </ul>
        </div>

        <div className="min-w-0 text-left">
          <h3 className="section-title text-oatmeal">Education</h3>
          <div className="mt-4 space-y-4">
            {about.education.map((item) => (
              <EducationCard key={item.title} education={item} />
            ))}
          </div>

          <h3 className="section-title mt-8 text-oatmeal">Awards</h3>
          <ul className="mt-4 space-y-3">
            {about.awards.map((award) => (
              <li key={award} className="flex gap-2.5 text-[14px] leading-5">
                <Icon name="sparkle" className="mt-0.5 size-4 shrink-0 text-lime" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
