"use client";

/* Each illustration loops with CSS only. The non-animated base styles double as the reduced-motion state. */

const fragments = [
  { x: 92, y: 40, w: 34, h: 42, dx: -46, dy: -18, r: -14, tone: "#4F46E5" },
  { x: 132, y: 34, w: 30, h: 22, dx: 40, dy: -16, r: 12, tone: "#7C3AED" },
  { x: 132, y: 62, w: 30, h: 20, dx: 52, dy: 18, r: 18, tone: "#C7C9F5" },
  { x: 92, y: 86, w: 22, h: 18, dx: -38, dy: 22, r: -20, tone: "#7C3AED" },
  { x: 118, y: 86, w: 44, h: 18, dx: 24, dy: 30, r: 10, tone: "#4F46E5" },
  { x: 168, y: 46, w: 18, h: 18, dx: 58, dy: -2, r: 24, tone: "#DDD6FE" },
  { x: 72, y: 62, w: 16, h: 16, dx: -56, dy: 0, r: -24, tone: "#C7C9F5" },
];

export function ScatteredIllustration() {
  return (
    <svg viewBox="0 0 260 130" className="h-full w-full" aria-hidden="true">
      {fragments.map((f, i) => (
        <g
          key={i}
          style={
            {
              "--dx": `${f.dx}px`,
              "--dy": `${f.dy}px`,
              "--r": `${f.r}deg`,
              transformBox: "fill-box",
              transformOrigin: "center",
              animation: `fragment-drift 7s cubic-bezier(.45,.05,.35,1) ${i * 0.08}s infinite`,
            } as React.CSSProperties
          }
        >
          <rect x={f.x} y={f.y} width={f.w} height={f.h} rx={4} fill="#fff" stroke={f.tone} strokeWidth={1.4} />
          <rect x={f.x + 5} y={f.y + 6} width={Math.max(6, f.w - 12)} height={2.5} rx={1.25} fill={f.tone} opacity={0.5} />
          {f.h > 20 && (
            <rect x={f.x + 5} y={f.y + 12} width={Math.max(4, f.w - 18)} height={2.5} rx={1.25} fill={f.tone} opacity={0.3} />
          )}
        </g>
      ))}
    </svg>
  );
}

export function SlowIllustration() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 px-6" aria-hidden="true">
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-pill border border-line bg-white shadow-card"
            style={{ animation: `queue-shuffle 2.4s ease-in-out ${i * 0.2}s infinite` }}
          >
            <span className="h-2.5 w-2.5 rounded-pill bg-slate-300" />
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1.5 rounded-pill border border-accent/20 bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent" />
          Expert busy
        </span>
      </div>
      <div>
        <div className="h-2.5 overflow-hidden rounded-pill bg-slate-100">
          <div
            className="h-full origin-left rounded-pill bg-accent-gradient"
            style={{ transform: "scaleX(0.63)", animation: "stall-bar 6s ease-out infinite" }}
          />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-body">
          <span>Waiting on answer</span>
          <span className="animate-pulse">&hellip;</span>
        </div>
      </div>
    </div>
  );
}

const net: [number, number][] = [
  [60, 40], [110, 28], [160, 50], [200, 30], [80, 92], [140, 96], [190, 92],
];
const netEdges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 2], [5, 6], [6, 3], [1, 5], [2, 6],
];
const LOST = 5;

export function LostIllustration() {
  return (
    <svg viewBox="0 0 260 130" className="h-full w-full" aria-hidden="true">
      {netEdges.map(([a, b], i) => {
        const fades = a === LOST || b === LOST;
        return (
          <line
            key={i}
            x1={net[a][0]}
            y1={net[a][1]}
            x2={net[b][0]}
            y2={net[b][1]}
            stroke={fades ? "#7C3AED" : "#CBD0DC"}
            strokeWidth={1.4}
            strokeDasharray={fades ? "3 4" : undefined}
            style={fades ? { animation: "node-fade 6s ease-in-out infinite" } : undefined}
          />
        );
      })}
      {net.map(([x, y], i) =>
        i === LOST ? (
          <g key={i} style={{ animation: "node-fade 6s ease-in-out infinite" }}>
            <circle cx={x} cy={y} r={16} fill="#7C3AED" opacity={0.12} />
            <circle cx={x} cy={y} r={9} fill="url(#lost-grad)" />
            <circle cx={x} cy={y - 2.5} r={2.6} fill="#fff" />
            <path d={`M${x - 4.5} ${y + 4.5} a4.5 3.6 0 0 1 9 0`} fill="#fff" />
          </g>
        ) : (
          <circle key={i} cx={x} cy={y} r={6} fill="#fff" stroke="#AEB4C3" strokeWidth={1.4} />
        ),
      )}
      <defs>
        <linearGradient id="lost-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}
