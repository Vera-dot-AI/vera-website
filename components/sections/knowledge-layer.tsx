"use client";

import { m } from "framer-motion";
import { Check } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/ui/primitives";
import { LayerStack } from "@/components/visuals/layer-stack";
import { container } from "@/lib/utils";

const bullets = [
  "Ingests documents and work history.",
  "Retrieves the right context in real time.",
  "Learns from how your experts actually work.",
];

export function KnowledgeLayer() {
  return (
    <section
      id="platform"
      aria-labelledby="platform-title"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_50%,#000,transparent)]" />
        <div className="absolute right-[5%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-pill bg-[radial-gradient(circle,rgba(124,58,237,0.28),rgba(79,70,229,0.08)_45%,transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      </div>

      <div className={`${container} relative grid items-center gap-14 lg:grid-cols-2 lg:gap-12`}>
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow dark>Knowledge layer</Eyebrow>
            <h2
              id="platform-title"
              className="mt-4 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.5rem] lg:text-[2.875rem]"
            >
              One knowledge layer for everything your team knows.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Vera takes in your documents, manuals, records, and the history of the work itself, and turns them
              into structured, searchable knowledge. Every answer is grounded in your sources, not the open
              internet.
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

        <Reveal delay={0.1}>
          <LayerStack />
        </Reveal>
      </div>
    </section>
  );
}
