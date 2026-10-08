"use client";

import { BookOpenCheck, GraduationCap, HardHat, Workflow } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import { container } from "@/lib/utils";

const reasons = [
  { title: "Grounded, not generic", body: "Answers come from your knowledge, not guesses.", icon: BookOpenCheck },
  { title: "Workflow-first", body: "Fits the way your team already works.", icon: Workflow },
  { title: "Built for real-world work", body: "Designed for frontline teams, not just desk work.", icon: HardHat },
  { title: "Learns from your experts", body: "Gets better the more your team uses it.", icon: GraduationCap },
];

export function WhyVera() {
  return (
    <section aria-labelledby="why-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading title={<span id="why-title">Why Vera</span>} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, body, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 0.07}>
              <GlowCard className="sweep-border group h-full p-6">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent-gradient group-hover:text-white group-hover:shadow-glow">
                  <Icon aria-hidden className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-body">{body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
