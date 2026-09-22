import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="container">
          <Link href="/#work" className="back-link">← Tous les projets</Link>
          <div className="project-kicker">{project.brand} · {project.year}</div>
          <h1>{project.title}</h1>
          <p className="project-intro">{project.intro}</p>

          <div className="project-meta">
            <div><span>Rôle</span>{project.role}</div>
            <div><span>Expertises</span>{project.categories.join(" · ")}</div>
          </div>

          {project.results.length > 0 && (
            <div className="project-kpi-strip">
              {project.results.slice(0, 4).map((result) => (
                <div className="project-kpi" key={`${result.value}-${result.label}`}>
                  <strong>{result.value}</strong>
                  <span>{result.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="project-visual">
        <div className="container">
          {project.heroImage ? (
            <div className="project-hero-image">
              <Image src={project.heroImage} alt={project.title} fill priority sizes="(max-width: 800px) 100vw, 1240px" />
              <div className="project-hero-image-label">{project.visualLabel ?? project.brand}</div>
            </div>
          ) : (
            <div className="project-brand-visual">
              <Image src="/images/disney-plus.webp" alt="Disney+" fill priority sizes="(max-width: 800px) 100vw, 1240px" />
              <div className="project-brand-overlay" />
              <div className="project-brand-copy">
                <span>{project.visualLabel ?? project.brand}</span>
                <small>Une expérience pensée pour créer de l’attention, de l’émotion et du lien.</small>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="project-content container">
        <div className="content-main">
          <div className="project-summary">
            <p className="eyebrow">Le projet</p>
            <h2>{project.slug === "canneseries-audi" ? "Transformer un partenariat en plateforme d’expérience." : project.title}</h2>
            <p>{project.description}</p>
          </div>

          <div className="content-block">
            <p className="eyebrow">Ce qui a été construit</p>
            <div className="content-grid">
              {project.approach.slice(0, 4).map((item, index) => (
                <div key={item.title} className="approach-item">
                  <span className="approach-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {project.results.length > 0 && (
          <aside className="results-card">
            <p className="eyebrow">Impact & KPIs</p>
            {project.results.map((result) => (
              <div className="result" key={`${result.value}-${result.label}`}>
                <strong>{result.value}</strong>
                <span>{result.label}</span>
                {result.note && <small>{result.note}</small>}
              </div>
            ))}
          </aside>
        )}
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery container">
          {project.gallery.map((image, index) => (
            <div className={`gallery-image gallery-image-${index + 1}`} key={image}>
              <Image src={image} alt={`${project.title} — visuel ${index + 1}`} fill sizes="(max-width: 800px) 100vw, 60vw" />
            </div>
          ))}
        </section>
      )}

      <section className="project-closing container">
        <p className="eyebrow">Mon rôle</p>
        <p className="project-closing-text">{project.role} · {project.categories.join(" · ")}</p>
        <Link href="/#contact" className="button">Parlons du prochain projet ↗</Link>
      </section>
    </main>
  );
}
