export function About() {
  const skills = [
    ["01", "Stratégie & pilotage", "Plans marketing, activation, KPI, budgets, business"],
    ["02", "Brand experience", "Événementiel, lancements, expériences clients"],
    ["03", "Digital & acquisition", "Social media, CRM, Google Ads, contenu, influence"],
    ["04", "Partenariats", "Sponsoring, collaborations, activations locales"],
    ["05", "Management & One Team", "Fédérer, coordonner, donner un cap et faire avancer les équipes ensemble"],
  ];

  const hardSkills = ["Pack Office", "Adobe Creative Cloud", "Google Ads", "WordPress", "Social Media", "CRM"];
  const softSkills = ["Créatif", "Dynamique", "Souriant", "Esprit d’équipe", "Passionné", "Polyvalent"];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <div>
            <div className="section-marker"><i /></div>
            <h2>Une vision créative,<br /><em>pilotée pour le business.</em></h2>
          </div>
          <p className="about-header-lead">Le marketing crée de la préférence, de l’engagement et, surtout, des opportunités de croissance.</p>
        </div>

        <div className="about-principles">
          <div className="about-principle">
            <span className="principle-icon">↗</span>
            <div><strong>Créer de l’envie</strong><span>Une marque doit se vivre autant qu’elle se regarde.</span></div>
          </div>
          <div className="about-principle">
            <span className="principle-icon">◎</span>
            <div><strong>Piloter par les KPI</strong><span>Chaque activation se pense avec des objectifs et des indicateurs clairs.</span></div>
          </div>
          <div className="about-principle">
            <span className="principle-icon">⌁</span>
            <div><strong>Faire en équipe</strong><span>One Team, coordination et management pour transformer l’ambition en résultat.</span></div>
          </div>
        </div>

        <div className="about-body">
          <div>
            <p className="about-lead">Je relie stratégie, créativité, expérience client et performance pour faire avancer une marque.</p>
            <p className="about-secondary">Mon parcours m’a fait passer du divertissement à l’automobile et aux univers premium. J’aime passer de l’idée au terrain, connecter les équipes et garder une lecture simple : pourquoi le fait-on, pour qui, et quel impact doit-on créer ?</p>
            <p className="about-secondary"><strong>Les KPI sont un réflexe, pas une finalité.</strong> Ils permettent de comprendre ce qui fonctionne, d’optimiser les dispositifs et de relier le marketing aux enjeux business.</p>
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

        <div className="expertise-list">
          {skills.map(([number, title, text]) => (
            <div className="expertise" key={number}>
              <span className="expertise-number">{number}</span>
              <strong>{title}</strong>
              <span className="expertise-detail">{text}</span>
              <span className="expertise-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
