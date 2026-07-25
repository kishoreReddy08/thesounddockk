import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <Reveal className="contact-copy">
            <p className="kicker">05 — Book In</p>
            <h2 className="section-title">
              Let&apos;s make it
              <br />
              sound finished.
            </h2>
            <p className="section-lead">
              Tell us about the record. We&apos;ll get you docked.
            </p>

            <ul className="contact-list">
              <li>
                <span className="c-label">Call / WhatsApp</span>
                <a href="tel:+917013898466">+91 70138 98466</a>
              </li>
              <li>
                <span className="c-label">Studio</span>
                <span>
                  2nd Floor, Vijay Sri Villa, 604B, Road No. 32, Aditya
                  Enclave, Jubilee Hills, Hyderabad, Telangana 500033
                </span>
              </li>
              <li>
                <span className="c-label">Instagram</span>
                <a
                  href="https://www.instagram.com/thesounddockk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @thesounddockk
                </a>
              </li>
            </ul>

            <div className="contact-actions">
              <a href="tel:+917013898466" className="btn">
                Call the Studio
              </a>
              <a
                href="https://wa.me/917013898466"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-map" delay={120}>
            <iframe
              title="THE SOUND DOCKK location — Hyderabad"
              src="https://www.google.com/maps?q=The%20Sound%20Dockk%20Hyderabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
