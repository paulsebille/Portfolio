"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useEffect, useRef, type ReactNode } from "react";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="work" id="work">
      <div className="container">
        <Reveal className="projects-intro">
          <p className="eyebrow">01 — Sélection de projets</p>
          <h2>
            Des expériences
            <br />
            qui créent <em>du lien.</em>
          </h2>
          <p className="projects-lead">
            Une sélection de campagnes, événements, partenariats, lancements et
            activations imaginés et pilotés au fil de mon parcours.
          </p>
        </Reveal>

        <div className="projects-editorial">
          {projects.map((project, index) => (
            <Reveal className={`project-reveal project-reveal-${index + 1}`} key={project.slug}>
              <Link
                className={`project-editorial project-editorial-${index + 1}`}
                href={`/projects/${project.slug}`}
              >
                <div className="project-editorial-media">
                  {project.heroImage ? (
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      className="project-editorial-image"
                    />
                  ) : (
                    <div className="project-editorial-brand-card">
                      <span>{project.visualLabel ?? project.brand}</span>
                      <small>DISNEY+</small>
                    </div>
                  )}
                  <div className="project-editorial-overlay">
                    <span>Voir le projet</span>
                    <span className="project-arrow">↗</span>
                  </div>
                </div>

                <div className="project-editorial-info">
                  <div>
                    <span className="project-editorial-brand">{project.brand}</span>
                    <h3>{project.title}</h3>
                    <p>{project.categories.join(" · ")}</p>
                  </div>
                  <span>{project.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
