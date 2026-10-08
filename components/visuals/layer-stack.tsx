"use client";

import { useEffect, useState } from "react";
import { Bot, Database, Network } from "lucide-react";
import { useActiveInView, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const VB_W = 560;
const VB_H = 440;
const CX = 210;
const S = 150; // side of the square before isometric projection

const layers = [
  {
    key: "agents",
    label: "Copilots & agents",
    short: "Agents",
    tip: "Agents that guide, answer, and report on top of your knowledge.",
    top: 36,
    icon: Bot,
  },
  {
    key: "knowledge",
    label: "Knowledge layer",
    short: "Knowledge",
    tip: "Structured, searchable knowledge grounded in your sources.",
    top: 146,
    icon: Network,
  },
  {
    key: "sources",
    label: "Sources",
    short: "Sources",
    tip: "Documents, manuals, records, and work history flow in.",
    top: 256,
    icon: Database,
  },
] as const;

const iso = (top: number) => `matrix(1 0.5 -1 0.5 ${CX} ${top})`;

function diamondPoints(top: number) {
  return `${CX},${top} ${CX + S},${top + S / 2} ${CX},${top + S} ${CX - S},${top + S / 2}`;
}

function SourcesContent() {
  const tiles = [];
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++) tiles.push([22 + c * 38, 22 + r * 38]);
  return (
    <>
      {tiles.map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={30} height={30} rx={4} fill="rgba(255,255,255,0.06)" stroke="rgba(165,180,252,0.45)" strokeWidth={0.8} />
          <rect x={x + 6} y={y + 8} width={18} height={2.5} rx={1} fill="rgba(165,180,252,0.6)" />
          <rect x={x + 6} y={y + 14} width={12} height={2.5} rx={1} fill="rgba(165,180,252,0.35)" />
        </g>
      ))}
    </>
  );
}

const kNodes: [number, number][] = [
  [30, 34], [74, 24], [118, 42], [46, 78], [94, 74], [124, 102], [36, 120], [80, 118],
];
const kEdges: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [4, 2], [4, 5], [3, 6], [6, 7], [7, 4], [7, 5],
];

function KnowledgeContent() {
  return (
    <>
      {kEdges.map(([a, b], i) => (
        <line
          key={i}
          x1={kNodes[a][0]}
          y1={kNodes[a][1]}
          x2={kNodes[b][0]}
          y2={kNodes[b][1]}
          stroke="url(#ls-accent)"
          strokeWidth={1.2}
          style={{ animation: `twinkle ${3 + (i % 3)}s ease-in-out ${i * 0.3}s infinite` }}
        />
      ))}
      {kNodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 6 : 4} fill={i === 4 ? "#A78BFA" : "#C7D2FE"} />
      ))}
    </>
  );
}

function AgentsContent() {
  return (
    <>
      {[
        [18, 18],
        [58, 58],
        [98, 98],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width={36} height={36} rx={7} fill="rgba(124,58,237,0.25)" stroke="rgba(196,181,253,0.8)" strokeWidth={0.9} />
          <circle cx={x + 18} cy={y + 18} r={5} fill="#E0E7FF" />
        </g>
      ))}
    </>
  );
}

const contents = { agents: AgentsContent, knowledge: KnowledgeContent, sources: SourcesContent };

const beams = [
  { x: 170, delay: 0 },
  { x: 210, delay: 1.1 },
  { x: 250, delay: 0.55 },
  { x: 190, delay: 1.7 },
  { x: 232, delay: 2.3 },
];

export function LayerStack() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const [hovered, setHovered] = useState<number | null>(null);
  const [auto, setAuto] = useState(2);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (reduced || interacted || !inView) return;
    const id = window.setInterval(() => setAuto((a) => (a + 2) % 3), 2800);
    return () => window.clearInterval(id);
  }, [reduced, interacted, inView]);

  const active = hovered ?? (interacted ? null : auto);

  const select = (i: number | null) => {
    setInteracted(true);
    setHovered(i);
  };

  return (
    <div ref={ref} className={cn("relative mx-auto w-full max-w-[560px]", !inView && "anim-paused")}>
      <div className="relative" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="ls-accent" x1="0" x2="1">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            <linearGradient id="ls-plane" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="ls-plane-active" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.32" />
            </linearGradient>
            <linearGradient id="ls-beam" x1="0" x2="0" y1="1" y2="0">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="ls-dot">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </radialGradient>
          </defs>

          {[...layers].reverse().map((layer) => {
            const i = layers.indexOf(layer);
            const isActive = active === i;
            const dim = active !== null && !isActive;
            const Content = contents[layer.key];
            const t = layer.top;
            return (
              <g
                key={layer.key}
                onPointerEnter={(e) => e.pointerType === "mouse" && select(i)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(null)}
                onClick={() => select(i)}
                className="cursor-pointer"
                style={{
                  transform: isActive ? "translateY(-8px)" : "translateY(0)",
                  opacity: dim ? 0.45 : 1,
                  transition: "transform 450ms cubic-bezier(.22,1,.36,1), opacity 300ms ease",
                }}
              >
                {/* slab edges */}
                <polygon
                  points={`${CX - S},${t + S / 2} ${CX},${t + S} ${CX},${t + S + 7} ${CX - S},${t + S / 2 + 7}`}
                  fill="rgba(79,70,229,0.28)"
                />
                <polygon
                  points={`${CX},${t + S} ${CX + S},${t + S / 2} ${CX + S},${t + S / 2 + 7} ${CX},${t + S + 7}`}
                  fill="rgba(124,58,237,0.38)"
                />
                <polygon
                  points={diamondPoints(t)}
                  fill={isActive ? "url(#ls-plane-active)" : "url(#ls-plane)"}
                  stroke={isActive ? "#C4B5FD" : "rgba(165,180,252,0.55)"}
                  strokeWidth={isActive ? 1.6 : 1}
                  style={{ transition: "stroke 300ms ease" }}
                />
                <g transform={iso(t)}>
                  <Content />
                </g>
                {isActive && (
                  <polygon
                    points={diamondPoints(t)}
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth={6}
                    opacity={0.25}
                    style={{ filter: "blur(4px)" }}
                  />
                )}
              </g>
            );
          })}

          {/* Upward light beams */}
          {beams.map((b, i) => (
            <g key={i} style={{ pointerEvents: "none" }}>
              <line x1={b.x} x2={b.x} y1={340} y2={108} stroke="url(#ls-beam)" strokeWidth={1.2} />
              {!reduced && (
                <circle cx={b.x} cy={340} r={4} fill="url(#ls-dot)" opacity={0}>
                  <animate attributeName="cy" values="340;108" dur="2.8s" begin={`${b.delay}s`} repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.15;0.8;1"
                    dur="2.8s"
                    begin={`${b.delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          ))}
        </svg>

        {/* Layer labels (HTML for crisp text + keyboard access) */}
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          const isActive = active === i;
          return (
            <div
              key={layer.key}
              className="absolute -translate-y-1/2"
              style={{ left: `${((CX + S + 14) / VB_W) * 100}%`, top: `${((layer.top + S / 2) / VB_H) * 100}%`, right: 0 }}
            >
              <button
                type="button"
                aria-pressed={isActive}
                aria-describedby={`layer-tip-${layer.key}`}
                onMouseEnter={() => select(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => select(i)}
                onBlur={() => setHovered(null)}
                onClick={() => select(i)}
                className={cn(
                  "flex items-center gap-2 rounded-pill border px-2.5 py-1.5 text-left text-[11px] font-medium transition-colors sm:px-3 sm:text-sm",
                  isActive
                    ? "border-violet-300/60 bg-violet-500/20 text-white"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:text-white",
                )}
              >
                <Icon aria-hidden className="h-3.5 w-3.5 shrink-0 text-indigo-300 sm:h-4 sm:w-4" />
                <span className="whitespace-nowrap sm:hidden">{layer.short}</span>
                <span className="hidden whitespace-nowrap sm:inline">{layer.label}</span>
              </button>
              <p
                id={`layer-tip-${layer.key}`}
                role="tooltip"
                className={cn(
                  "absolute left-0 top-full mt-2 hidden w-[min(240px,100%)] rounded-lg border border-white/10 bg-[#151826]/95 px-3 py-2 text-xs leading-snug text-slate-200 shadow-xl transition-[opacity,transform] duration-300 sm:block",
                  isActive ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                {layer.tip}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile: tooltip shown below the stack */}
      <p aria-live="polite" className="mt-4 min-h-[2.5rem] text-center text-sm text-slate-300 sm:hidden">
        {active !== null ? (
          <>
            <span className="font-medium text-white">{layers[active].label}:</span> {layers[active].tip}
          </>
        ) : (
          "Tap a layer to explore it."
        )}
      </p>
    </div>
  );
}
