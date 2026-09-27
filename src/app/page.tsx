import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectList from "@/components/ProjectList";
import ExperienceList from "@/components/ExperienceList";
import LocalTime from "@/components/LocalTime";
import SkillIcon from "@/components/SkillIcon";
import { certifications, profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <div className="hero-backdrop">
        <img className="hero-background-image" src="/images/tech-background.webp" alt="" aria-hidden="true" width={1672} height={941} fetchPriority="high" />
        <div className="container">
          <Hero />
        </div>
      </div>
      <div className="stack-strip"><div className="container"><span className="mono muted">MY TOOLKIT</span><ul>{["Python", "PHP", "JavaScript", "Git", "Business Central", "QGIS"].map(tool => <li key={tool} className="mono">{tool}</li>)}</ul></div></div>

      <main className="container" id="main-content">
        <Section id="work" index="01" label="Selected work" intro="Web applications, business integrations, and experiments. Here’s what I’ve been working on.">
          <ProjectList />
        </Section>

        <Section id="skills" index="02" label="Tools of the trade" intro="The tools and disciplines I bring to a team.">
          <div className="skill-grid">
            {profile.skillGroups.map((g, i) => (
              <div key={g.title} className="card">
                <div className="skill-heading"><SkillIcon index={i} /><h3 className="card-title">{g.title}</h3></div>
                <ul className="chips">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" index="03" label="Behind the code">
          <div className="about-grid">
            <div className="prose">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <aside className="card edu-card">
              <p className="mono muted">Education</p>
              <p className="edu-school">{profile.education.school}</p>
              <p>{profile.education.degree}</p>
              <p className="mono accent">{profile.education.period}</p>
            </aside>
          </div>
          <ul className="stats">
            {profile.stats.map((s) => (
              <li key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="mono muted">{s.label}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" index="04" label="Experience & learning">
          <ExperienceList />
        </Section>

        <Section id="certifications" index="05" label="Certifications">
          <ul className="cert-grid">
            {certifications.map((c) => (
              <li key={c.title} className="card">
                <span className="cert-icon" aria-hidden>
                  ✦
                </span>
                <p className="card-title">{c.title}</p>
                <p className="muted">{c.issuer}</p>
                <p className="mono accent">{c.year}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" index="06" label="Get in touch">
          <div className="contact-card">
            <div>
              <p className="contact-lead">
                Have a role or project in mind? <em>Let&apos;s talk.</em>
              </p>
              <p className="muted">
                I&apos;m {profile.status.toLowerCase()} — graduate roles, internships and freelance work.
              </p>
            </div>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
                {profile.email}
              </a>
              <div className="socials mono">
                {profile.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label} ↗
                  </a>
                ))}
              </div>
              <div className="mono muted contact-meta">
                <span>{profile.location}</span>
                <LocalTime timeZone={profile.timezone} />
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
