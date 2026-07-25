import Image from "next/image";
import Reveal from "./Reveal";

type Member = {
  first: string;
  last: string;
  role: string;
  bio: string;
  initials: string;
  /** Drop a photo in public/founders/ and set this (e.g. { src:"/founders/aditya.jpg", w:1200, h:1500 }). */
  photo?: { src: string; w: number; h: number };
};

const MEMBERS: Member[] = [
  {
    first: "Aditya",
    last: "Gajula",
    role: "Co-Founder · Sound Engineer",
    bio: "Mixing, mastering and vocal production — obsessed with a record that translates on every system.",
    initials: "AM",
    photo: { src: "/founders/Aditya-1.png", w: 1440, h: 1800 },
  },
  {
    first: "Bhanu Prasad Reddy",
    last: "Gudem",
    role: "Co-Founder · Sound Engineer",
    bio: "Recording, production and the room sound — dials in every session until it feels alive.",
    initials: "BP",
    photo: { src: "/founders/Bhanu-1.png", w: 1350, h: 1800 },
  },
];

export default function Founders() {
  return (
    <section className="section team" id="founders">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">04 — The Team</p>
          <h2 className="section-title">
            The engineers
            <br />
            behind the desk.
          </h2>
          <p className="section-lead">
            THE SOUND DOCKK is founded and run by two sound engineers who treat
            every record like their own.
          </p>
        </Reveal>

        <div className="team-grid">
          {MEMBERS.map((m, i) => (
            <Reveal key={m.initials} as="article" delay={i * 100} className="member">
              <div className="member-media">
                {m.photo ? (
                  <Image
                    src={m.photo.src}
                    alt={`${m.first} ${m.last} — ${m.role}`}
                    width={m.photo.w}
                    height={m.photo.h}
                    sizes="(max-width: 720px) 100vw, 560px"
                    className="member-img"
                  />
                ) : (
                  <div className="member-ph" aria-hidden="true">
                    <span className="member-ph-initials">{m.initials}</span>
                  </div>
                )}
                <div className="member-overlay">
                  <h3 className="member-name">
                    {m.first}
                    <span>{m.last}</span>
                  </h3>
                  <p className="member-role">{m.role}</p>
                </div>
              </div>
              {/* <p className="member-bio">{m.bio}</p> */}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
