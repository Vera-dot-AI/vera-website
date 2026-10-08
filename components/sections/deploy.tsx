"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Cloud, Lock, Server, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/primitives";
import { cn, container } from "@/lib/utils";

const tiers = [
  {
    name: "Cloud",
    diagram: "Shared cloud",
    body: "Get started fast on Vera's secure shared platform.",
    icon: Cloud,
    rect: { x: 12, y: 12, w: 456, h: 356, r: 28 },
  },
  {
    name: "Dedicated",
    diagram: "Isolated environment",
    body: "An isolated environment and a model tuned to your organization.",
    icon: Lock,
    rect: { x: 64, y: 74, w: 352, h: 252, r: 22 },
  },
  {
    name: "Your infrastructure",
    diagram: "Your infrastructure",
    body: "Fully on your own infrastructure, configured your way.",
    icon: Server,
    rect: { x: 116, y: 136, w: 248, h: 148, r: 16 },
  },
];

/* Other tenants on the shared platform, placed in the outer ring only. */
const tenants = [
  [38, 120], [38, 170], [442, 120], [442, 170], [170, 347], [310, 347],
];

export function Deploy() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="deploy" aria-labelledby="deploy-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading eyebrow="Deploy your way" title={<span id="deploy-title">From shared cloud to your own infrastructure.</span>} />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal>
            <div className="relative rounded-2xl border border-line bg-white p-4 shadow-card sm:p-6">
              <svg viewBox="0 0 480 380" className="h-auto w-full" aria-hidden="true" onPointerLeave={() => setActive(null)}>
                <defs>
                  <linearGradient id="dep-grad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                  <linearGradient id="dep-fill" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.12" />
                  </linearGradient>
                </defs>

                {tiers.map((t, i) => {
                  const { x, y, w, h, r } = t.rect;
                  const isActive = active === i;
                  return (
                    <g
                      key={t.name}
                      onPointerEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      style={{
                        transformBox: "view-box",
                        transformOrigin: "240px 210px",
                        transform: isActive ? "scale(1.035)" : "scale(1)",
                        transition: "transform 500ms cubic-bezier(.22,1,.36,1)",
                      }}
                    >
                      <rect
                        x={x}
                        y={y}
                        width={w}
                        height={h}
                        rx={r}
                        fill={isActive ? "url(#dep-fill)" : i === 0 ? "#FBFBFD" : "#ffffff"}
                        style={{ transition: "fill 300ms" }}
                      />
                      <m.rect
                        x={x}
                        y={y}
                        width={w}
                        height={h}
                        rx={r}
                        fill="none"
                        stroke={isActive ? "url(#dep-grad)" : "#B7BCD0"}
                        strokeWidth={isActive ? 2.2 : 1.4}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                        transition={{ duration: 1.3, delay: 0.15 + i * 0.45, ease: [0.65, 0, 0.35, 1] }}
                      />
                      <text
                        x={x + 18}
                        y={y + 26}
                        fontSize="10.5"
                        fontFamily="var(--font-switzer), sans-serif"
                        letterSpacing="0.9"
                        fill={isActive ? "#4F46E5" : "#5B6170"}
                        style={{ textTransform: "uppercase", transition: "fill 300ms" }}
                      >
                        {`0${i + 1} · ${t.diagram}`}
                      </text>
                      {i === 0 &&
                        tenants.map(([tx, ty], k) => (
                          <rect key={k} x={tx - 9} y={ty - 9} width={18} height={18} rx={5} fill="#EEF0F6" stroke="#DDE1EA" />
                        ))}
                    </g>
                  );
                })}

                {/* core: Vera knowledge stack */}
                <g style={{ pointerEvents: "none" }}>
                  {[0, 1, 2].map((k) => (
                    <polygon
                      key={k}
                      points={`240,${184 + k * 16} 276,${202 + k * 16} 240,${220 + k * 16} 204,${202 + k * 16}`}
                      fill={k === 0 ? "url(#dep-grad)" : "#fff"}
                      stroke="url(#dep-grad)"
                      strokeWidth={1.2}
                      opacity={1 - k * 0.15}
                    />
                  )).reverse()}
                  <text x={240} y={272} textAnchor="middle" fontSize="11" fontWeight="600" fill="#0B0D12">
                    Your data + knowledge
                  </text>
                </g>
              </svg>
            </div>
          </Reveal>

          <div>
            <ul className="space-y-3">
              {tiers.map((t, i) => {
                const Icon = t.icon;
                const isActive = active === i;
                return (
                  <Reveal as="li" key={t.name} delay={0.1 + i * 0.1}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(i)}
                      onBlur={() => setActive(null)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "flex w-full items-start gap-4 rounded-2xl border bg-white p-5 text-left shadow-card transition-all duration-300",
                        isActive ? "border-accent/30 shadow-lift" : "border-line hover:border-accent/20",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                          isActive ? "bg-accent-gradient text-white" : "bg-accent-soft text-accent",
                        )}
                      >
                        <Icon aria-hidden className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="flex items-center gap-2">
                          <span className="text-[11px] font-medium text-body">0{i + 1}</span>
                          <span className="font-semibold text-ink">{t.name}</span>
                        </span>
                        <span className="mt-1 block leading-[1.6] text-body">{t.body}</span>
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </ul>
            <Reveal delay={0.4}>
              <p className="mt-6 flex items-center gap-2.5 text-sm font-medium text-ink">
                <ShieldCheck aria-hidden className="h-5 w-5 text-accent" />
                Your data and your knowledge stay yours.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
