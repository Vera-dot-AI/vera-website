/* Deterministic star field so server and client markup match. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

type Star = { x: number; y: number; r: number };

function makeLayer(seed: number, count: number) {
  const rand = rng(seed);
  const stars: Star[] = Array.from({ length: count }, () => ({
    x: rand() * 1200,
    y: rand() * 500,
    r: 0.8 + rand() * 1.6,
  }));
  const links: [Star, Star][] = [];
  stars.forEach((a, i) => {
    stars.slice(i + 1).forEach((b) => {
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 150) links.push([a, b]);
    });
  });
  return { stars, links };
}

const layers = [
  { ...makeLayer(7, 16), sx: "14px", sy: "-10px", dur: 18 },
  { ...makeLayer(23, 14), sx: "-12px", sy: "8px", dur: 22 },
  { ...makeLayer(91, 12), sx: "8px", sy: "12px", dur: 26 },
];

export function Constellation() {
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_30%,transparent_100%)]"
      aria-hidden="true"
    >
      {layers.map((layer, li) => (
        <g
          key={li}
          style={
            {
              "--sx": layer.sx,
              "--sy": layer.sy,
              animation: `star-drift ${layer.dur}s ease-in-out infinite`,
            } as React.CSSProperties
          }
        >
          {layer.links.map(([a, b], k) => (
            <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#A5B4FC" strokeOpacity={0.16} strokeWidth={0.8} />
          ))}
          {layer.stars.map((s, k) => (
            <circle
              key={k}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill={k % 3 === 0 ? "#C4B5FD" : "#E0E7FF"}
              style={{ animation: `twinkle ${3 + (k % 5)}s ease-in-out ${(k * 0.4) % 4}s infinite` }}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
