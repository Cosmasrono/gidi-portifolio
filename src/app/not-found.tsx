import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="case">
      <h1>Page not found</h1>
      <p className="lede">That page doesn&apos;t exist.</p>
      <Link href="/" className="back mono">
        ← Back home
      </Link>
    </main>
  );
}
