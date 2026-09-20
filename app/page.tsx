import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { IntroStatement } from "@/components/IntroStatement";
import { About } from "@/components/About";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStatement />
      <ProjectsGrid projects={projects} />
      <About />
    </main>
  );
}