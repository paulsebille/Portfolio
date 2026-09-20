import Image from "next/image";

export function Hero() {
  return (
    <section className="hero hero-cinematic" aria-label="Introduction">
      <Image
        src="/images/paul-sebille.jpg"
        alt="Paul Sebille"
        fill
        priority
        sizes="100vw"
        className="hero-bg"
      />
      <div className="hero-vignette" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-top hero-top-overlay">
          <span>PAUL SEBILLE</span>
          <span>MARKETING · BRAND · EXPERIENCE</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">Responsable Marketing</p>
            <h1>
              Marketing <span>&amp;</span>
              <br />
              Brand.
            </h1>
          </div>

          <div className="hero-side-copy">
            <span className="hero-location">Nice · Côte d’Azur</span>
            <span className="hero-experience-word">Experience.</span>
          </div>
        </div>

        <div className="hero-bottom hero-bottom-overlay">
          <p>
            Du divertissement à l’automobile, j’imagine et pilote des dispositifs
            qui connectent les marques à leurs publics — de la stratégie à
            l’exécution, du concept au résultat.
          </p>
          <a href="#work" className="hero-scroll">
            <span>Découvrir les projets</span>
            <span className="hero-scroll-dot" />
          </a>
        </div>
      </div>
    </section>
  );
}
