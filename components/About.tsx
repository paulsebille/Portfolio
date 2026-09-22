export function About() {
  const principles = [
    ["Stratégie", "Donner un cap, poser les objectifs et construire un dispositif qui sert vraiment la marque."],
    ["Créativité", "Créer des idées désirables, des expériences qui se vivent et des univers qui restent."],
    ["One Team", "Faire avancer les équipes ensemble, coordonner, fédérer et manager avec une énergie collective."],
    ["Performance", "Les KPI ne sont pas une finalité : ils permettent de décider, d’optimiser et de faire grandir le business."],
  ];

  const hardSkills = ["Pack Office", "Adobe Creative Cloud", "Google Ads", "WordPress", "Social Media", "CRM"];
  const softSkills = ["Créatif", "Dynamique", "Souriant", "Esprit d’équipe", "Passionné", "Polyvalent"];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">À propos</p>
            <h2>Une vision créative.<br /><em>Une énergie collective. Un impact qui compte.</em></h2>
            <p className="about-hero-line">Créer. Fédérer. Mesurer. Faire avancer.</p>
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
          {principles.map(([title, text], index) => (
            <article className="about-principle-card" key={title}>
              <span className="principle-index">0{index + 1}</span>
              <div className="principle-icon" aria-hidden="true">↗</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="about-body">
          <div className="about-story">
            <p className="eyebrow">Ma façon de travailler</p>
            <p className="about-lead">J’aime passer de l’idée au terrain, faire travailler les expertises ensemble et garder une lecture simple : <em>pourquoi, pour qui, avec quel impact ?</em></p>
            <p className="about-secondary">Mon parcours entre divertissement, automobile et univers premium m’a appris à conjuguer exigence créative, expérience client et réalité opérationnelle. Je crois aux équipes qui avancent en <strong>One Team</strong>, avec un cap clair, de la confiance et l’envie de faire mieux ensemble.</p>
          </div>

          <div className="skills-panel">
            <div className="skills-block">
              <p className="eyebrow">Hard skills</p>
              <div className="skill-pills">{hardSkills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
            <div className="skills-block">
              <p className="eyebrow">Soft skills</p>
              <div className="skill-pills">{softSkills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
