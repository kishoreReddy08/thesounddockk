"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Studio" },
  { href: "#projects", label: "Projects" },
  { href: "#founders", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">
          <span className="eq">
            <i />
            <i />
            <i />
            <i />
          </span>
        </span>
        <span className="brand-text">
          THE SOUND <b>DOCKK</b>
        </span>
      </a>

      <nav className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-sm" onClick={() => setOpen(false)}>
          Book a Session
        </a>
      </nav>

      <button
        className={`nav-toggle${open ? " open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
