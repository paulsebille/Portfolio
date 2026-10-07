"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const principles = [
  ["Stratégie", "Vision · Positionnement · Planning"],
  ["Créativité", "Concept · Direction artistique · Storytelling"],
  ["Expérience", "Activation · Événement · Parcours client"],
  ["Performance", "KPI · Acquisition · Conversion"],
] as const;

const hardSkills = ["Brand strategy", "Marketing", "Event", "Digital", "CRM", "Media", "Analytics"];
const softSkills = ["Leadership", "Coordination", "Créativité", "Curiosité", "Adaptabilité", "Collaboration"];

function SkillWord({ children, index }: { children: string; index: number }) {
  return <span className="skill-word" style={{ "--skill-index": index } as CSSProperties}>{children}</span>;
}

export function About() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = skillsRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-copy">
            <h2>Une vision créative.<br /><em>Une énergie collective.</em><br />Un impact qui compte.</h2>
          </div>
          <div className="about-hero-visual" aria-hidden="true">
            <span className="about-orb orb-a" />
            <span className="about-orb orb-b" />
            <span className="about-orb orb-c" />
            <span className="about-word word-1">CRÉATIVITÉ</span>
            <span className="about-word word-2">ONE TEAM</span>
            <span className="about-word word-3">IMPACT</span>
            <span className="about-hero-core">+</span>
          </div>
        </div>

        <div className="about-manifesto">
          <p>Je relie stratégie, créativité, expérience client et performance pour transformer une vision en projets qui créent de la valeur.</p>
          <span>Le bon concept attire. Le bon collectif l’exécute. Les bons KPI permettent de l’améliorer.</span>
        </div>

        <div className="about-principles">
          {principles.map(([title, detail], index) => (
            <article className="about-principle-card" key={title}>
              <span className="principle-index">0{index + 1}</span>
              <div className="principle-icon" aria-hidden="true">↗</div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>

        <div className="about-body">
          <div className="about-story">
            <p className="eyebrow">Ma façon de travailler</p>
            <p className="about-lead">J’aime passer de l’idée au terrain, faire travailler les expertises ensemble et garder une lecture simple : <em>pourquoi, pour qui, avec quel impact ?</em></p>
            <p className="about-secondary">Mon parcours entre divertissement, automobile et univers premium m’a appris à conjuguer exigence créative, expérience client et réalité opérationnelle. Je crois aux équipes qui avancent en <strong>One Team</strong>, avec un cap clair, de la confiance et l’envie de faire mieux ensemble.</p>
          </div>

          <div className="skills-panel" ref={skillsRef}>
            <div className="skills-block">
              <p className="eyebrow">Hard skills</p>
              <div className="skills-cloud" aria-label="Hard skills">
                {hardSkills.map((skill, index) => <SkillWord key={skill} index={index}>{skill}</SkillWord>)}
              </div>
            </div>
            <div className="skills-block">
              <p className="eyebrow">Soft skills</p>
              <div className="skills-cloud" aria-label="Soft skills">
                {softSkills.map((skill, index) => <SkillWord key={skill} index={index}>{skill}</SkillWord>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
