import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectGalleryCarousel } from "@/components/ProjectGalleryCarousel";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const gallery = project.gallery?.length ? project.gallery : project.heroImage ? [project.heroImage] : [];

  return (
    <main className={`project-page project-detail project-detail-${project.slug}`}>
      <section className="project-detail-intro container">
        <div className="project-detail-topline">
          <Link href="/#work" className="project-detail-back"><span aria-hidden="true">←</span> Tous les projets</Link>
          <span className="project-detail-kicker">{project.brand}<i />{project.year}</span>
        </div>
        <div className={`project-detail-hero-layout${project.heroImage ? " has-image" : ""}`}>
          <div className="project-detail-heading">
            <h1>{project.title}</h1>
          </div>
          {project.heroImage && (
            <div className="project-detail-hero-image" aria-label={`Visuel principal — ${project.title}`}>
              <Image src={project.heroImage} alt={project.visualLabel ?? project.title} fill priority sizes="(max-width: 800px) 48vw, 680px" />
              <span className="project-detail-image-label">{project.visualLabel ?? project.brand}</span>
            </div>
          )}
        </div>
      </section>

      <section className="project-brief-section container" aria-labelledby="project-brief-title">
        <div className="project-brief-copy">
          <h2 id="project-brief-title" className="project-brief-title">En bref</h2>
          <p className="project-brief-text">{project.intro}</p>
        </div>
      </section>

      {project.results.length > 0 && (
        <section className="project-results-section container" aria-labelledby="project-results-title">
          <div className="project-section-heading">
            <div>
              <h2 id="project-results-title">Les chiffres clés</h2>
            </div>
          </div>
          <div className="project-results-grid">
            {project.results.map((result) => (
              <article className="project-result-card" key={`${result.value}-${result.label}`}>
                <strong>{result.value}</strong>
                <span className="project-result-label">{result.label}</span>
                {result.note && <span className="project-result-note">{result.note}</span>}
              </article>
            ))}
          </div>
        </section>
      )}

      {project.approach.length > 0 && (
        <section className="project-approach-section container">
          <div className="project-section-heading project-approach-heading">
            <div>
              <p className="project-detail-eyebrow">Le dispositif</p>
              <h2>De l’idée à <em>l’expérience.</em></h2>
            </div>
            <p>{project.description}</p>
          </div>
          <div className="project-approach-grid">
            {project.approach.slice(0, 4).map((item) => (
              <article className="project-approach-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="project-gallery-section container">
          <div className="project-gallery-heading project-section-heading">
            <div>
              <h2>Moments forts <em>en images.</em></h2>
            </div>
          </div>
          <ProjectGalleryCarousel title={project.title} images={gallery} />
        </section>
      )}

    </main>
  );
}
