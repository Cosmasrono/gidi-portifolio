import Link from "next/link";
import { profile } from "@/data/profile";

export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page">
      <header className="resume-header">
        <div>
          <p className="mono muted">Portfolio</p>
          <h1>{profile.name}</h1>
        </div>
        <Link href="/#about" className="btn">
          Back to profile
        </Link>
      </header>

      <div className="resume-shell">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="resume-frame"
          loading="lazy"
        />
      </div>
    </main>
  );
}
