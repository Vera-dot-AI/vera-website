"use client";

import { BookOpen, ClipboardList, Compass, FileBarChart, FileText, History, MessageSquareText } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/motion";
import { particleTiming, windowKeyframes } from "@/lib/timeline";

/* Geometry is authored in a 560x400 viewBox; HTML overlays use matching percentages. */
const W = 560;
const H = 400;
const T = 8; // seconds per loop
const STEP = 1.5;

const sources = [
  { label: "PDF Manuals", icon: FileText, y: 70, target: [240, 150] },
  { label: "Records", icon: ClipboardList, y: 155, target: [208, 180] },
  { label: "Work History", icon: History, y: 245, target: [232, 215] },
  { label: "Docs", icon: BookOpen, y: 330, target: [280, 252] },
] as const;

const agents = [
  { label: "Guide", sub: "Guiding", icon: Compass, y: 105, from: [322, 148] },
  { label: "Answer", sub: "Answering", icon: MessageSquareText, y: 200, from: [352, 186] },
  { label: "Report", sub: "Writing", icon: FileBarChart, y: 295, from: [328, 226] },
] as const;

const sourceToAgent = [0, 1, 2, 0];

const nodes: [number, number, number][] = [
  [280, 190, 7.5],
  [240, 150, 4.5],
  [322, 148, 4.5],
  [232, 215, 4.5],
  [328, 226, 4.5],
  [280, 128, 4],
  [280, 252, 4],
  [252, 184, 3.5],
  [310, 192, 3.5],
  [208, 180, 3.5],
  [352, 186, 3.5],
];

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 7], [0, 8], [1, 5], [2, 5], [1, 9], [9, 3],
  [3, 6], [4, 6], [2, 10], [10, 4], [1, 7], [8, 2], [7, 3], [8, 4],
];

const CHIP_X = 150;
const AGENT_X = 396;

function inPath(i: number) {
  const s = sources[i];
  const [tx, ty] = s.target;
  return `M${CHIP_X} ${s.y} C ${CHIP_X + 45} ${s.y}, ${tx - 45} ${ty}, ${tx} ${ty}`;
}

function outPath(j: number) {
  const a = agents[j];
  const [fx, fy] = a.from;
  return `M${fx} ${fy} C ${fx + 38} ${fy}, ${AGENT_X - 38} ${a.y}, ${AGENT_X} ${a.y}`;
}

const timing = sources.map((_, i) => {
  const t0 = i * STEP;
  return {
    chip: [t0, t0 + 0.9] as [number, number],
    travelIn: [t0 + 0.15, t0 + 1.35] as [number, number],
    core: [t0 + 1.2, t0 + 1.8] as [number, number],
    travelOut: [t0 + 1.4, t0 + 2.4] as [number, number],
    agent: [t0 + 2.3, t0 + 3.3] as [number, number],
  };
});

const keyframes = [
  ...sources.map((_, i) => windowKeyframes(`hf-chip-${i}`, [timing[i].chip], T)),
  ...sources.map((_, i) => windowKeyframes(`hf-in-${i}`, [timing[i].travelIn], T, 0.3)),
  ...agents.map((_, j) =>
    windowKeyframes(
      `hf-agent-${j}`,
      timing.filter((_, i) => sourceToAgent[i] === j).map((t) => t.agent),
      T,
    ),
  ),
  ...agents.map((_, j) =>
    windowKeyframes(
      `hf-agent-sub-${j}`,
      timing
        .filter((_, i) => sourceToAgent[i] === j)
        .map((t) => [t.agent[0] + 0.2, t.agent[1] - 0.2] as [number, number]),
      T,
      0.15,
    ),
  ),
  ...agents.map((_, j) =>
    windowKeyframes(
      `hf-out-${j}`,
      timing.filter((_, i) => sourceToAgent[i] === j).map((t) => t.travelOut),
      T,
      0.3,
    ),
  ),
  ...agents.map((_, j) =>
    windowKeyframes(
      `hf-agent-idle-${j}`,
      timing.filter((_, i) => sourceToAgent[i] === j).map((t) => t.agent),
      T,
      0.15,
      0,
      1,
    ),
  ),
  windowKeyframes("hf-core", timing.map((t) => t.core), T, 0.2, 1, 0.35),
].join("\n");

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export function HeroFlow() {
  const reduced = usePrefersReducedMotion();
  const anim = (name: string) => (reduced ? undefined : `${name} ${T}s linear infinite`);

  return (
    <div className="@container relative aspect-[7/5] w-full select-none">
      <style>{keyframes}</style>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hf-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <radialGradient id="hf-core-glow">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#4F46E5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hf-particle">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Knowledge layer glow */}
        <circle
          cx={280}
          cy={190}
          r={110}
          fill="url(#hf-core-glow)"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: reduced ? undefined : "soft-pulse 6s ease-in-out infinite",
          }}
        />

        {/* Base dotted connectors */}
        {sources.map((_, i) => (
          <path
            key={`in-base-${i}`}
            d={inPath(i)}
            fill="none"
            stroke="#C9CCE4"
            strokeWidth={1.4}
            strokeDasharray="2 6"
            strokeLinecap="round"
            style={{ animation: reduced ? undefined : "dash-flow 1.6s linear infinite" }}
          />
        ))}
        {agents.map((_, j) => (
          <path
            key={`out-base-${j}`}
            d={outPath(j)}
            fill="none"
            stroke="#C9CCE4"
            strokeWidth={1.4}
            strokeDasharray="2 6"
            strokeLinecap="round"
            style={{ animation: reduced ? undefined : "dash-flow 1.6s linear infinite" }}
          />
        ))}

        {/* Lit connectors */}
        {sources.map((_, i) => (
          <path
            key={`in-lit-${i}`}
            d={inPath(i)}
            fill="none"
            stroke="url(#hf-line)"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ opacity: reduced ? 0.55 : 0, animation: anim(`hf-in-${i}`) }}
          />
        ))}
        {agents.map((_, j) => (
          <path
            key={`out-lit-${j}`}
            d={outPath(j)}
            fill="none"
            stroke="url(#hf-line)"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ opacity: reduced ? 0.55 : 0, animation: anim(`hf-out-${j}`) }}
          />
        ))}

        {/* Node cluster */}
        {edges.map(([a, b], k) => (
          <line
            key={`e-${k}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="url(#hf-line)"
            strokeWidth={1.2}
            style={{
              opacity: 0.45,
              animation: reduced
                ? undefined
                : `twinkle ${3 + (k % 4) * 0.7}s ease-in-out ${(k * 0.37) % 3}s infinite`,
            }}
          />
        ))}
        {nodes.map(([x, y, r], k) => (
          <g key={`n-${k}`}>
            <circle cx={x} cy={y} r={r * 2.4} fill="#7C3AED" opacity={0.1} />
            <circle
              cx={x}
              cy={y}
              r={r}
              fill={k === 0 ? "url(#hf-line)" : "#ffffff"}
              stroke="url(#hf-line)"
              strokeWidth={k === 0 ? 0 : 1.6}
              style={
                k === 0
                  ? { opacity: reduced ? 1 : undefined, animation: anim("hf-core") }
                  : undefined
              }
            />
          </g>
        ))}

        {/* Particles */}
        {!reduced &&
          sources.map((_, i) => {
            const tIn = particleTiming(...timing[i].travelIn, T);
            const j = sourceToAgent[i];
            const tOut = particleTiming(...timing[i].travelOut, T);
            return (
              <g key={`p-${i}`}>
                {[0, 0.06, 0.12].map((lag, k) => {
                  const lagIn = particleTiming(timing[i].travelIn[0] + lag, timing[i].travelIn[1] + lag, T);
                  return (
                    <circle key={`pin-${k}`} r={k === 0 ? 6 : 4 - k} fill="url(#hf-particle)" opacity={0}>
                      <animateMotion
                        dur={`${T}s`}
                        repeatCount="indefinite"
                        path={inPath(i)}
                        keyTimes={k === 0 ? tIn.keyTimes : lagIn.keyTimes}
                        keyPoints="0;0;1;1"
                        calcMode="linear"
                      />
                      <animate
                        attributeName="opacity"
                        dur={`${T}s`}
                        repeatCount="indefinite"
                        keyTimes={k === 0 ? tIn.opacityTimes : lagIn.opacityTimes}
                        values={k === 0 ? "0;0;1;1;0;0" : "0;0;0.5;0.5;0;0"}
                      />
                    </circle>
                  );
                })}
                <circle r={6} fill="url(#hf-particle)" opacity={0}>
                  <animateMotion
                    dur={`${T}s`}
                    repeatCount="indefinite"
                    path={outPath(j)}
                    keyTimes={tOut.keyTimes}
                    keyPoints="0;0;1;1"
                    calcMode="linear"
                  />
                  <animate
                    attributeName="opacity"
                    dur={`${T}s`}
                    repeatCount="indefinite"
                    keyTimes={tOut.opacityTimes}
                    values={tOut.opacityValues}
                  />
                </circle>
              </g>
            );
          })}
      </svg>

      {/* Source chips */}
      {sources.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="absolute left-0 -translate-y-1/2"
            style={{ top: pct(s.y, H), width: pct(CHIP_X, W) }}
          >
            <div className="relative flex items-center gap-[1.6cqw] rounded-[2cqw] border border-line bg-white px-[2cqw] py-[1.6cqw] shadow-card">
              <span className="flex h-[5.4cqw] w-[5.4cqw] shrink-0 items-center justify-center rounded-[1.2cqw] bg-accent-soft text-accent">
                <Icon aria-hidden className="h-[3cqw] w-[3cqw]" />
              </span>
              <span className="min-w-0 text-[length:max(10px,2.25cqw)] font-medium leading-tight text-ink">{s.label}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-glow ring-1 ring-accent/50"
                style={{ opacity: 0, animation: anim(`hf-chip-${i}`) }}
              />
            </div>
          </div>
        );
      })}

      {/* Knowledge layer label */}
      <div
        className="absolute -translate-x-1/2 whitespace-nowrap"
        style={{ left: pct(280, W), top: pct(292, H) }}
      >
        <span className="inline-flex items-center gap-[1cqw] rounded-pill border border-accent/20 bg-white/90 px-[2cqw] py-[0.9cqw] font-mono text-[length:max(8px,1.75cqw)] font-medium uppercase tracking-[0.06em] @md:tracking-[0.12em] text-accent shadow-card">
          <span className="h-[1.2cqw] w-[1.2cqw] rounded-pill bg-accent-gradient" />
          Vera Knowledge Layer
        </span>
      </div>

      {/* Agent cards */}
      {agents.map((a, j) => {
        const Icon = a.icon;
        return (
          <div
            key={a.label}
            className="absolute -translate-y-1/2"
            style={{ top: pct(a.y, H), left: pct(AGENT_X, W), width: pct(W - AGENT_X, W) }}
          >
            <div className="relative overflow-hidden rounded-[2cqw] border border-line bg-white px-[2cqw] py-[1.8cqw] shadow-card">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] to-accent-violet/[0.12]"
                style={{ opacity: 0, animation: anim(`hf-agent-${j}`) }}
              />
              <div className="relative flex items-center gap-[1.6cqw]">
                <span className="flex h-[5.4cqw] w-[5.4cqw] shrink-0 items-center justify-center rounded-[1.2cqw] bg-accent-gradient text-white">
                  <Icon aria-hidden className="h-[3cqw] w-[3cqw]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[length:max(10px,2.25cqw)] font-semibold leading-tight text-ink">
                    {a.label}
                  </span>
                  <span className="relative block h-[max(11px,2.3cqw)] text-[length:max(8.5px,1.75cqw)] leading-tight">
                    <span
                      className="absolute inset-0 truncate text-body"
                      style={{ opacity: reduced ? 0 : 1, animation: anim(`hf-agent-idle-${j}`) }}
                    >
                      Idle
                    </span>
                    <span
                      className="absolute inset-0 truncate font-medium text-accent"
                      style={{ opacity: reduced ? 1 : 0, animation: anim(`hf-agent-sub-${j}`) }}
                    >
                      {a.sub}
                    </span>
                  </span>
                </span>
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-accent/50"
                style={{ opacity: 0, animation: anim(`hf-agent-${j}`) }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
