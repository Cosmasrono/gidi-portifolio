import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { profile, projects } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

const pad = (n: number) => String(n).padStart(2, "0");

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: `${project.title} — ${profile.name}`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) notFound();
  const project = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main id="main-content" className="case">
      <Link href="/#work" className="back mono">
        ← All projects
      </Link>

      <header className="case-head">
        <div className="case-top">
          <span className="tag mono">{project.category}</span>
          <span className="mono muted">
            {pad(i + 1)} / {pad(projects.length)}
          </span>
        </div>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
      </header>

      <dl className="meta">
        {project.year && <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>}
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        {project.stack.length > 0 && <div>
          <dt>Stack</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>}
        {project.links?.length ? (
          <div>
            <dt>Links</dt>
            <dd className="links">
              {project.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>

      <dl className="psi psi-wide">
        <div className="card">
          <dt className="mono">Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div className="card">
          <dt className="mono">Solution</dt>
          <dd>{project.solution}</dd>
        </div>
        <div className="card">
          <dt className="mono">Impact</dt>
          <dd>{project.impact}</dd>
        </div>
      </dl>

      <h2 className="subhead mono">Overview</h2>
      <div className="prose">
        {project.description.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <h2 className="subhead mono">Highlights</h2>
      <ul className="highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <Link href={`/projects/${next.slug}`} className="next">
        <span className="mono muted">Next project</span>
        <span className="next-title">{next.title} →</span>
      </Link>
    </main>
  );
}
