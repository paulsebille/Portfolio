import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">PAUL SEBILLE</Link>
        <nav className="nav">
          <Link href="/#work">Projets</Link>
          <Link href="/#about">À propos</Link>
          <a href="mailto:contact@paulsebille.fr">Contact</a>
        </nav>
      </div>
    </header>
  );
}