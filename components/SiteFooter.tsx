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
            <span className="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span>
            <span><small>Email</small><strong>paul.sebille2@gmail.com</strong></span>
          </a>
          <a href="tel:0663512142" aria-label="Appeler Paul Sebille">
            <span className="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7.5 3.5h3l1.5 4-2.2 1.8a15 15 0 0 0 5 5l1.8-2.2 4 1.5v3c0 1.1-.9 2-2 2C10.5 18.6 5.4 13.5 4.4 5.5c-.1-1.1.8-2 1.9-2Z"/></svg></span>
            <span><small>Téléphone</small><strong>06 63 51 21 42</strong></span>
          </a>
          <a href="https://www.linkedin.com/in/paulsebille/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Paul Sebille">
            <span className="footer-contact-icon linkedin-icon" aria-hidden="true"><span>in</span></span>
            <span><small>LinkedIn</small><strong>linkedin.com/in/paulsebille</strong></span>
          </a>
        </div>

        <div className="footer-bottom"><span>© {new Date().getFullYear()} Paul Sebille</span></div>
      </div>
    </footer>
  );
}
