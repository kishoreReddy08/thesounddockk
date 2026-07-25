const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thesounddockk/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/The-sound-dockk-104749114631901/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3H13.5V9.5c0-.3.2-.5.5-.5Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917013898466",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.7-.1 1.2Z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+917013898466",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="brand-text">
            THE SOUND <b>DOCKK</b>
          </span>
          <p>Mixing · Mastering · Recording — Hyderabad</p>
        </div>

        <nav className="footer-nav">
          <a href="#services">Services</a>
          <a href="#gallery">Studio</a>
          <a href="#projects">Projects</a>
          <a href="#founders">Founders</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="socials">
          <p className="socials-label">Follow the studio</p>
          <div className="social-row">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} THE SOUND DOCKK · Hyderabad. All rights
          reserved.
        </span>
        <span className="footer-tag">#tsdkk — made with signal, not noise.</span>
      </div>
    </footer>
  );
}
