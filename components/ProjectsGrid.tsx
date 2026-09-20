"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useEffect, useRef, useState } from "react";

function ProjectVisual({ project }: { project: Project }) {
  if (project.heroImage) {
    return (
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        sizes="(max-width: 800px) 88vw, 820px"
        className="carousel-image"
      />
    );
  }

  return (
    <div className="carousel-brand-card">
      <span>{project.visualLabel ?? project.brand}</span>
      <small>DISNEY+</small>
    </div>
  );
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(".project-card"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = cards.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { root: track, threshold: [0.45, 0.7, 0.9] }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [projects.length]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.querySelectorAll<HTMLElement>(".project-card")[index];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const previous = () => goTo(Math.max(0, active - 1));
  const next = () => goTo(Math.min(projects.length - 1, active + 1));

  return (
    <section className="work" id="work">
      <div className="work-heading container">
        <div>
          <p className="eyebrow">01 — Sélection</p>
          <h2>
            Des expériences
            <br />
            qui créent <em>du lien.</em>
          </h2>
        </div>
        <p className="projects-lead">
          Campagnes, lancements, partenariats et expériences imaginés et pilotés
          au fil de mon parcours.
        </p>
      </div>

      <div className="carousel-shell">
        <div className="carousel-track" ref={trackRef} aria-label="Projets">
          {projects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="project-card-link">
                <div className="project-card-media">
                  <ProjectVisual project={project} />
                  <div className="project-card-shade" />
                  <div className="project-card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="project-card-arrow">↗</div>
                  <div className="project-card-content">
                    <span className="project-card-brand">{project.brand}</span>
                    <h3>{project.title}</h3>
                    <div className="project-card-tags">
                      {project.categories.slice(0, 3).map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-controls container">
        <div className="carousel-progress" aria-label="Progression">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div className="carousel-progress-line">
            <i style={{ width: `${((active + 1) / projects.length) * 100}%` }} />
          </div>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
        <div className="carousel-buttons">
          <button type="button" onClick={previous} disabled={active === 0} aria-label="Projet précédent">←</button>
          <button type="button" onClick={next} disabled={active === projects.length - 1} aria-label="Projet suivant">→</button>
        </div>
      </div>
    </section>
  );
}
