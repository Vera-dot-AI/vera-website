"use client";

import { useRef, useState } from "react";
import { m, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Plug, Rocket, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/primitives";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn, container } from "@/lib/utils";

const steps = [
  { title: "Connect your knowledge", body: "Bring in manuals, docs, and records.", icon: Plug },
  { title: "Deploy copilots", body: "Your team uses them on mobile, web, and in the field.", icon: Rocket },
  {
    title: "Improve with every job",
    body: "The system learns from real usage and gets sharper over time.",
    icon: TrendingUp,
  },
];

/* Fraction of the line at which each step's marker sits. */
const thresholds = [0.02, 0.5, 0.98];

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [reached, setReached] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setReached(thresholds.filter((t) => v >= t - 0.02).length);
  });

  const count = reduced ? steps.length : reached;

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading title={<span id="how-title">How it works</span>} />

        <ol ref={ref} className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* track + drawn line, horizontal on desktop */}
          <div aria-hidden className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-[2px] rounded-pill bg-line md:block">
            <m.div
              className="h-full origin-left rounded-pill bg-accent-gradient"
              style={{ scaleX: reduced ? 1 : progress }}
            />
          </div>
          {/* vertical on mobile */}
          <div aria-hidden className="absolute bottom-7 left-7 top-7 w-[2px] rounded-pill bg-line md:hidden">
            <m.div className="h-full w-full origin-top rounded-pill bg-accent-gradient" style={{ scaleY: reduced ? 1 : progress }} />
          </div>

          {steps.map(({ title, body, icon: Icon }, i) => {
            const on = i < count;
            return (
              <li key={title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                <div className="relative z-10 shrink-0">
                  <span
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-card transition-all duration-700 ease-out",
                      on ? "scale-100 border-accent/30 shadow-glow" : "scale-90 border-line",
                    )}
                  >
                    <Icon
                      aria-hidden
                      className={cn(
                        "h-6 w-6 transition-all duration-700",
                        on ? "rotate-0 text-accent opacity-100" : "-rotate-12 text-slate-400 opacity-60",
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-pill font-mono text-[11px] font-medium transition-colors duration-500",
                      on ? "bg-accent-gradient text-white" : "border border-line bg-white text-body",
                    )}
                  >
                    {i + 1}
                  </span>
                </div>
                <div
                  className={cn(
                    "pt-1 transition-all duration-700 ease-out md:pt-6",
                    on ? "translate-y-0" : "translate-y-1.5",
                  )}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-body md:mx-auto">{body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
