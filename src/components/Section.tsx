type Props = {
  id: string;
  index: string;
  label: string;
  intro?: string;
  children: React.ReactNode;
};

export default function Section({ id, index, label, intro, children }: Props) {
  return (
    <section id={id} className="section">
      <header className="section-head">
        <span className="section-index mono">{index}</span>
        <h2>{label}</h2>
        {intro && <p className="muted section-intro">{intro}</p>}
      </header>
      {children}
    </section>
  );
}
