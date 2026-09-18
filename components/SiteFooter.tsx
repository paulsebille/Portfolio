export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-title">
            Construisons des expériences de marque qui restent.
          </div>
          <div className="footer-links">
            <a href="mailto:contact@paulsebille.fr">Email ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Paul Sebille</span>
          <span>Marketing · Brand Experience · Digital</span>
        </div>
      </div>
    </footer>
  );
}