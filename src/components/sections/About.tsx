import { about } from "@/data/portfolioData";
import { AssetImage } from "@/components/ui/AssetImage";
import { Icon } from "@/components/ui/Icon";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-tangerine text-oatmeal">
      <div className="page-wrap grid min-w-0 gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="min-w-0 text-left">
          <h2 id="about-heading" className="section-title text-oatmeal">
            About me
          </h2>
          <div className="mt-6 space-y-4 text-[14px] leading-6 text-oatmeal">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="min-w-0 text-left">
          <h3 className="section-title text-oatmeal">Awards</h3>
          <ul className="mt-6 space-y-3">
            {about.awards.map((award) => (
              <li key={award} className="flex gap-2.5 text-[14px] leading-5">
                <Icon name="sparkle" className="mt-0.5 size-4 shrink-0 text-lime" />
                {award}
              </li>
            ))}
          </ul>

          <h3 className="section-title mt-12 text-oatmeal">Hobbies</h3>
          <ul className="hobby-row mt-5 grid w-full min-w-0 grid-cols-5 items-center gap-2 sm:gap-3">
            {about.hobbies.map((hobby) => (
              <li
                key={hobby.label}
                title={hobby.label}
                className={`hobby hobby--${hobby.motion} min-w-0`}
              >
                <AssetImage
                  src={hobby.src}
                  alt={hobby.label}
                  width={160}
                  height={160}
                  className="hobby-icon block h-auto w-full min-w-0 max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
