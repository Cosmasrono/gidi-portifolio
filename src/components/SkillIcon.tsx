const paths = [
  "m8 5-6 7 6 7m8-14 6 7-6 7m-3-17-2 20",
  "M3 3h7v7H3zM14 14h7v7h-7zM14 6h4v5M6 14v4h5",
  "m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15",
  "M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4Zm-4 10 3 3 5-6",
  "M3 20V4m0 16h18M6 16l4-5 4 2 6-8",
  "M3 4h18v13H8l-5 4V4Zm4 5h10M7 13h6",
];

export default function SkillIcon({ index }: { index: number }) {
  return <span className="skill-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={paths[index % paths.length]} /></svg></span>;
}
