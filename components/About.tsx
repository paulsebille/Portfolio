export function About() {
  const skills = [
    ["01", "Stratégie & pilotage", "Plans marketing, activation, KPI, budgets, business"],
    ["02", "Brand experience", "Événementiel, lancements, expériences clients"],
    ["03", "Digital & acquisition", "Social media, CRM, Google Ads, contenu, influence"],
    ["04", "Partenariats", "Sponsoring, collaborations, activations locales"],
    ["05", "Management & One Team", "Fédérer, coordonner, faire avancer les équipes ensemble"],
  ];

  const hardSkills = ["Pack Office", "Adobe Creative Cloud", "Google Ads", "WordPress", "Social Media", "CRM"];
  const softSkills = ["Créatif", "Dynamique", "Souriant", "Esprit d’équipe", "Passionné", "Polyvalent"];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <div>
            <div className="section-marker"><i /></div>
            <h2>Une vision créative,<br /><em>pilotée par le business.</em></h2>
          </div>
          <p className="about-header-lead">Une idée n’a de valeur que lorsqu’elle devient une expérience, qu’elle rencontre un public et qu’elle produit un impact mesurable.</p>
        </div>

        <div className="about-kpis">
          <div><strong>48,4M</strong><span>impressions · CANNESERIES</span></div>
          <div><strong>412</strong><span>leads · CUPRA × Nice Jazz</span></div>
          <div><strong>36</strong><span>essais · Audi × CANNESERIES</span></div>
          <div><strong>8</strong><span>ventes · Audi × CANNESERIES</span></div>
        </div>

        <div className="about-body">
          <div>
            <p className="about-lead">Je conçois les marques comme des univers à faire vivre — mais toujours avec un œil sur ce qu’ils doivent générer pour le business.</p>
            <p className="about-secondary">Mon parcours m’a fait passer du divertissement à l’automobile et aux univers premium. J’interviens de la stratégie au terrain, en faisant dialoguer créativité, expérience client, contenu, digital, partenariats et performance.</p>
            <p className="about-secondary">J’aime surtout construire avec les autres : créer une dynamique <strong>One Team</strong>, donner un cap clair, faire grandir les équipes et transformer une ambition commune en résultats concrets.</p>
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
