import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  const github = profile.socials.find(s => s.label === "GitHub");
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-eyebrow mono">HELLO, WORLD. I'M</p>
        <h1>{profile.name.split(" ")[0]}<br /><em>{profile.name.split(" ").slice(1).join(" ")}</em></h1>
        <p className="hero-role mono">{profile.role} <span className="muted">/ {profile.location}</span></p>
        <p className="hero-intro">{profile.headline}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary btn-lg">Explore my work ↗</a>
          {github ? <a href={github.href} className="btn btn-lg" target="_blank" rel="noreferrer">GitHub ↗</a> : <Link href={profile.resumeUrl} className="btn btn-lg">View résumé ↗</Link>}
        </div>
        <div className="hero-resume mono">
          <Link href={profile.resumeUrl}>Read my résumé <span aria-hidden>↗</span></Link>
          <a href={profile.resumePdf} download>Download PDF <span aria-hidden>↓</span></a>
        </div>
        {profile.available && <p className="hero-status mono"><span className="dot" /> {profile.status}</p>}
      </div>
      <div className="editor" aria-label="Developer profile">
        <div className="editor-bar"><span className="window-dots" aria-hidden><i /><i /><i /></span><span className="mono muted">portfolio / src</span></div>
        <div className="editor-tab mono"><span className="code-blue">TS</span> developer.ts <span className="muted" aria-hidden>×</span></div>
        <div className="code-body mono">
          <div><span className="code-comment">// The person behind the code</span></div>
          <div><span className="code-purple">const</span> developer = {'{'}</div>
          <div>{'  '}name: <span className="code-green">&quot;{profile.name}&quot;</span>,</div>
          <div>{'  '}role: <span className="code-green">&quot;Software Developer&quot;</span>,</div>
          <div>{'  '}location: <span className="code-green">&quot;Kenya&quot;</span>,</div>
          <div>{'  '}languages: [</div>
          <div>{'    '}<span className="code-green">&quot;Python&quot;, &quot;PHP&quot;, &quot;JavaScript&quot;</span></div>
          <div>{'  '}],</div>
          <div>{'  '}focus: <span className="code-green">&quot;Useful software&quot;</span>,</div>
          <div>{'  '}openToWork: <span className="code-purple">{String(profile.available)}</span></div>
          <div>{'};'}</div>
        </div>
        <div className="editor-bottom mono"><span><span className="accent">⑂</span> main</span><span>TypeScript · UTF-8</span></div>
      </div>
    </section>
  );
}
