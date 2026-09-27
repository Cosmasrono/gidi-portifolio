import Link from "next/link";
import { projects } from "@/data/profile";

export default function ProjectList() {
  return (
    <div className="case-grid">
      {projects.map((p, i) => (
        <article key={p.slug} className="case-card">
          <div className={`project-visual project-visual-${p.slug}`} aria-hidden="true">
            <div className="project-visual-label mono">{i === 0 ? "SYSTEM INTEGRATION" : p.category.toUpperCase()}</div>
            {i === 0 ? (
              <div className="integration-flow mono">
                <span className="flow-node"><span className="flow-symbol">&lt;/&gt;</span>IPOA portal</span>
                <span className="flow-connector">↔<small>Data exchange</small></span>
                <span className="flow-node"><span className="flow-symbol">▤</span>Business Central</span>
              </div>
            ) : (
              <div className="project-motif mono">
                <span>{({ "alip-suppliers": "</>", "gis-mapping": "◎", "hackathon-prototypes": "{ }", "ai-models": "ƒ(x)", "web-apps": "</>" } as Record<string, string>)[p.slug] ?? "</>"}</span>
                <div>{p.slug === "alip-suppliers" ? <><span>alipsuppliers.co.ke</span><span>Business website</span></> : p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </div>
            )}
          </div>
          <div className="case-top">
            <span className="tag mono">{p.category}</span>
            <span className="mono muted">
              {String(i + 1).padStart(2, "0")}{p.year && ` · ${p.year}`}
            </span>
          </div>

          <h3>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </h3>

          <p className="muted">{p.summary}</p>
          <p className="project-role mono">{p.role}</p>

          {i === 0 && <dl className="psi featured-details">
            <div><dt className="mono">Problem</dt><dd>{p.problem}</dd></div>
            <div><dt className="mono">Solution</dt><dd>{p.solution}</dd></div>
            <div><dt className="mono">Impact</dt><dd>{p.impact}</dd></div>
          </dl>}

          <div className="case-foot">
            {p.stack.length > 0 && <ul className="stack">
              {p.stack.map((s) => (
                <li key={s} className="mono">
                  {s}
                </li>
              ))}
            </ul>}
            {p.links?.map(link => (
              <a key={link.href} href={link.href} className="read-more" target="_blank" rel="noreferrer">{link.label} ↗</a>
            ))}
            <Link href={`/projects/${p.slug}`} className="read-more">
              Case study →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
