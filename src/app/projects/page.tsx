import { archiveProjects } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="page-wrap py-10 text-left md:py-14">
      <h1 className="section-title text-tangerine">Projects</h1>
      <div className="mt-8 space-y-8">
        {archiveProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
