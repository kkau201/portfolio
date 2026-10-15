import { featuredProjects } from "@/data/portfolioData";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="page-wrap py-16 md:py-20"
    >
      <h2 id="projects-heading" className="section-title text-left text-tangerine">
        Projects
      </h2>
      <div className="mt-8 space-y-8">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/projects" variant="outline">
          VIEW ALL PROJECTS <Icon name="right" className="size-3.5" />
        </ButtonLink>
      </div>
    </section>
  );
}
