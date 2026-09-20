export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <p className="footer-kicker">Un projet, une ambition, une histoire à écrire.</p>
        <h2 className="footer-title">La suite mérite<br /><em>d’être imaginée.</em></h2>
        <a className="footer-cta" href="mailto:paul.sebille2@gmail.com"><span>Écrivons la suite ensemble</span><i>↗</i></a>

        <div className="footer-contact-grid">
          <a href="mailto:paul.sebille2@gmail.com" aria-label="Envoyer un email">
            <span className="footer-contact-icon" aria-hidden="true">✉</span>
            <span><small>Email</small><strong>paul.sebille2@gmail.com</strong></span>
          </a>
          <a href="tel:0663512142" aria-label="Appeler Paul Sebille">
            <span className="footer-contact-icon" aria-hidden="true">⌕</span>
            <span><small>Téléphone</small><strong>06 63 51 21 42</strong></span>
          </a>
          <a href="https://www.linkedin.com/in/paulsebille/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Paul Sebille">
            <span className="footer-contact-icon linkedin-icon" aria-hidden="true">in</span>
            <span><small>LinkedIn</small><strong>linkedin.com/in/paulsebille</strong></span>
          </a>
        </div>

        <div className="footer-bottom"><span>© {new Date().getFullYear()} Paul Sebille</span><span>Marketing · Brand Experience</span></div>
      </div>
    </footer>
  );
}
