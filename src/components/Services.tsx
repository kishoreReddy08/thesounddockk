import Reveal from "./Reveal";

const SERVICES = [
  {
    num: "01",
    title: "Composition & Programming",
    body: "From a hummed idea to a finished arrangement — original composition, beat-making and MIDI programming built around your song.",
    points: [
      "Original composition & arrangement",
      "Beat-making & MIDI programming",
      "Film, ad & jingle scoring",
    ],
    featured: false,
  },
  {
    num: "02",
    title: "Vocal & Instrumentation Recording",
    body: "A treated live room and a premium signal chain to capture vocals and live instruments — clean, warm and full of character.",
    points: [
      "Lead & backing vocals",
      "Live instruments & overdubs",
      "Dubbing & voiceover",
    ],
    featured: false,
  },
  {
    num: "03",
    title: "Mixing",
    body: "Balance, depth, punch and space. Every element carved to sit right — from intimate acoustic to wall-of-sound.",
    points: [
      "Stem & multitrack mixing",
      "Vocal tuning & comping",
      "Analogue-style warmth in the box",
    ],
    featured: false,
  },
  {
    num: "04",
    title: "Mastering",
    body: "The final polish. Loud, clean and translation-ready across earbuds, cars, clubs and cinema.",
    points: [
      "Streaming-loud, dynamic masters",
      "Stem mastering",
      "Reference & revision passes",
    ],
    featured: true,
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">01 — The Desk</p>
          <h2 className="section-title">
            Everything from
            <br />
            tracking to master.
          </h2>
          <p className="section-lead">
            One room, one signal chain, one engineer who lives inside your mix
            until it moves.
          </p>
        </Reveal>

        <div className="cards">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.num}
              as="article"
              delay={i * 90}
              className={`card${s.featured ? " featured" : ""}`}
            >
              <div className="card-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="card-list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
