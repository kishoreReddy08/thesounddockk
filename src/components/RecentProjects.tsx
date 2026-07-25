import fs from "node:fs";
import path from "node:path";
import Reveal from "./Reveal";
import ProjectsDeck, { type Project } from "./ProjectsDeck";

const IMG_RE = /\.(jpe?g|png|webp|avif)$/i;

type CatCfg = {
  dir: string;
  label: string;
  parse: (base: string) => { title: string; subtitle: string };
};

// Split "Song - Artist" / "Song-Movie" on the hyphen (with or without spaces).
const splitName = (base: string) =>
  base.split(/\s*-\s*/).map((s) => s.trim());

// Folder → card meaning, per the studio's naming convention:
//   indie:               song name - artist name (optional)
//   film_playback_songs: song name - movie name
//   artists:             artist name
//   podcasts:            podcast name - artist name (optional)
const CATS: CatCfg[] = [
  {
    dir: "indie",
    label: "Indie",
    parse: (b) => {
      const [song, artist] = splitName(b);
      return { title: song, subtitle: artist ?? "" };
    },
  },
  {
    dir: "film_playback_songs",
    label: "Film Playback",
    parse: (b) => {
      const [song, movie] = splitName(b);
      return { title: song, subtitle: movie ?? "" };
    },
  },
  {
    dir: "artists",
    label: "Artist",
    parse: (b) => {
      const [name] = splitName(b);
      return { title: name, subtitle: "" };
    },
  },
  {
    dir: "podcasts",
    label: "Podcast",
    parse: (b) => {
      const [name, host] = splitName(b);
      return { title: name, subtitle: host ?? "" };
    },
  },
];

function readProjects(): Project[] {
  const root = path.join(process.cwd(), "public", "projects");
  const byCat: Project[][] = [];

  for (const cat of CATS) {
    let files: string[] = [];
    try {
      files = fs.readdirSync(path.join(root, cat.dir));
    } catch {
      continue;
    }
    const items = files
      .filter((f) => IMG_RE.test(f))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => {
        const { title, subtitle } = cat.parse(f.replace(IMG_RE, ""));
        return {
          src: `/projects/${cat.dir}/${encodeURIComponent(f)}`,
          category: cat.label,
          title,
          subtitle,
        } satisfies Project;
      });
    if (items.length) byCat.push(items);
  }

  // Interleave categories round-robin for a mixed, varied deck.
  const out: Project[] = [];
  for (let i = 0; ; i++) {
    let added = false;
    for (const list of byCat) {
      if (i < list.length) {
        out.push(list[i]);
        added = true;
      }
    }
    if (!added) break;
  }
  return out;
}

export default function RecentProjects() {
  const projects = readProjects();

  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">03 — Recent Work</p>
          <h2 className="section-title">
            Fresh off
            <br />
            the desk.
          </h2>
          <p className="section-lead">
            A rolling reel of what&apos;s been through the room — indie, film
            playback, artists and podcasts. See it all on{" "}
            <a
              className="inline-link"
              href="https://www.instagram.com/thesounddockk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thesounddockk
            </a>
            .
          </p>
        </Reveal>
      </div>

      <ProjectsDeck projects={projects} />
    </section>
  );
}
