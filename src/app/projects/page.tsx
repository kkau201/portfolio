import type { Metadata } from "next";
import { archiveProjects } from "@/data/portfolioData";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";

export const metadata: Metadata = {
  title: "Projects | Kayla Kautai",
  description:
    "Selected Android, mobile, and design projects by Kayla Kautai, including Pūioio, Pīkau, and Reading App.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Kayla Kautai",
    description:
      "Selected Android, mobile, and design projects by Kayla Kautai, including Pūioio, Pīkau, and Reading App.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  const projects = [...archiveProjects].sort(
    (a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10),
  );

  return (
    <main className="page-wrap py-10 text-left md:py-14">
      <h1 className="section-title text-tangerine">Projects</h1>
      <div className="mt-8 space-y-8">
        {projects.map((project, index) => (
          <FeaturedProjectCard
            key={project.title}
            project={project}
            href={project.href}
            priority={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
