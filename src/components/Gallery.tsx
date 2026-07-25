import Image from "next/image";
import Reveal from "./Reveal";

type Img = { src: string; w: number; h: number; position?: string };

type Shot = {
  images: Img[];
  title: string;
  gear: string;
  body: string;
  tags: string[];
};

const SHOTS: Shot[] = [
  {
    images: [{ src: "/gallery/control-room.jpg", w: 4032, h: 3024 }],
    title: "The Control Room",
    gear: "iMac + Pro Tools · Yamaha HS monitors · Manley tube outboard",
    body: "The nerve centre — an Apple iMac running Pro Tools drives the session, monitored on Yamaha HS-series near-fields with a dedicated centre monitor for imaging. A Manley tube channel unit adds analogue colour on the way in, with a MIDI controller keyboard for quick ideas and a large reference display for clients.",
    tags: ["Pro Tools", "Yamaha HS", "Manley", "MIDI keys"],
  },
  {
    images: [
      { src: "/gallery/booth.jpg", w: 3024, h: 4032, position: "center" },
      { src: "/gallery/manley-mic-centered.jpg", w: 778, h: 1440, position: "center" },
    ],
    title: "The Vocal Booth",
    gear: "Manley Reference Cardioid tube mic · treated live room",
    body: "A fully-treated live room built for vocals and instruments, fronted by a Manley Reference Cardioid — a hand-built US tube condenser prized for its rich, present tone. A headphone cue station lets the artist dial their own monitor mix, while colour-tuned ceiling clouds and CNC-cut geometric panels tame reflections without killing the vibe.",
    tags: ["Manley tube mic", "Vocal booth", "Acoustic treatment"],
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">02 — Inside the Dockk</p>
          <h2 className="section-title">
            The room &amp;
            <br />
            the rack.
          </h2>
          <p className="section-lead">
            A boutique room in Jubilee Hills, kitted with a serious front end —
            tuned to hear the full 20Hz–20kHz.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {SHOTS.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={(i % 2) * 90}
              className="shot"
            >
              <div
                className={`shot-media${
                  s.images.length > 1 ? " shot-media-split" : ""
                }`}
              >
                {s.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={`${s.title} — ${s.gear}`}
                    width={img.w}
                    height={img.h}
                    sizes="(max-width: 720px) 100vw, 580px"
                    className="shot-img"
                    style={
                      img.position ? { objectPosition: img.position } : undefined
                    }
                  />
                ))}
                <span className="shot-badge">{`0${i + 1}`}</span>
              </div>
              <div className="shot-body">
                <h3>{s.title}</h3>
                <p className="shot-gear">{s.gear}</p>
                <p className="shot-desc">{s.body}</p>
                <ul className="shot-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
