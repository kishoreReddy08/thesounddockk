"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type Project = {
  src: string;
  category: string;
  title: string;
  subtitle: string;
};

// How many times the list is repeated so the loop never shows an edge.
const COPIES = 4;
// Auto-scroll speed in px/second.
const SPEED = 26;

export default function ProjectsDeck({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items =
    projects.length > 0
      ? Array.from({ length: COPIES }).flatMap(() => projects)
      : [];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || projects.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let setW = track.scrollWidth / COPIES;
    let pos = 0;
    let paused = false;
    let last = performance.now();
    let raf = 0;

    const measure = () => {
      setW = track.scrollWidth / COPIES;
    };

    const apply = () => {
      track.style.transform = `translate3d(${-pos}px,0,0)`;
    };

    const wrap = () => {
      if (setW > 0) pos = ((pos % setW) + setW) % setW;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!paused && !reduce) pos += SPEED * dt;
      wrap();
      apply();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Pause while the pointer is over the deck.
    const onEnter = () => (paused = true);
    const onLeave = () => {
      if (!dragging) paused = false;
    };

    // Drag / swipe to scroll.
    let dragging = false;
    let startX = 0;
    let startPos = 0;
    let moved = false;

    const onDown = (e: PointerEvent) => {
      dragging = true;
      moved = false;
      paused = true;
      startX = e.clientX;
      startPos = pos;
      track.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      pos = startPos - dx;
      wrap();
      apply();
    };
    const onUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      try {
        track.releasePointerCapture(e.pointerId);
      } catch {}
      window.setTimeout(() => (paused = false), 700);
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const parent = track.parentElement!;
    parent.addEventListener("pointerenter", onEnter);
    parent.addEventListener("pointerleave", onLeave);
    track.addEventListener("pointerdown", onDown);
    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerup", onUp);
    track.addEventListener("pointercancel", onUp);
    track.addEventListener("click", onClick, true);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointerenter", onEnter);
      parent.removeEventListener("pointerleave", onLeave);
      track.removeEventListener("pointerdown", onDown);
      track.removeEventListener("pointermove", onMove);
      track.removeEventListener("pointerup", onUp);
      track.removeEventListener("pointercancel", onUp);
      track.removeEventListener("click", onClick, true);
      window.removeEventListener("resize", measure);
    };
  }, [projects.length]);

  if (projects.length === 0) {
    return (
      <div className="wrap">
        <p className="deck-empty">
          Add photos to <code>public/projects/</code> (indie · film_playback_songs
          · artists · podcasts) to populate this reel.
        </p>
      </div>
    );
  }

  return (
    <div className="deck" aria-label="Recent projects reel">
      <div className="deck-track" ref={trackRef}>
        {items.map((p, i) => (
          <article className="poster" key={i}>
            <div className="poster-media">
              <Image
                src={p.src}
                alt={`${p.title}${p.subtitle ? " — " + p.subtitle : ""}`}
                fill
                sizes="(max-width: 720px) 44vw, 230px"
                className="poster-img"
                draggable={false}
              />
              <span className="poster-cat">{p.category}</span>
              <div className="poster-info">
                <h3 className="poster-title">{p.title}</h3>
                {p.subtitle && <p className="poster-sub">{p.subtitle}</p>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
