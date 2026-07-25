const ITEMS = [
  "COMPOSING",
  "PROGRAMMING",
  "VOCAL & INSTRUMENT RECORDING",
  "MIXING",
  "MASTERING"
];

export default function Marquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
