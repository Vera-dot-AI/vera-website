"use client";

import { Building2, HardHat, Users } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import { container } from "@/lib/utils";

const roles = [
  { title: "Technicians", body: "Expert help in your pocket on every job.", icon: HardHat },
  { title: "Service managers", body: "Fewer repeat visits and consistent quality across the team.", icon: Users },
  { title: "Service companies", body: "Capture and scale what your best people know.", icon: Building2 },
];

export function Audience() {
  return (
    <section aria-labelledby="gc-who-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading title={<span id="gc-who-title">Who it&rsquo;s for</span>} />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {roles.map(({ title, body, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08}>
              <GlowCard className="sweep-border group h-full p-6">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent-gradient group-hover:text-white group-hover:shadow-glow">
                  <Icon aria-hidden className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 leading-[1.6] text-body">{body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
