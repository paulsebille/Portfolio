"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      className="hero"
      aria-label="Introduction"
      style={{ "--mx": pointer.x, "--my": pointer.y } as CSSProperties}
    >
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-inner">
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="hero-kicker">Responsable Marketing · Brand Experience</p>
            <h1>
              <span>Marketing &amp;</span>
              <span>Brand <i>Experience.</i></span>
            </h1>
            <div className="hero-intro">
              <p className="hero-intro-quote">J’ai appris à faire rêver. Aujourd’hui, je veux prendre part à votre histoire.</p>
              <p className="hero-intro-body">Du divertissement aux univers premium, mon parcours m’a appris une chose : les marques les plus fortes savent se réinventer sans perdre ce qui les rend uniques. Réinventer les codes. Renouveler les expériences. Imaginer la suite.</p>
            </div>
            <Link href="#work" className="hero-scroll">
              <span>Explorer les projets</span>
              <span className="hero-scroll-circle">↓</span>
            </Link>
          </div>

          <div className="hero-portrait-wrap">
            <div className="hero-portrait-glow" />
            <div className="hero-portrait" style={{ transform: "translate3d(calc(var(--mx) * -6px), calc(var(--my) * -6px), 0)" }}>
              <Image
                src="/images/paul-sebille.jpg"
                alt="Paul Sebille"
                fill
                priority
                sizes="(max-width: 800px) 76vw, 540px"
                className="hero-portrait-image"
              />
              <div className="hero-portrait-shine" />
            </div>
            <span className="portrait-caption">Paul Sebille · 2026</span>
          </div>
        </div>
      </div>
      <div className="hero-grain" aria-hidden="true" />
    </section>
  );
}
