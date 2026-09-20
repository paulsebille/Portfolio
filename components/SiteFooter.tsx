export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="section-marker section-marker-light"><span>03</span><i /></div>
        <p className="footer-kicker">Un projet, une ambition, une histoire à écrire.</p>
        <h2 className="footer-title">La suite mérite<br /><em>d’être imaginée.</em></h2>
        <a className="footer-cta" href="mailto:paul.sebille2@gmail.com"><span>Écrivons la suite ensemble</span><i>↗</i></a>

        <div className="footer-contact-grid">
          <a href="mailto:paul.sebille2@gmail.com"><small>Email</small><strong>paul.sebille2@gmail.com</strong></a>
          <a href="tel:0663512142"><small>Téléphone</small><strong>06 63 51 21 42</strong></a>
          <a href="https://www.linkedin.com/in/paulsebille/" target="_blank" rel="noreferrer"><small>LinkedIn</small><strong>linkedin.com/in/paulsebille</strong></a>
        </div>

        <div className="footer-bottom"><span>© {new Date().getFullYear()} Paul Sebille</span><span>Nice · Côte d’Azur</span></div>
      </div>
    </footer>
  );
}
