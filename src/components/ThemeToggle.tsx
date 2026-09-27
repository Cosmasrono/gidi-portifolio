"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ?? "dark";
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button type="button" className="btn btn-ghost icon-btn" onClick={toggle} aria-label="Toggle colour theme">
      ◐
    </button>
  );
}
