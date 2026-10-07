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
          <div className="about-creative-visual" aria-hidden="true">
            <span className="creative-ring ring-one" />
            <span className="creative-ring ring-two" />
            <span className="creative-ring ring-three" />
            <span className="creative-orbit orbit-one" />
            <span className="creative-orbit orbit-two" />
            <span className="creative-spark spark-one">✦</span>
            <span className="creative-spark spark-two">✦</span>
            <span className="creative-core" aria-label="Étincelle créative">✳</span>
            <span className="creative-label label-one">IDÉE</span>
            <span className="creative-label label-two">EXPERIENCE</span>
            <span className="creative-label label-three">IMPACT</span>
          </div>
          <div className="about-hero-copy">
            <h2>
              <span><strong>Une vision créative.</strong></span>
              <span><strong>Une énergie collective.</strong></span>
              <span><em>Un impact qui compte.</em></span>
            </h2>
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

        <div className="about-lower">
          <article className="about-work-card">
            <div className="about-team-visual" aria-hidden="true">
              <span className="team-art-mark">✳</span>
              <i className="team-orbit-dot dot-one" />
              <i className="team-orbit-dot dot-two" />
              <i className="team-orbit-dot dot-three" />
            </div>
            <div className="about-work-copy">
              <p className="eyebrow">Ma façon de travailler</p>
              <h3>De l’idée au terrain.</h3>
              <p>Je fais travailler les expertises ensemble avec une lecture simple : <em>pourquoi, pour qui, avec quel impact ?</em></p>
              <small className="about-one-team">#OneTeam</small>
            </div>
          </article>

          <article className="about-skills-card">
            <div className="skills-card-head">
              <p className="eyebrow">Compétences</p>
              <span className="skills-editorial-title">Ce qui fait avancer<br />les projets.</span>
            </div>
            <div className="skills-showcase">
              <Reveal className="skills-showcase-group">
                <div className="skills-showcase-title"><span>✦</span><strong>Hard skills</strong></div>
                <div className="skill-pills-editorial">
                  {hardSkills.map(skill => <span key={skill}>{skill}</span>)}
                </div>
              </Reveal>
              <Reveal className="skills-showcase-group">
                <div className="skills-showcase-title"><span>◌</span><strong>Soft skills</strong></div>
                <div className="skill-pills-editorial">
                  {softSkills.map(skill => <span key={skill}>{skill}</span>)}
                </div>
              </Reveal>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
