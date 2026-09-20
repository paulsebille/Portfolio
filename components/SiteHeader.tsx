import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Paul Sebille — accueil">
          <span>PAUL</span>
          <strong>SEBILLE</strong>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          <Link href="/#work"><span>01</span> Projets</Link>
          <Link href="/#about"><span>02</span> À propos</Link>
          <a href="mailto:paul.sebille2@gmail.com"><span>03</span> Contact</a>
        </nav>
      </div>
    </header>
  );
}
