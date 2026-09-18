"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("Tous");

  const categories = ["Tous", "Stratégie", "Digital", "Événementiel", "Influence", "Partenariats"];

  const filtered = useMemo(
    () =>
      active === "Tous"
        ? projects
        : projects.filter((project) => project.categories.includes(active)),
    [active, projects]
  );

  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Projets & réalisations</h2>
          </div>
          <div className="filters" aria-label="Filtrer les projets">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter ${active === category ? "active" : ""}`}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className="project-image">
                <div className="visual-placeholder">
                  <span>{project.brand}</span>
                  <small>Remplacer par votre visuel</small>
                </div>
              </div>
              <div className="project-info">
                <div>
                  <div className="project-title">{project.title}</div>
                  <div className="project-tags">{project.categories.join(" · ")}</div>
                </div>
                <div className="project-year">{project.year}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}