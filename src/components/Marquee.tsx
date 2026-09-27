import { profile } from "@/data/profile";

export default function Marquee() {
  // Rendered twice so the loop is seamless.
  const items = [...profile.tech, ...profile.tech];

  return (
    <div className="marquee" aria-label="Technologies">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="mono" aria-hidden={i >= profile.tech.length}>
            {t} <span className="accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
