"use client";

import { useEffect, useRef } from "react";

/** Ambient animated waveform / spectrum field behind the whole page. */
export default function BackgroundWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const layers = [
      { amp: 0.10, freq: 0.006, speed: 0.018, color: "20,18,7", alpha: 0.6 },
      { amp: 0.07, freq: 0.010, speed: 0.026, color: "20,18,7", alpha: 0.42 },
      { amp: 0.05, freq: 0.016, speed: 0.014, color: "90,74,15", alpha: 0.45 },
    ];

    let t = 0;
    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const mid = h * 0.5;

      layers.forEach((l, i) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const y =
            mid +
            Math.sin(x * l.freq + t * (1 + i * 0.4)) * h * l.amp +
            Math.sin(x * l.freq * 2.3 + t * 0.7) * h * l.amp * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${l.color},${l.alpha})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      });

      t += reduce ? 0 : 0.02;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="bg-wave" ref={ref} aria-hidden="true" />;
}
