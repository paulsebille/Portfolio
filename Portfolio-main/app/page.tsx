import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { About } from "@/components/About";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsGrid projects={projects} />
      <About />
    </main>
  );
}