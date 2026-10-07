"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      style={{ "--header-mx": pointer.x, "--header-my": pointer.y } as CSSProperties}
    >
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Paul Sebille — accueil">
          <strong>Paul Sebille</strong>
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          <Link href="/#work">Projets</Link>
          <Link href="/#about">À propos</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
