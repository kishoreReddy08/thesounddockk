export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <p className="eyebrow">
          <span className="dot" /> Mixing · Mastering · Recording — Hyderabad
        </p>

        <h1 className="hero-title">
          WHERE YOUR
          <br />
          <span className="glow">SOUND</span> GETS
          <br />
          <span className="outline">DOCKED.</span>
        </h1>

        <p className="hero-sub">
          A boutique mixing &amp; mastering studio built around one obsession —
          making your record sound the way it does in your head. Vocals, mixes
          and masters, finished with a mastering-grade ear.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn">
            Book a Session
          </a>
          <a href="#services" className="btn btn-ghost">
            Explore the Desk ↓
          </a>
        </div>

        <p className="hero-caption">
          — 24-bit signal chain · analogue warmth, in the box &amp; out —
        </p>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
