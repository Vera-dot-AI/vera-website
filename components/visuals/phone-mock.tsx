"use client";

import { BookOpen, CheckCircle2, Mic, SendHorizontal, Sparkles } from "lucide-react";
import { useActiveInView, usePrefersReducedMotion, useStepLoop } from "@/lib/motion";
import { cn } from "@/lib/utils";

const message = "Machine shows fault code E21 after restart. What should I check first?";
const checks = [
  "Confirm the supply connection and reset the main switch.",
  "Inspect the sensor wiring for loose or damaged connectors.",
  "Run the built-in self-test and compare readings to spec.",
];

const CHARS_PER_TICK = 3;
const TYPE_TICKS = Math.ceil(message.length / CHARS_PER_TICK);

/* Phase layout: empty, typing ticks, sent, thinking, 3 checks, source, toast. */
const SENT = TYPE_TICKS + 1;
const THINKING = SENT + 1;
const CHECK_1 = THINKING + 1;
const SOURCE = CHECK_1 + checks.length;
const TOAST = SOURCE + 1;
const durations = [
  900,
  ...Array(TYPE_TICKS).fill(55),
  500,
  1100,
  ...Array(checks.length).fill(850),
  700,
  3200,
];

export function PhoneMock() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const phase = useStepLoop(durations, inView, reduced);

  const typing = phase >= 1 && phase <= TYPE_TICKS;
  const typed = typing ? message.slice(0, phase * CHARS_PER_TICK) : "";
  const sent = phase >= SENT;
  const checksShown = phase >= CHECK_1 ? Math.min(checks.length, phase - CHECK_1 + 1) : 0;
  const streaming = phase >= CHECK_1 && phase < SOURCE;

  return (
    <div ref={ref} className="relative mx-auto w-[280px] sm:w-[300px]" aria-hidden="true">
      <div className="rounded-[2.6rem] border border-slate-800 bg-ink p-2.5 shadow-[0_40px_80px_-30px_rgba(11,13,18,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        <div className="relative flex h-[540px] flex-col overflow-hidden rounded-[2.1rem] bg-[#F7F8FA]">
          {/* status / notch */}
          <div className="relative flex h-9 items-center justify-between px-6 pt-1 text-[10px] font-semibold text-ink">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-pill bg-ink" />
            <span className="flex gap-1">
              <span className="h-1.5 w-3 rounded-sm bg-ink/80" />
              <span className="h-1.5 w-1.5 rounded-pill bg-ink/80" />
            </span>
          </div>

          {/* app header */}
          <div className="flex items-center gap-2.5 border-b border-line bg-white px-4 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-gradient">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold text-ink">GroundControl</p>
              <p className="flex items-center gap-1 text-[10px] text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-pill bg-emerald-500" />
                Copilot online
              </p>
            </div>
          </div>

          {/* chat */}
          <div className="flex flex-1 flex-col gap-3 overflow-hidden px-3.5 py-4">
            <div
              className={cn(
                "ml-auto max-w-[86%] rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-[12.5px] leading-snug text-white transition-all duration-500",
                sent ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
              )}
            >
              {message}
            </div>

            {phase >= THINKING && (
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-accent-gradient">
                  <Sparkles className="h-3 w-3 text-white" />
                </span>
                <div className="flex-1 rounded-2xl rounded-tl-md border border-line bg-white px-3.5 py-3 text-[12px] leading-snug text-ink shadow-card">
                  {phase === THINKING ? (
                    <span className="flex h-4 items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 animate-bounce rounded-pill bg-accent/60"
                          style={{ animationDelay: `${i * 120}ms` }}
                        />
                      ))}
                    </span>
                  ) : (
                    <>
                      <p className="font-medium">Start with these checks:</p>
                      <ol className="mt-2 space-y-2">
                        {checks.slice(0, checksShown).map((c, i) => (
                          <li key={c} className="flex animate-[fade-up_400ms_ease-out] gap-2">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-pill bg-accent-soft text-[9px] font-medium text-accent">
                              {i + 1}
                            </span>
                            <span className="text-ink/90">{c}</span>
                          </li>
                        ))}
                      </ol>
                      {streaming && (
                        <span className="ml-6 mt-1 inline-block h-3 w-[2px] animate-pulse bg-accent" />
                      )}
                      <span
                        className={cn(
                          "mt-3 flex w-fit items-center gap-1.5 rounded-pill border border-accent/20 bg-accent-soft px-2 py-1 font-mono text-[10px] font-medium text-accent transition-all duration-500",
                          phase >= SOURCE ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                        )}
                      >
                        <BookOpen className="h-3 w-3" />
                        Source: Equipment manual, section 4.2
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <div className="border-t border-line bg-white px-3 py-2.5">
            <div className="flex items-center gap-2 rounded-pill border border-line bg-canvas px-3 py-2">
              <span className="min-w-0 flex-1 truncate text-[11.5px]">
                {typing ? (
                  <span className="text-ink">
                    {typed}
                    <span className="ml-px inline-block h-3 w-px translate-y-0.5 animate-pulse bg-ink" />
                  </span>
                ) : (
                  <span className="text-body">Ask GroundControl&hellip;</span>
                )}
              </span>
              <Mic className="h-3.5 w-3.5 text-body" />
              <span className="flex h-6 w-6 items-center justify-center rounded-pill bg-accent-gradient">
                <SendHorizontal className="h-3 w-3 text-white" />
              </span>
            </div>
          </div>

          {/* toast */}
          <div
            className={cn(
              "absolute inset-x-3 top-11 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-white/95 px-3 py-2.5 shadow-lift backdrop-blur transition-all duration-500 ease-out",
              phase >= TOAST ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
            )}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
            <div className="leading-tight">
              <p className="text-[12px] font-semibold text-ink">Report generated</p>
              <p className="text-[10.5px] text-body">Service report ready to share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
