"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useEffect, useRef, useState } from "react";

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "audi-f1-experience") {
    return <Image src="/images/audi-f1-p1597797.jpg" alt={project.title} fill sizes="(max-width: 800px) 88vw, 820px" className="carousel-image carousel-image-f1" />;
  }
  if (project.slug === "cupra-nice-jazz-festival") {
    return <Image src="/images/cupra-raval-njf.jpg" alt={project.title} fill sizes="(max-width: 800px) 88vw, 820px" className="carousel-image carousel-image-raval" />;
  }
  if (project.slug === "roi-lion-disney") {
    return <Image src="/images/roi-lion-hero.jpg" alt={project.title} fill sizes="(max-width: 800px) 88vw, 820px" className="carousel-image carousel-image-roi" />;
  }
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
    let frame = 0;

    const updateActiveCard = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        setActive((current) => current === nearestIndex ? current : nearestIndex);
      });
    };

    updateActiveCard();
    track.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);
    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, [projects.length]);

  const goTo = (index: number) => {
    const card = trackRef.current?.querySelectorAll<HTMLElement>(".project-card")[index];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="work" id="work">
      <div className="work-heading container">
        <div className="work-heading-title">
          <h2>Des idées qui prennent vie.<br /><em>Des projets qui créent de l’impact.</em></h2>
        </div>
          <p className="projects-section-subtitle">
            <span className="projects-subtitle-context">Découvrez une sélection de campagnes, lancements, partenariats et expériences dans le divertissement, l’automobile et le premium.</span>
            <strong>Transformer une idée en expérience.<br />Et en impact business.</strong>
          </p>
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
                  <div className="project-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" focusable="false"><path d="M9 6.5 14.5 12 9 17.5" /></svg></div>
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
        <div className="carousel-progress" role="status" aria-label={`Projet ${active + 1} sur ${projects.length}`}>
          <div className="carousel-progress-track" aria-hidden="true">
            {projects.map((project, index) => <span key={project.slug} className={index === active ? "is-active" : ""} />)}
          </div>
        </div>
        <div className="carousel-buttons">
          <button type="button" onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0} aria-label="Projet précédent">
            <svg viewBox="0 0 24 24" fill="none" focusable="false"><path d="M14.5 6.5 9 12l5.5 5.5" /></svg>
          </button>
          <button type="button" onClick={() => goTo(Math.min(projects.length - 1, active + 1))} disabled={active === projects.length - 1} aria-label="Projet suivant">
            <svg viewBox="0 0 24 24" fill="none" focusable="false"><path d="M9.5 6.5 15 12l-5.5 5.5" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
