import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="project-page">
      <section className="project-hero project-hero-compact">
        <div className="container">
          <Link href="/#work" className="back-link">← Projets</Link>
          <div className="project-kicker">{project.brand} · {project.year}</div>
        </div>
      </section>

      <section className="project-visual project-visual-feature">
        <div className="container">
          <div className="project-hero-image">
            {project.heroImage ? (
              <Image src={project.heroImage} alt={project.title} fill priority sizes="(max-width: 800px) 100vw, 1240px" />
            ) : (
              <Image src="/images/disney-plus.webp" alt="Disney+" fill priority sizes="(max-width: 800px) 100vw, 1240px" />
            )}
            <div className="project-image-shade" />
            <div className="project-image-copy">
              <span>{project.visualLabel ?? project.brand}</span>
              <h1>{project.title}</h1>
              <p>{project.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-facts container">
        <div className="project-meta">
          <div><span>Rôle</span>{project.role}</div>
          <div><span>Expertises</span>{project.categories.join(" · ")}</div>
        </div>
        {project.results.length > 0 && (
          <div className="project-kpi-strip">
            {project.results.slice(0, 5).map((result) => (
              <div className="project-kpi" key={`${result.value}-${result.label}`}>
                <strong>{result.value}</strong>
                <span>{result.label}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="project-content project-content-tight container">
        <div className="content-main">
          <div className="project-summary">
            <p className="eyebrow">L’idée</p>
            <p className="project-description">{project.description}</p>
          </div>

          <div className="content-block">
            <p className="eyebrow">Le dispositif</p>
            <div className="content-grid">
              {project.approach.slice(0, 4).map((item) => (
                <article key={item.title} className="approach-item approach-item-clean">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery container">
          <div className="project-gallery-heading">
            <p className="eyebrow">En images</p>
            <span>Quelques fragments de l’expérience.</span>
          </div>
          <div className="project-gallery-grid">
            {project.gallery.map((image, index) => (
              <div className={`gallery-image gallery-image-${index + 1}`} key={`${image}-${index}`}>
                <Image src={image} alt={`${project.title} — visuel ${index + 1}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="project-closing container">
        <p className="eyebrow">La suite</p>
        <p className="project-closing-text">Un autre projet à imaginer ?</p>
        <Link href="/#contact" className="button">Écrivons la suite →</Link>
      </section>
    </main>
  );
}
