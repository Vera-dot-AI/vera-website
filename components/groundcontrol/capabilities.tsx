"use client";

import { ArrowRight, Check, FileText, History, ListChecks, MessageSquareText, Smartphone, Users } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import { useActiveInView, usePrefersReducedMotion, useStepLoop } from "@/lib/motion";
import { cn, container } from "@/lib/utils";

const diagnosis = ["Confirm the symptom", "Check the likely cause", "Verify the reading", "Record what you found"];

function DiagnosisDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView<HTMLOListElement>();
  const phase = useStepLoop([1000, 1000, 1000, 1000, 1800], inView, reduced);
  return (
    <ol ref={ref} className="space-y-2 rounded-xl border border-line bg-canvas/60 p-3" aria-hidden="true">
      {diagnosis.map((step, i) => {
        const done = i < phase;
        return (
          <li
            key={step}
            className={cn(
              "flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm transition-colors duration-500",
              done ? "border-line bg-white text-ink" : "border-transparent text-body",
            )}
          >
            <span className={cn("flex h-5 w-5 items-center justify-center rounded-pill", done ? "bg-accent-gradient" : "border border-slate-300 bg-white")}>
              {done && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
            </span>
            {step}
          </li>
        );
      })}
    </ol>
  );
}

function CitationDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const phase = useStepLoop([900, 1600], inView, reduced);
  const show = phase === 1;
  return (
    <div ref={ref} className="rounded-xl border border-line bg-canvas/60 p-4" aria-hidden="true">
      <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-sm text-white">
        What does fault E21 mean after a restart?
      </p>
      <div className="mt-3 max-w-[92%] rounded-2xl rounded-tl-md border border-line bg-white px-3 py-2.5 text-sm text-ink shadow-card">
        Check the supply connection first, then the sensor path.
        <span
          className={cn(
            "mt-2 flex w-fit items-center gap-1.5 rounded-pill border border-accent/20 bg-accent-soft px-2 py-1 font-mono text-[10px] font-medium text-accent transition-all duration-500",
            show ? "translate-y-0 scale-100 opacity-100" : "translate-y-1 scale-90 opacity-0",
          )}
        >
          Equipment manual, section 4.2
        </span>
      </div>
    </div>
  );
}

function HandoffDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const phase = useStepLoop([1400, 1400], inView, reduced);
  const sent = phase === 1;
  return (
    <div ref={ref} className="flex items-center gap-3 rounded-xl border border-line bg-canvas/60 px-4 py-5" aria-hidden="true">
      <div className="flex flex-col items-center gap-1.5">
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-pill text-sm font-medium text-white transition-all duration-500", !sent ? "bg-accent-gradient shadow-glow" : "bg-slate-300")}>A</span>
        <span className="text-xs text-body">You</span>
      </div>
      <div className="relative h-8 flex-1">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
        <span
          className="absolute top-1/2 flex h-7 -translate-y-1/2 items-center gap-1 rounded-pill border border-accent/20 bg-white px-2 text-[10px] font-medium text-accent shadow-card transition-all duration-700"
          style={{ left: sent || reduced ? "calc(100% - 6.5rem)" : "0%" }}
        >
          <ArrowRight className="h-3 w-3" />
          Job context
        </span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-pill text-sm font-medium text-white transition-all duration-500", sent ? "bg-accent-gradient shadow-glow" : "bg-slate-300")}>S</span>
        <span className="text-xs text-body">Next</span>
      </div>
    </div>
  );
}

const reportLines = ["Fault E21 after restart", "Supply reset, sensor checked", "Unit back in service"];

function ReportDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView();
  const phase = useStepLoop([700, 700, 700, 1800], inView, reduced);
  return (
    <div ref={ref} className="rounded-xl border border-line bg-white p-4 shadow-card" aria-hidden="true">
      <p className="flex items-center gap-2 text-sm font-medium text-ink">
        <FileText className="h-4 w-4 text-accent" />
        Service report
      </p>
      <ul className="mt-3 space-y-2">
        {reportLines.map((line, i) => (
          <li key={line} className="relative h-4 text-xs text-ink">
            <span className={cn("absolute inset-y-0.5 left-0 rounded bg-slate-100 transition-all duration-500", phase > i ? "w-0 opacity-0" : "w-3/4 opacity-100")} />
            <span className={cn("absolute inset-0 truncate transition-all duration-500", phase > i ? "opacity-100" : "opacity-0")}>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const jobs = ["Job 1841 · Fault E21", "Job 1836 · Sensor swap", "Job 1822 · Restart check"];

function HistoryDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useActiveInView<HTMLUListElement>();
  const phase = useStepLoop([1100, 1100, 1100], inView, reduced);
  return (
    <ul ref={ref} className="space-y-2 rounded-xl border border-line bg-canvas/60 p-3" aria-hidden="true">
      {jobs.map((job, i) => (
        <li
          key={job}
          className={cn(
            "rounded-lg border px-3 py-2 text-sm transition-all duration-500",
            !reduced && i === phase ? "border-accent/30 bg-white text-ink shadow-card" : "border-transparent text-body",
            reduced && "border-line bg-white text-ink",
          )}
        >
          {job}
        </li>
      ))}
    </ul>
  );
}

function FieldDemo() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-line bg-canvas/60 p-4" aria-hidden="true">
      <div className="w-16 shrink-0 rounded-2xl border border-slate-800 bg-ink p-1">
        <div className="flex h-24 flex-col justify-end rounded-xl bg-canvas p-1.5">
          <span className="rounded-md bg-white px-1 py-1 text-[8px] font-medium leading-tight text-ink shadow-card">On site</span>
        </div>
      </div>
      <p className="text-sm font-medium text-ink">On site</p>
    </div>
  );
}

const cards = [
  { title: "Guided diagnosis", body: "Ordered troubleshooting steps for the fault in front of you.", icon: ListChecks, Demo: DiagnosisDemo, className: "lg:row-span-2" },
  { title: "Answers on the job", body: "Ask anything and get a cited answer in seconds.", icon: MessageSquareText, Demo: CitationDemo, className: "lg:col-span-2" },
  { title: "Team hand-offs", body: "Pass a job to a teammate with full context, no starting over.", icon: Users, Demo: HandoffDemo, className: "" },
  { title: "Automatic reports", body: "Service and diagnostic reports, written for you.", icon: FileText, Demo: ReportDemo, className: "" },
  { title: "Diagnostic history", body: "Every job is saved and searchable for next time.", icon: History, Demo: HistoryDemo, className: "" },
  { title: "Built for the field", body: "A mobile-first experience designed for technicians on site.", icon: Smartphone, Demo: FieldDemo, className: "" },
];

export function Capabilities() {
  return (
    <section aria-labelledby="gc-capabilities-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading title={<span id="gc-capabilities-title">Everything a technician needs on the job.</span>} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, body, icon: Icon, Demo, className }, i) => (
            <Reveal as="li" key={title} delay={i * 0.05} className={className}>
              <GlowCard className="flex h-full flex-col gap-5 p-5 sm:p-6">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 leading-[1.6] text-body">{body}</p>
                </div>
                <div className="mt-auto">
                  <Demo />
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
