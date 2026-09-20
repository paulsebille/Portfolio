export function About() {
  const expertise = [
    ["01", "Stratégie & planning", "Positionnement, plans marketing, activation"],
    ["02", "Brand experience", "Événementiel, expériences clients, lancements"],
    ["03", "Digital & contenu", "Social media, CRM, campagnes, influence"],
    ["04", "Partenariats", "Sponsoring, collaborations, activations"],
    ["05", "Pilotage", "KPI, agences, prestataires, coordination"],
  ];

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-intro">
          <div className="section-marker"><span>02</span><i /></div>
          <h2>Donner une forme<br />à <em>l’idée.</em></h2>
          <div className="about-photo">
            <img src="/images/paul-sebille.jpg" alt="Paul Sebille" />
            <div className="about-photo-note"><span>À propos</span><span>Marketing · Experience</span></div>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">Je conçois les marques comme des univers à faire vivre — pas seulement comme des messages à diffuser.</p>
          <p className="about-secondary">Mon parcours m’a fait passer du divertissement à l’automobile et aux univers premium. J’y ai appris à penser chaque projet comme une rencontre : une idée claire, une exécution exigeante et une expérience qui laisse quelque chose derrière elle.</p>
          <p className="about-secondary">Aujourd’hui, j’interviens de la stratégie au terrain, en faisant dialoguer marketing, contenu, événementiel, influence, partenariats et business.</p>

          <div className="expertise-list">
            {expertise.map(([number, title, text]) => (
              <div className="expertise" key={number}>
                <span className="expertise-number">{number}</span>
                <strong>{title}</strong>
                <span className="expertise-detail">{text}</span>
                <span className="expertise-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
