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
            <span className="creative-label label-two">EXPÉRIENCE</span>
            <span className="creative-label label-three">IMPACT</span>
          </div>
          <div className="about-hero-copy">
            <h2>
              <span><strong>Je donne un cap au marketing.</strong></span>
              <span><strong>Je fédère les équipes.</strong></span>
              <span><em>Je transforme la vision en résultats.</em></span>
            </h2>
          </div>
        </div>

        <div className="about-manifesto">
          <p>Je définis les priorités, aligne les expertises et donne à chaque projet les conditions pour avancer — de la stratégie au terrain, jusqu’à la mesure des résultats.</p>
          <span>Stratégie, créativité, One Team, performance : quatre leviers qui structurent ma démarche.</span>
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
            <div className="about-team-visual">
              <svg className="team-support-illustration" viewBox="0 0 600 520" role="img" aria-label="Trois personnes réunies, qui avancent et se soutiennent en équipe">
                <ellipse cx="300" cy="447" rx="185" ry="16" fill="#8d785d" opacity=".10" />
                <circle cx="300" cy="226" r="174" fill="none" stroke="#8d785d" strokeOpacity=".13" />
                <path d="M132 419c4-68 30-117 76-133 24-8 48 1 68 21" fill="none" stroke="#ad9879" strokeWidth="39" strokeLinecap="round" />
                <path d="M468 419c-4-68-30-117-76-133-24-8-48 1-68 21" fill="none" stroke="#ad9879" strokeWidth="39" strokeLinecap="round" />
                <path d="M172 292c20 55 66 76 119 73m137-73c-20 55-66 76-119 73" fill="none" stroke="#8d785d" strokeWidth="13" strokeLinecap="round" />
                <path d="M226 425c4-89 31-143 74-143s70 54 74 143" fill="#c9b595" />
                <path d="M263 297c-17 25-26 55-28 90m102-90c17 25 26 55 28 90" fill="none" stroke="#8d785d" strokeWidth="12" strokeLinecap="round" />
                <circle cx="300" cy="224" r="32" fill="#9d8666" />
                <circle cx="208" cy="252" r="25" fill="#c1ad8e" />
                <circle cx="392" cy="252" r="25" fill="#c1ad8e" />
                <path d="M300 153v-18m-116 54-13-12m245 12 13-12" stroke="#9d8666" strokeWidth="3" strokeLinecap="round" opacity=".65" />
              </svg>
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
              <span className="skills-editorial-title">Faire avancer les projets.</span>
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
