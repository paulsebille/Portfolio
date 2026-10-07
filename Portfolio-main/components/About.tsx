"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const principles = [
  ["Stratégie", "Donner un cap, poser les objectifs et construire le bon dispositif."],
  ["Créativité", "Créer des idées désirables, des expériences et des univers qui restent."],
  ["Expérience", "Faire vivre une marque avec un parcours pensé de bout en bout."],
  ["Performance", "Mesurer, apprendre et optimiser pour faire grandir le business."],
];

const hardSkills = ["Brand strategy", "Marketing", "Event", "Digital", "CRM", "Media", "Analytics", "Partnerships"];
const softSkills = ["Leadership", "Créativité", "Coordination", "Curiosité", "Adaptabilité", "Collaboration", "Storytelling", "Esprit d’équipe"];

function RevealWords({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-words" ref={ref}>
      {items.map((skill, index) => (
        <span key={skill} style={{ "--word-delay": `${index * 55}ms` } as CSSProperties}>{skill}</span>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <div>
            <p className="eyebrow about-eyebrow">À propos</p>
            <h2>Une vision créative.<br />Une énergie collective.<br />Un impact qui compte.</h2>
          </div>
          <p className="about-header-lead">Je relie stratégie, créativité, expérience client et performance pour transformer une vision en projets qui créent de la valeur.</p>
        </div>

        <div className="about-manifesto-compact">
          <span>Le bon concept attire.</span>
          <span>Le bon collectif l’exécute.</span>
          <span>Les bons KPI permettent de l’améliorer.</span>
        </div>

        <div className="about-principles" aria-label="Domaines d’expertise">
          {principles.map(([title, text], index) => (
            <article className="about-principle" key={title}>
              <span className="principle-index">0{index + 1}</span>
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="skills-modern">
          <div className="skills-modern-heading">
            <p className="eyebrow">Ce que j’apporte</p>
            <p>Des compétences métier solides, combinées à une manière de travailler qui fait avancer les projets.</p>
          </div>

          <div className="skills-modern-list">
            <section className="skills-modern-row">
              <div className="skills-modern-label"><span>01</span><strong>Hard skills</strong></div>
              <RevealWords items={hardSkills} />
            </section>
            <section className="skills-modern-row">
              <div className="skills-modern-label"><span>02</span><strong>Soft skills</strong></div>
              <RevealWords items={softSkills} />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
