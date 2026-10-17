import { archiveProjects } from "@/data/portfolioData";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";

export default function ProjectsPage() {
  return (
    <main className="page-wrap py-10 text-left md:py-14">
      <h1 className="section-title text-tangerine">Projects</h1>
      <div className="mt-8 space-y-8">
        {archiveProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.title}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
