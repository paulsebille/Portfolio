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
        <div className="hero-topline">
          <span>Nice · Côte d’Azur</span>
        </div>

        <div className="hero-stage">
          <div className="hero-portrait-wrap">
            <div className="hero-portrait-glow" />
            <div className="hero-portrait" style={{ transform: "translate3d(calc(var(--mx) * -7px), calc(var(--my) * -7px), 0)" }}>
              <Image
                src="/images/paul-sebille.jpg"
                alt="Paul Sebille"
                fill
                priority
                sizes="(max-width: 800px) 78vw, 470px"
                className="hero-portrait-image"
              />
              <div className="hero-portrait-shine" />
            </div>
            <span className="portrait-caption">Paul Sebille · 2026</span>
          </div>

          <div className="hero-title-wrap">
            <p className="hero-kicker">Responsable Marketing</p>
            <h1>
              <span>Marketing</span>
              <span className="hero-title-amp">&amp;</span>
              <span>Brand <i>Experience.</i></span>
            </h1>
            <div className="hero-title-meta">
              <span>Stratégie</span>
              <span>Créativité</span>
              <span>Expérience</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-statement">
            <span className="hero-statement-line" />
            <p>
              Du divertissement aux univers premium, j’imagine des expériences
              qui donnent aux marques une présence, une émotion et une histoire.
            </p>
          </div>
          <Link href="#work" className="hero-scroll">
            <span>Explorer</span>
            <span className="hero-scroll-circle">↓</span>
          </Link>
        </div>
      </div>
      <div className="hero-grain" aria-hidden="true" />
    </section>
  );
}
