"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useEffect, useRef, useState } from "react";

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "disney-plus") {
    return <Image src="/images/disney-plus.webp" alt="Disney+" fill sizes="(max-width: 800px) 88vw, 820px" className="carousel-image disney-image" />;
  }
  if (project.heroImage) {
    return <Image src={project.heroImage} alt={project.title} fill sizes="(max-width: 800px) 88vw, 820px" className="carousel-image" />;
  }
  return <div className="carousel-brand-card"><span>{project.visualLabel ?? project.brand}</span></div>;
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>(".project-card"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = cards.indexOf(visible.target as HTMLElement);
      if (index >= 0) setActive(index);
    }, { root: track, threshold: [0.5, 0.75, 0.95] });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [projects.length]);

  const goTo = (index: number) => {
    const card = trackRef.current?.querySelectorAll<HTMLElement>(".project-card")[index];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="work" id="work">
      <div className="work-heading container">
        <div>
          <h2>Des expériences<br />qui créent <em>du lien.</em></h2>
        </div>
        <p className="projects-lead">Une sélection de campagnes, lancements, partenariats et expériences imaginés et pilotés entre divertissement, automobile et univers premium.</p>
      </div>

      <div className="carousel-shell">
        <div className="carousel-track" ref={trackRef} aria-label="Sélection de projets">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="project-card-link">
                <div className="project-card-media">
                  <ProjectVisual project={project} />
                  <div className="project-card-shade" />
                  <div className="project-card-light" />
                  <div className="project-card-arrow" aria-hidden="true"><span>↗</span></div>
                  <div className="project-card-content">
                    <span className="project-card-brand">{project.brand}</span>
                    <h3>{project.title}</h3>
                    <div className="project-card-tags">{project.categories.slice(0, 3).map((category) => <span key={category}>{category}</span>)}</div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-controls container">
        <div className="carousel-progress" aria-label="Progression des projets">
          <div className="carousel-progress-line"><i style={{ width: `${((active + 1) / projects.length) * 100}%` }} /></div>
        </div>
        <div className="carousel-buttons">
          <button type="button" onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0} aria-label="Projet précédent">←</button>
          <button type="button" onClick={() => goTo(Math.min(projects.length - 1, active + 1))} disabled={active === projects.length - 1} aria-label="Projet suivant">→</button>
        </div>
      </div>
    </section>
  );
}
