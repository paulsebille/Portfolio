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
    <main className="project-page project-detail">
      <section className="project-detail-intro container">
        <div className="project-detail-topline">
          <Link href="/#work" className="project-detail-back"><span aria-hidden="true">←</span> Tous les projets</Link>
          <span className="project-detail-kicker">{project.brand}<i />{project.year}</span>
        </div>
        <div className="project-detail-heading">
          <h1>{project.title}</h1>
          <div className="project-detail-context">
            <p>{project.intro}</p>
            <div className="project-detail-meta">
              <div><span>Mon rôle</span><strong>{project.role}</strong></div>
              <div><span>Expertises</span><strong>{project.categories.slice(0, 3).join(" · ")}</strong></div>
            </div>
          </div>
        </div>
      </section>

      {project.heroImage && (
        <section className="project-detail-hero container" aria-label={`Visuel principal — ${project.title}`}>
          <div className="project-detail-hero-image">
            <Image src={project.heroImage} alt={project.visualLabel ?? project.title} fill priority sizes="(max-width: 800px) 100vw, 1400px" />
            <span className="project-detail-image-label">{project.visualLabel ?? project.brand}</span>
          </div>
        </section>
      )}

      {project.results.length > 0 && (
        <section className="project-results-section container" aria-labelledby="project-results-title">
          <div className="project-section-heading">
            <div>
              <p className="project-detail-eyebrow">Les résultats</p>
              <h2 id="project-results-title">L’impact, <em>en chiffres.</em></h2>
            </div>
            <p>Des indicateurs concrets pour mesurer la portée de l’expérience.</p>
          </div>
          <div className="project-results-grid">
            {project.results.map((result, index) => (
              <article className="project-result-card" key={`${result.value}-${result.label}`}>
                <span className="project-result-index">{String(index + 1).padStart(2, "0")}</span>
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
              <p className="project-detail-eyebrow">L’idée, puis l’action</p>
              <h2>Une expérience <em>à chaque étape.</em></h2>
            </div>
            <p>{project.description}</p>
          </div>
          <div className="project-approach-grid">
            {project.approach.slice(0, 4).map((item, index) => (
              <article className="project-approach-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
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
              <p className="project-detail-eyebrow">En images</p>
              <h2>Les moments <em>forts.</em></h2>
            </div>
            <p>Un aperçu de l’expérience, sur le terrain.</p>
          </div>
          <ProjectGalleryCarousel title={project.title} images={gallery} />
        </section>
      )}

      <section className="project-detail-closing container">
        <div>
          <p className="project-detail-eyebrow">La suite</p>
          <h2>Un projet à <em>imaginer ?</em></h2>
        </div>
        <Link href="/#contact" className="project-detail-contact">Écrivons la suite <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
