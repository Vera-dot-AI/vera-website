"use client";

import { m } from "framer-motion";
import { BookOpen, Check, History, StickyNote } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { useActiveInView, usePrefersReducedMotion, useStepLoop } from "@/lib/motion";
import { cn, container } from "@/lib/utils";

const sources = [
  { label: "Manuals", icon: BookOpen, cite: "Equipment manual, §4.2" },
  { label: "Service history", icon: History, cite: "Last visit, job 1841" },
  { label: "Team notes", icon: StickyNote, cite: "Lead tech note" },
];

const bullets = [
  "Cited answers in seconds.",
  "Selective knowledge for the equipment you service.",
  "Gets sharper with every job your team completes.",
];

export function GroundedAnswers() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const phase = useStepLoop([900, 900, 900, 1100, 2200], inView, reduced, 4);
  const active = Math.min(phase, 2);
  const answered = phase >= 3;

  return (
    <section aria-labelledby="gc-grounded-title" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_50%,#000,transparent)]" />
        <div className="absolute right-[8%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-pill bg-[radial-gradient(circle,rgba(124,58,237,0.28),rgba(79,70,229,0.08)_45%,transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      </div>

      <div className={`${container} relative grid items-center gap-14 lg:grid-cols-2 lg:gap-12`}>
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow dark>Knowledge layer</Eyebrow>
            <h2
              id="gc-grounded-title"
              className="mt-4 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-[2.5rem] lg:text-[2.875rem]"
            >
              Answers from your knowledge, not guesses.
            </h2>
            <p className="mt-5 text-pretty text-base leading-[1.6] text-slate-300 sm:text-lg">
              GroundControl draws on equipment manuals, past service history, and your team&rsquo;s experience.
              Every answer comes with its source, so technicians can trust what they&rsquo;re told.
            </p>
          </Reveal>
          <m.ul
            className="mt-8 space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
          >
            {bullets.map((b) => (
              <m.li
                key={b}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-accent-gradient">
                  <Check aria-hidden className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-slate-200">{b}</span>
              </m.li>
            ))}
          </m.ul>
        </div>

        <div ref={ref} className={cn("relative mx-auto max-w-xl", !inView && "anim-paused")}>
          <ul className="grid grid-cols-3 gap-2 sm:gap-3">
            {sources.map((source, i) => {
              const Icon = source.icon;
              const on = reduced || i <= active;
              return (
                <li
                  key={source.label}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-2xl border px-2 py-3 text-center transition-all duration-500 sm:px-3",
                    on ? "border-violet-300/50 bg-white/10 shadow-glow" : "border-white/10 bg-white/[0.03] opacity-60",
                  )}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient text-white">
                    <Icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-medium sm:text-sm">{source.label}</span>
                </li>
              );
            })}
          </ul>

          <svg viewBox="0 0 300 72" className="h-14 w-full" aria-hidden="true">
            <defs>
              <linearGradient id="gc-line" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#C4B5FD" />
              </linearGradient>
            </defs>
            {[
              "M50 0 C 50 36, 150 36, 150 72",
              "M150 0 C 150 24, 150 48, 150 72",
              "M250 0 C 250 36, 150 36, 150 72",
            ].map((d, i) => {
              const on = reduced || i <= active;
              return (
                <path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#gc-line)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  strokeDashoffset={on ? 0 : 1}
                  opacity={on ? 1 : 0.2}
                  style={{ transition: "stroke-dashoffset 600ms ease, opacity 400ms" }}
                />
              );
            })}
            {!reduced && (
              <circle r="3.2" fill="#E0E7FF">
                <animateMotion
                  dur="1.1s"
                  repeatCount="indefinite"
                  path={["M50 0 C 50 36, 150 36, 150 72", "M150 0 C 150 24, 150 48, 150 72", "M250 0 C 250 36, 150 36, 150 72"][active]}
                />
              </circle>
            )}
          </svg>

          <div className="rounded-2xl border border-white/15 bg-white px-4 py-3 text-ink shadow-lift">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-body">Question</p>
            <p className="mt-1 text-sm font-medium leading-snug">What should I check first for fault E21?</p>
          </div>

          <div
            className={cn(
              "mt-3 rounded-2xl border px-4 py-3 transition-all duration-500",
              answered || reduced ? "translate-y-0 border-violet-300/50 bg-white text-ink opacity-100 shadow-glow" : "translate-y-1 border-white/10 bg-white/[0.04] text-slate-500 opacity-70",
            )}
          >
            <p className={cn("font-mono text-[10px] font-medium uppercase tracking-[0.08em]", answered || reduced ? "text-accent" : "text-slate-400")}>
              Answer
            </p>
            <p className={cn("mt-1 text-sm font-medium leading-snug", answered || reduced ? "text-ink" : "text-slate-400")}>
              Start with the supply connection, then the sensor path.
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {sources.map((source) => (
                <li
                  key={source.cite}
                  className={cn(
                    "rounded-pill border border-accent/20 bg-accent-soft px-2 py-1 font-mono text-[10px] font-medium text-accent transition-all duration-500",
                    answered || reduced ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                  )}
                >
                  {source.cite}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
