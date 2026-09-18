export function About() {
  const expertise = [
    ["01", "Stratégie & planning", "Positionnement, plans marketing, activation"],
    ["02", "Brand experience", "Événementiel, expériences clients, lancements"],
    ["03", "Digital & contenu", "Social media, CRM, campagnes, influence"],
    ["04", "Partenariats", "Sponsoring, collaborations, activations"],
    ["05", "Pilotage", "Budget, KPI, agences, management"],
  ];

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">À propos</p>
          <h2>Des idées qui prennent vie.</h2>
        </div>
        <div>
          <p>
            Responsable Marketing, j’imagine et pilote des dispositifs qui
            connectent les marques à leurs publics — de la stratégie à
            l’exécution, du concept au résultat.
          </p>
          <div className="expertise-list">
            {expertise.map(([number, title, text]) => (
              <div className="expertise" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}