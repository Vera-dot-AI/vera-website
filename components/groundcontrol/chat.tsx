"use client";

import { BookOpen, Check, CheckCircle2, Mic, SendHorizontal, Sparkles } from "lucide-react";
import { useActiveInView, usePrefersReducedMotion, useStepLoop } from "@/lib/motion";
import { cn } from "@/lib/utils";

const message = "Machine shows fault code E21 after restart. What should I check first?";
const read = "Fault E21 after a restart points to the supply and the sensor path.";
const checks = [
  "Confirm the supply connection and reset the main switch.",
  "Inspect the sensor wiring for loose or damaged connectors.",
  "Run the built-in self-test and compare readings to spec.",
];

const CHARS = 3;
const TYPE_TICKS = Math.ceil(message.length / CHARS);
const readWords = read.split(" ");
const READ_STEPS = Math.ceil(readWords.length / 3);

const TYPE_END = TYPE_TICKS;
const SENT = TYPE_END + 1;
const READ_END = SENT + READ_STEPS;
const SOURCE = READ_END + 1;
const CHECK_END = SOURCE + checks.length;
const STEP_DONE = CHECK_END + 1;
const TOAST = STEP_DONE + 1;

const durations = Array.from({ length: TOAST + 1 }, (_, phase) => {
  if (phase <= TYPE_END) return 46;
  if (phase === SENT) return 420;
  if (phase <= READ_END) return 70;
  if (phase === SOURCE) return 480;
  if (phase === TOAST) return 3200;
  return 680;
});

export function GroundControlChat() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const phase = useStepLoop(durations, inView, reduced);

  const typing = phase <= TYPE_END;
  const typed = typing ? message.slice(0, (phase + 1) * CHARS) : "";
  const sent = phase >= SENT;
  const readCount =
    phase <= SENT ? 0 : Math.min(readWords.length, (Math.min(phase, READ_END) - SENT) * 3);
  const showSource = phase >= SOURCE;
  const checksShown = phase <= SOURCE ? 0 : Math.min(checks.length, Math.min(phase, CHECK_END) - SOURCE);
  const stepDone = phase >= STEP_DONE;
  const toast = phase >= TOAST;
  const streaming = phase > SENT && phase <= READ_END;

  return (
    <div ref={ref} className="relative mx-auto w-[280px] sm:w-[300px]" aria-hidden="true">
      <div className="rounded-[2.6rem] border border-slate-800 bg-ink p-2.5 shadow-[0_40px_80px_-30px_rgba(11,13,18,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        <div className="relative flex h-[560px] flex-col overflow-hidden rounded-[2.1rem] bg-canvas">
          <div className="relative flex h-9 items-center justify-between px-6 pt-1 text-[10px] font-medium text-ink">
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-pill bg-ink" />
            <span className="h-1.5 w-4 rounded-sm bg-ink/80" />
          </div>

          <div className="flex items-center gap-2.5 border-b border-line bg-white px-4 py-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-gradient">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-medium text-ink">GroundControl</p>
              <p className="flex items-center gap-1 text-[10px] text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-pill bg-emerald-500" />
                Copilot online
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-hidden px-3.5 py-4">
            <div
              className={cn(
                "ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-ink px-3.5 py-2.5 text-[12.5px] leading-snug text-white",
                sent ? "opacity-100" : "hidden",
              )}
            >
              {message}
            </div>

            {phase > SENT && (
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-accent-gradient">
                  <Sparkles className="h-3 w-3 text-white" />
                </span>
                <div className="flex-1 rounded-2xl rounded-tl-md border border-line bg-white px-3.5 py-3 text-[12px] leading-snug text-ink shadow-card">
                  <p>
                    {readWords.slice(0, readCount).join(" ")}
                    {streaming && <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-0.5 animate-pulse bg-accent" />}
                  </p>
                  <span
                    className={cn(
                      "mt-2.5 flex w-fit items-center gap-1.5 rounded-pill border border-accent/20 bg-accent-soft px-2 py-1 font-mono text-[10px] font-medium text-accent transition-all duration-500",
                      showSource ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0",
                    )}
                  >
                    <BookOpen className="h-3 w-3" />
                    Source: Equipment manual, section 4.2
                  </span>
                  <ol className="mt-3 space-y-2">
                    {checks.slice(0, checksShown).map((check, i) => {
                      const done = i === 0 && stepDone;
                      return (
                        <li key={check} className="flex animate-[fade-up_400ms_ease-out] gap-2">
                          <span
                            className={cn(
                              "flex h-4 w-4 shrink-0 items-center justify-center rounded-pill text-[9px] font-medium",
                              done ? "bg-accent-gradient text-white" : "bg-accent-soft text-accent",
                            )}
                          >
                            {done ? <Check className="h-2.5 w-2.5" strokeWidth={3} /> : i + 1}
                          </span>
                          <span className="text-ink/90">{check}</span>
                        </li>
                      );
                    })}
                  </ol>
                  <p
                    className={cn(
                      "overflow-hidden text-[11px] font-medium text-accent transition-all duration-500",
                      stepDone ? "mt-2.5 max-h-6 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    Step 1 done
                  </p>
                </div>
              </div>
            )}
          </div>

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

          <div
            className={cn(
              "absolute inset-x-3 top-11 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-white/95 px-3 py-2.5 shadow-lift backdrop-blur transition-all duration-500 ease-out",
              toast ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
            )}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
            <div className="leading-tight">
              <p className="text-[12px] font-medium text-ink">Report generated</p>
              <p className="text-[10.5px] text-body">Service report ready to share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
