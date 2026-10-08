"use client";

import { Shuffle, Hourglass, UserMinus } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import {
  LostIllustration,
  ScatteredIllustration,
  SlowIllustration,
} from "@/components/visuals/problem-illustrations";
import { useActiveInView } from "@/lib/motion";
import { cn, container } from "@/lib/utils";

const problems = [
  {
    title: "Scattered",
    body: "Answers live in manuals, tickets, systems, and people's heads.",
    icon: Shuffle,
    Visual: ScatteredIllustration,
  },
  {
    title: "Slow",
    body: "New team members wait on experts, and experts become the bottleneck.",
    icon: Hourglass,
    Visual: SlowIllustration,
  },
  {
    title: "Lost",
    body: "When people leave, what they knew leaves with them.",
    icon: UserMinus,
    Visual: LostIllustration,
  },
];

export function Problem() {
  const { ref, inView } = useActiveInView<HTMLUListElement>();

  return (
    <section aria-labelledby="problem-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading title={<span id="problem-title">Expertise doesn&rsquo;t scale. Yet.</span>} />
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
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
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
