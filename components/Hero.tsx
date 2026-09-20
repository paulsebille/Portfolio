import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-inner">
        <div className="hero-top">
          <span>PAUL SEBILLE · PORTFOLIO</span>
          <span>MARKETING · BRAND · EXPERIENCE</span>
        </div>

        <div className="hero-stage">
          <div className="hero-title-block">
            <p className="hero-kicker">Responsable Marketing</p>
            <h1>
              <span className="hero-line">Marketing &amp;</span>
              <span className="hero-line hero-line-indent">Brand</span>
            </h1>
          </div>

          <div className="hero-portrait-wrap">
            <Image
              src="/images/paul-sebille.jpg"
              alt="Paul Sebille"
              fill
              priority
              sizes="(max-width: 800px) 70vw, 24vw"
              className="hero-portrait"
            />
            <div className="hero-portrait-caption">
              <span>Paul Sebille</span>
              <span>Nice · Côte d’Azur</span>
            </div>
          </div>

          <div className="hero-experience">
            <span className="hero-experience-word">Experience.</span>
            <span className="hero-experience-line" />
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-intro">
            <p>
              Du divertissement à l’automobile, j’imagine et pilote des
              dispositifs qui connectent les marques à leurs publics — de la
              stratégie à l’exécution, du concept au résultat.
            </p>
          </div>
          <div className="hero-scroll">
            <span>Défiler</span>
            <span className="hero-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
