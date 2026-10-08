"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ProjectGalleryCarousel({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const slideWidth = track.clientWidth;
      if (!slideWidth) return;
      setActive(Math.round(track.scrollLeft / slideWidth));
    };
    track.addEventListener("scroll", update, { passive: true });
    return () => track.removeEventListener("scroll", update);
  }, []);

  const goTo = (index: number) => {
    const slide = trackRef.current?.querySelectorAll<HTMLElement>(".project-gallery-slide")[index];
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  if (!images.length) return null;

  return (
    <div className="project-gallery-carousel">
      <div className={`project-gallery-track${images.length === 1 ? " is-single" : ""}`} ref={trackRef} aria-label={`Galerie photo — ${title}`}>
        {images.map((image, index) => (
          <figure className={`project-gallery-slide${/(?:canneseries-(?:car|pink-carpet|arrival)\.jpg|audi-f1-(?:closeup|visitors|showcar|r26-reveal|front|event)\.webp)$/.test(image) ? " project-gallery-slide-portrait" : ""}`} key={`${image}-${index}`}>
            <Image
              src={image}
              alt={`${title} — photo ${index + 1}`}
              fill
              sizes="(max-width: 800px) 92vw, 1200px"
              priority={index === 0}
            />
          </figure>
        ))}
      </div>
      <div className="project-gallery-controls">
        <div className="project-gallery-progress" role="tablist" aria-label="Choisir une photo">
          {images.map((image, index) => (
            <button
              key={`${image}-dot-${index}`}
              className={index === active ? "is-active" : ""}
              type="button"
              role="tab"
              aria-label={`Afficher la photo ${index + 1}`}
              aria-selected={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <div className="project-gallery-arrows">
          <button type="button" onClick={() => goTo(Math.max(0, active - 1))} disabled={active === 0} aria-label="Photo précédente">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 6.5 9 12l5.5 5.5" /></svg>
          </button>
          <button type="button" onClick={() => goTo(Math.min(images.length - 1, active + 1))} disabled={active === images.length - 1} aria-label="Photo suivante">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9.5 6.5 15 12l-5.5 5.5" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
