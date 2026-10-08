"use client";

import { AnimatePresence, m } from "framer-motion";
import { BookOpen, Check, FileText, Loader2, Sparkles } from "lucide-react";
import { useActiveInView, usePrefersReducedMotion, useStepLoop } from "@/lib/motion";
import { cn } from "@/lib/utils";

/* ---------------- Guided workflows ---------------- */

const steps = [
  "Confirm the task and scope",
  "Review relevant history",
  "Run the standard checks",
  "Record what you found",
  "Hand off the next step",
];

export function GuidedDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  // phases: 0..4 = step i in progress, 5 = all done (hold)
  const phase = useStepLoop([1200, 1100, 1100, 1100, 1100, 2600], inView, reduced);

  return (
    <div ref={ref} className="rounded-xl border border-line bg-canvas/60 p-4" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-body">Task checklist</span>
        <span className="font-mono text-[10px] text-accent">
          {Math.min(phase, steps.length)}/{steps.length}
        </span>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-pill bg-slate-200/70">
        <div
          className="h-full origin-left rounded-pill bg-accent-gradient transition-transform duration-700 ease-out"
          style={{ transform: `scaleX(${Math.min(phase, steps.length) / steps.length})` }}
        />
      </div>
      <ol className="space-y-2">
        {steps.map((s, i) => {
          const done = i < phase;
          const current = i === phase;
          return (
            <li
              key={s}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors duration-500",
                done && "border-line bg-white text-ink",
                current && "border-accent/30 bg-white text-ink shadow-[0_0_0_3px_rgba(79,70,229,0.08)]",
                !done && !current && "border-transparent text-body",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-pill border transition-all duration-500",
                  done ? "scale-100 border-transparent bg-accent-gradient" : "border-slate-300 bg-white",
                )}
              >
                {done ? (
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                ) : current ? (
                  <Loader2 className="h-3 w-3 animate-spin text-accent" />
                ) : null}
              </span>
              <span className={cn("transition-opacity", done && "opacity-80")}>{s}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ---------------- Context-aware answers ---------------- */

const question = "What's our process for escalating a priority request?";
const answer =
  "Flag it as priority, notify the on-call lead, then log the hand-off in the shared tracker so the next shift has full context.";

export function AnswerDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  // 0 question, 1 thinking, 2..(n+1) typing chunks, last = done w/ citation
  const words = answer.split(" ");
  const chunks = Math.ceil(words.length / 3);
  const durations = [900, 1100, ...Array(chunks).fill(140), 3200];
  const phase = useStepLoop(durations, inView, reduced);
  const typed = phase < 2 ? 0 : Math.min(words.length, (phase - 1) * 3);
  const done = phase === durations.length - 1;

  return (
    <div ref={ref} className="flex h-full flex-col gap-3 rounded-xl border border-line bg-canvas/60 p-4" aria-hidden="true">
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-sm text-white">{question}</div>
      <div className="flex max-w-[92%] items-start gap-2.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-accent-gradient">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </span>
        <div className="min-h-[88px] flex-1 rounded-2xl rounded-tl-md border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink shadow-card">
          {phase === 1 ? (
            <span className="flex h-5 items-center gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-pill bg-accent/60"
                  style={{ animationDelay: `${i * 120}ms` }}
                />
              ))}
            </span>
          ) : phase === 0 ? (
            <span className="block h-5" />
          ) : (
            <>
              <span>{words.slice(0, typed).join(" ")}</span>
              {!done && <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-accent" />}
              <span
                className={cn(
                  "mt-2.5 flex w-fit items-center gap-1.5 rounded-pill border border-accent/20 bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent transition-all duration-500",
                  done ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                )}
              >
                <BookOpen className="h-3 w-3" />
                Source: Operations playbook, p. 12
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Automated output ---------------- */

const reportLines = [
  { k: "Task", v: "Routine inspection" },
  { k: "Findings", v: "Two items flagged for follow-up" },
  { k: "Actions", v: "Parts replaced, settings verified" },
  { k: "Next steps", v: "Schedule follow-up visit" },
];

export function ReportDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  // 0 empty, 1..4 lines, 5 ready badge
  const phase = useStepLoop([800, 700, 700, 700, 700, 2800], inView, reduced);

  return (
    <div ref={ref} className="rounded-xl border border-line bg-canvas/60 p-4" aria-hidden="true">
      <div className="rounded-xl border border-line bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold text-ink">
            <FileText className="h-4 w-4 text-accent" />
            Job summary
          </span>
          <span
            className={cn(
              "rounded-pill bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 transition-all duration-500",
              phase >= 5 ? "scale-100 opacity-100" : "scale-90 opacity-0",
            )}
          >
            Ready to send
          </span>
        </div>
        <dl className="space-y-2">
          {reportLines.map((l, i) => {
            const shown = phase > i;
            return (
              <div key={l.k} className="grid grid-cols-[76px_1fr] items-center gap-2 text-xs">
                <dt className="font-mono uppercase tracking-wider text-body">{l.k}</dt>
                <dd className="relative h-4">
                  <span
                    className={cn(
                      "absolute inset-y-0.5 left-0 rounded bg-slate-100 transition-all duration-500",
                      shown ? "w-0 opacity-0" : "w-full opacity-100",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute inset-0 truncate text-ink transition-all duration-500",
                      shown ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0",
                    )}
                  >
                    {l.v}
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}

/* ---------------- Multi-agent orchestration ---------------- */

const orchNodes = [
  { label: "Research", x: 48, y: 40 },
  { label: "Plan", x: 232, y: 40 },
  { label: "Write", x: 232, y: 150 },
  { label: "Review", x: 48, y: 150 },
];
const TASK = { x: 140, y: 95 };

export function OrchestrationDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  // 0..3: message hop from node i to node i+1; 4: all converge on the task
  const phase = useStepLoop([1100, 1100, 1100, 1100, 2400], inView, reduced);
  const converge = phase === 4;
  const from = orchNodes[phase % 4];
  const to = orchNodes[(phase + 1) % 4];

  return (
    <div ref={ref} className="rounded-xl border border-line bg-canvas/60 p-2" aria-hidden="true">
      <svg viewBox="0 0 280 190" className="h-auto w-full">
        <defs>
          <linearGradient id="orch-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        {/* ring edges */}
        {orchNodes.map((n, i) => {
          const nx = orchNodes[(i + 1) % 4];
          const lit = !converge && i === phase;
          return (
            <line
              key={`r-${i}`}
              x1={n.x}
              y1={n.y}
              x2={nx.x}
              y2={nx.y}
              stroke={lit ? "url(#orch-grad)" : "#D5D9E3"}
              strokeWidth={lit ? 2 : 1.2}
              strokeDasharray={lit ? undefined : "3 5"}
              style={{ transition: "stroke 300ms" }}
            />
          );
        })}
        {/* spokes to task */}
        {orchNodes.map((n, i) => (
          <line
            key={`s-${i}`}
            x1={n.x}
            y1={n.y}
            x2={TASK.x}
            y2={TASK.y}
            stroke={converge ? "url(#orch-grad)" : "#E4E7EC"}
            strokeWidth={converge ? 2 : 1}
            style={{ transition: "stroke 400ms" }}
          />
        ))}
        {/* task node */}
        <g>
          <circle cx={TASK.x} cy={TASK.y} r={converge ? 30 : 24} fill="#7C3AED" opacity={converge ? 0.14 : 0.06} style={{ transition: "all 500ms" }} />
          <rect x={TASK.x - 30} y={TASK.y - 13} width={60} height={26} rx={13} fill={converge ? "url(#orch-grad)" : "#fff"} stroke="url(#orch-grad)" strokeWidth={1.2} />
          <text x={TASK.x} y={TASK.y + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill={converge ? "#fff" : "#4F46E5"}>
            One task
          </text>
        </g>
        {/* agent nodes */}
        {orchNodes.map((n, i) => {
          const active = converge || i === phase || i === (phase + 1) % 4;
          return (
            <g key={n.label}>
              <rect
                x={n.x - 34}
                y={n.y - 14}
                width={68}
                height={28}
                rx={8}
                fill="#fff"
                stroke={active ? "#7C3AED" : "#E4E7EC"}
                strokeWidth={active ? 1.5 : 1}
                style={{ transition: "stroke 300ms", filter: active ? "drop-shadow(0 4px 10px rgba(79,70,229,0.22))" : undefined }}
              />
              <circle cx={n.x - 22} cy={n.y} r={3.5} fill={active ? "url(#orch-grad)" : "#CBD0DC"} />
              <text x={n.x - 14} y={n.y + 3.5} fontSize="10" fontWeight="500" fill="#0B0D12">
                {n.label}
              </text>
            </g>
          );
        })}
        {/* message particles */}
        {!reduced && (
          <AnimatePresence>
            {!converge ? (
              <m.circle
                key={`msg-${phase}`}
                r={5}
                fill="url(#orch-grad)"
                initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                animate={{ cx: to.x, cy: to.y, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.95, ease: "easeInOut" }}
              />
            ) : (
              orchNodes.map((n) => (
                <m.circle
                  key={`conv-${n.label}`}
                  r={4}
                  fill="url(#orch-grad)"
                  initial={{ cx: n.x, cy: n.y, opacity: 0 }}
                  animate={{ cx: TASK.x, cy: TASK.y, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              ))
            )}
          </AnimatePresence>
        )}
      </svg>
    </div>
  );
}
