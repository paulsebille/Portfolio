import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Link from "next/link";

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
          <Link href="/#work" className="back-link">← Retour aux projets</Link>
          <div className="project-kicker">{project.brand} · {project.year}</div>
          <h1>{project.title}</h1>
          <p className="project-intro">{project.intro}</p>
          <div className="project-meta">
            <div><span>Rôle</span>{project.role}</div>
            <div><span>Expertises</span>{project.categories.join(" · ")}</div>
          </div>
        </div>
      </section>

      <section className="project-visual">
        <div className="container">
          <div className="visual-placeholder large">
            <span>{project.brand}</span>
            <small>Ajouter votre visuel principal dans /public/images</small>
          </div>
        </div>
      </section>

      <section className="project-content container">
        <div className="content-main">
          <div>
            <p className="eyebrow">Le projet</p>
            <h2>Transformer une intention en expérience.</h2>
            <p>{project.description}</p>
          </div>

          <div className="content-block">
            <p className="eyebrow">Approche</p>
            <div className="content-grid">
              {project.approach.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="results-card">
          <p className="eyebrow">Résultats clés</p>
          {project.results.map((result) => (
            <div className="result" key={result.label}>
              <strong>{result.value}</strong>
              <span>{result.label}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="project-gallery container">
        {[1, 2, 3].map((n) => (
          <div className="visual-placeholder" key={n}>
            <span>{project.brand}</span>
            <small>Visuel {n}</small>
          </div>
        ))}
      </section>

      <div className="container project-next">
        <Link href="/#work" className="button">Voir tous les projets</Link>
      </div>
    </main>
  );
}