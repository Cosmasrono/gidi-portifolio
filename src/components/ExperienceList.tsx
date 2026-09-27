import { experience } from "@/data/profile";

export default function ExperienceList() {
  return (
    <ol className="timeline">
      {experience.map((e) => (
        <li key={e.title + e.org}>
          <span className="timeline-dot" aria-hidden />
          <div className="timeline-body">
            <p className="timeline-title">
              {e.title} <span className="muted">· {e.org}</span>
            </p>
            <p className="mono accent">{e.period}</p>
            <p className="muted">{e.note}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
