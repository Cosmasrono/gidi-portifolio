import { profile } from "@/data/profile";
import LocalTime from "./LocalTime";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="id">
        <div className="mark" aria-hidden>
          {profile.initials}
        </div>
        <div>
          <p className="name">{profile.name}</p>
          <p className="muted">{profile.role}</p>
        </div>
      </div>

      <nav aria-label="Sections">
        <ol className="nav">
          {nav.map((n, i) => (
            <li key={n.href}>
              <a href={n.href}>
                <span className="mono muted">0{i + 1}</span> {n.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="status mono">
        {profile.available && (
          <p>
            <span className="dot" /> Open to work
          </p>
        )}
        <p className="muted">{profile.location}</p>
        <LocalTime timeZone={profile.timezone} />
        <div className="side-actions">
          <a href={profile.resumeUrl} className="btn">
            Résumé ↓
          </a>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
