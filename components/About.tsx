"use client";

import { useEffect, useRef, useState } from "react";

const principles = [
  ["Stratégie", "Donner un cap, poser les objectifs et construire un dispositif qui sert vraiment la marque."],
  ["Créativité", "Créer des idées désirables, des expériences qui se vivent et des univers qui restent."],
  ["One Team", "Faire avancer les équipes ensemble, coordonner, fédérer et manager avec une énergie collective."],
  ["Performance", "Les KPI ne sont pas une finalité : ils permettent de décider, d’optimiser et de faire grandir le business."],
];

const hardSkills = ["Pack Office", "Adobe Creative Cloud", "Google Ads", "WordPress", "Social Media", "CRM"];
const softSkills = ["Créatif", "Dynamique", "Souriant", "Esprit d’équipe", "Passionné", "Polyvalent"];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`${className}${visible ? " is-visible" : ""}`}>{children}</div>;
}

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-copy">
            <h2>
              <span>Une vision créative.</span>
              <span>Une énergie collective.</span>
              <span>Un impact qui compte.</span>
            </h2>
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

        <div className="about-principles-editorial">
          {principles.map(([title, text], index) => (
            <Reveal className="about-principle-row" key={title}>
              <span className="about-principle-number">0{index + 1}</span>
              <strong className="about-principle-title">{title}</strong>
              <span className="about-principle-detail">{text}</span>
              <span className="about-principle-arrow" aria-hidden="true">↗</span>
            </Reveal>
          ))}
        </div>

        <div className="about-body">
          <div className="about-story">
            <p className="eyebrow">Ma façon de travailler</p>
            <p className="about-lead">J’aime passer de l’idée au terrain, faire travailler les expertises ensemble et garder une lecture simple : <em>pourquoi, pour qui, avec quel impact ?</em></p>
            <p className="about-secondary">Mon parcours entre divertissement, automobile et univers premium m’a appris à conjuguer exigence créative, expérience client et réalité opérationnelle. Je crois aux équipes qui avancent en <strong>One Team</strong>, avec un cap clair, de la confiance et l’envie de faire mieux ensemble.</p>
          </div>
        </div>

        <div className="about-skills">
          <div className="about-skills-intro">
            <p className="eyebrow">Compétences</p>
            <p>Des outils pour produire, des qualités pour faire avancer les projets.</p>
          </div>
          <div className="skills-reveal-stack">
            <Reveal className="skills-block-reveal">
              <p className="eyebrow">Hard skills</p>
              <div className="skill-pills-editorial">
                {hardSkills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </Reveal>
            <Reveal className="skills-block-reveal">
              <p className="eyebrow">Soft skills</p>
              <div className="skill-pills-editorial">
                {softSkills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
