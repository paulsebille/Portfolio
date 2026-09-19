"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="projects-intro">
          <p className="eyebrow">Projets sélectionnés</p>

          <h2>
            Des expériences
            <br />
            qui créent <em>du lien.</em>
          </h2>

          <p className="projects-lead">
            Une sélection de campagnes, événements, partenariats et lancements
            imaginés et pilotés au fil de mon parcours.
          </p>
        </div>

        <div className="projects-editorial">
          {projects.map((project, index) => (
            <Link
              className={`project-editorial project-editorial-${index + 1}`}
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="project-editorial-media">
                <div className="project-editorial-placeholder">
                  <span>{project.brand}</span>
                </div>

                <div className="project-editorial-overlay">
                  <span>Découvrir le projet</span>
                  <span className="project-arrow">↗</span>
                </div>
              </div>

              <div className="project-editorial-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.categories.join(" · ")}</p>
                </div>

                <span>{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
