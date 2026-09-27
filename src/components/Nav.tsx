"use client";

import { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-bar">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label={`${profile.name}, home`}>
          <span className="mark">&lt;{profile.initials} /&gt;</span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <nav aria-label="Sections">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link href={profile.resumeUrl} className="btn btn-ghost hide-sm">
            View CV
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Let&apos;s talk
          </a>
          <ThemeToggle />
          <button type="button" className="btn mobile-menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile sections" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <Link href={profile.resumeUrl} onClick={() => setOpen(false)}>View résumé</Link>
      </nav>
    </header>
  );
}
