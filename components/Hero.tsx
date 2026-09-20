import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-top">
          <span className="hero-eyebrow">PORTFOLIO · PAUL SEBILLE</span>
          <span className="hero-index">01 — 07</span>
        </div>

        <div className="hero-main">
          <div className="hero-copy-column">
            <div className="hero-title">
              <h1>
                <span className="hero-line">Marketing &</span>
                <span className="hero-line hero-line-indent">Brand</span>
                <span className="hero-line hero-line-italic">Experience.</span>
              </h1>
            </div>

            <div className="hero-bottom">
              <div className="hero-intro">
                <p>
                  Du divertissement à l’automobile, j’imagine et pilote des
                  dispositifs qui connectent les marques à leurs publics — de
                  la stratégie à l’exécution, du concept au résultat.
                </p>
                <p className="hero-statement">
                  Réinventer les codes.
                  <br />
                  Renouveler les expériences.
                  <br />
                  Imaginer la suite.
                </p>
              </div>
              <div className="hero-scroll">
                <span>Défiler</span>
                <span className="hero-scroll-line" />
              </div>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <Image
              src="/images/paul-sebille.jpg"
              alt="Paul Sebille"
              fill
              priority
              sizes="(max-width: 800px) 45vw, 27vw"
              className="hero-portrait"
            />
            <div className="hero-portrait-caption">
              <span>Paul Sebille</span>
              <span>Marketing · Brand · Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
