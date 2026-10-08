"use client";

import { Hourglass, RotateCcw, UserMinus } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import { LostIllustration, SlowIllustration } from "@/components/visuals/problem-illustrations";
import { useActiveInView, usePrefersReducedMotion } from "@/lib/motion";
import { cn, container } from "@/lib/utils";

const loop = "M70 78c8-28 36-46 66-42 28 4 48 28 46 56-2 26-24 44-52 44-18 0-34-8-44-22";

function RepeatIllustration() {
  const reduced = usePrefersReducedMotion();
  return (
    <svg viewBox="0 0 260 130" className="h-full w-full" aria-hidden="true">
      <path d={loop} fill="none" stroke="#C9CCE4" strokeWidth="3" strokeLinecap="round" />
      <path
        d={loop}
        pathLength={1}
        fill="none"
        stroke="url(#repeat-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={1}
        strokeDashoffset={reduced ? 0 : undefined}
        style={{ animation: reduced ? undefined : "draw-loop 5.5s ease-in-out infinite" }}
      />
      {!reduced && (
        <circle r="6" fill="url(#repeat-grad)">
          <animateMotion dur="5.5s" repeatCount="indefinite" path={loop} />
        </circle>
      )}
      <path d="M62 70l16 2-8 14" fill="none" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="repeat-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const problems = [
  {
    title: "Repeat visits",
    body: "Issues that aren't diagnosed right the first time mean another trip.",
    icon: RotateCcw,
    Visual: RepeatIllustration,
  },
  {
    title: "Waiting on experts",
    body: "Newer technicians call senior staff for help, and both lose time.",
    icon: Hourglass,
    Visual: SlowIllustration,
  },
  {
    title: "Knowledge walks out",
    body: "When experienced technicians leave, their know-how goes with them.",
    icon: UserMinus,
    Visual: LostIllustration,
  },
];

export function GroundControlProblem() {
  const { ref, inView } = useActiveInView<HTMLUListElement>();

  return (
    <section aria-labelledby="gc-problem-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading title={<span id="gc-problem-title">Field work runs on knowledge that&rsquo;s hard to reach.</span>} />
        <ul ref={ref} className={cn("mt-12 grid gap-5 md:grid-cols-3", !inView && "anim-paused")}>
          {problems.map(({ title, body, icon: Icon, Visual }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08}>
              <GlowCard className="h-full overflow-hidden">
                <div className="relative h-40 border-b border-line bg-[linear-gradient(180deg,#FBFBFE,#F4F5FB)]">
                  <div aria-hidden className="dot-grid absolute inset-0 opacity-50" />
                  <div className="relative h-full">
                    <Visual />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon aria-hidden className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  </div>
                  <p className="mt-3 leading-[1.6] text-body">{body}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
