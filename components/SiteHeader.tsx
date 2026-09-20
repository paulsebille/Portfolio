import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Paul Sebille — accueil">
          <strong>Paul Sebille</strong>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          <Link href="/#work">Projets</Link>
          <Link href="/#about">À propos</Link>
          <a href="mailto:paul.sebille2@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
