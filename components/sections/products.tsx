"use client";

import { ArrowRight, FileCheck2, MessageSquareText, ScanSearch, Sparkles, Users } from "lucide-react";
import { GlowCard, Reveal, SectionHeading } from "@/components/ui/primitives";
import { PhoneMock } from "@/components/visuals/phone-mock";
import { container } from "@/lib/utils";

const capabilities = [
  {
    title: "Guided diagnosis",
    body: "Step-by-step troubleshooting grounded in equipment manuals and service history.",
    icon: ScanSearch,
  },
  {
    title: "Answers on the job",
    body: "Ask in plain language and get cited answers in seconds.",
    icon: MessageSquareText,
  },
  {
    title: "Team hand-offs",
    body: "Share context between technicians without starting over.",
    icon: Users,
  },
  {
    title: "Automatic reports",
    body: "Service and diagnostic reports written for you after every job.",
    icon: FileCheck2,
  },
];

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="py-20 sm:py-28">
      <div className={container}>
        <SectionHeading
          eyebrow="Products"
          title={<span id="products-title">Copilots built on the Vera platform.</span>}
          body="Each Vera product pairs the knowledge layer with agents designed for a specific kind of work."
        />

        <Reveal className="mt-12">
          <GlowCard as="article" className="overflow-hidden hover:translate-y-0" aria-labelledby="gc-title">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6 sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-pill border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-pill bg-accent-violet opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-pill bg-accent" />
                  </span>
                  Now piloting
                </span>
                <h3 id="gc-title" className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                  GroundControl
                </h3>
                <p className="mt-2 text-lg font-medium text-gradient">The AI copilot for on-field operations.</p>
                <p className="mt-4 max-w-xl leading-relaxed text-body">
                  GroundControl puts expert know-how in every technician&rsquo;s pocket. It helps teams diagnose
                  issues faster, follow the right steps on site, and capture what the best technicians know, so it
                  isn&rsquo;t lost when they move on.
                </p>

                <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {capabilities.map(({ title, body, icon: Icon }) => (
                    <li key={title} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-accent shadow-card">
                        <Icon aria-hidden className="h-[18px] w-[18px]" />
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-body">{body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-line pt-5 text-sm text-body">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">Built for</span>
                  <span aria-hidden className="mx-2.5 inline-block h-1 w-1 translate-y-[-2px] rounded-pill bg-slate-300" />
                  Field service teams and technicians.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/groundcontrol"
                    className="group inline-flex items-center justify-center gap-2 rounded-pill bg-accent-gradient px-5 py-3 text-sm font-medium text-white shadow-glow transition-[filter] hover:brightness-110"
                  >
                    Explore GroundControl
                    <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-pill px-4 py-3 text-sm font-medium text-ink hover:text-accent"
                  >
                    Request pilot access
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-center overflow-hidden border-t border-line bg-[linear-gradient(160deg,#EEF0FF_0%,#F5F3FF_45%,#F7F8FA_100%)] px-6 py-10 lg:border-l lg:border-t-0">
                <div aria-hidden className="dot-grid absolute inset-0 opacity-60" />
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-pill bg-[radial-gradient(circle,rgba(124,58,237,0.22),transparent_65%)] blur-2xl"
                />
                <div className="relative">
                  <PhoneMock />
                </div>
                <p className="relative mt-5 text-xs text-body">Illustrative interface.</p>
              </div>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal className="mt-5" delay={0.05}>
          <div className="flex flex-col gap-5 rounded-2xl border border-dashed border-slate-300 bg-white/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-white text-accent">
                <Sparkles aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">More copilots coming</h3>
                <p className="mt-1 max-w-2xl leading-relaxed text-body">
                  The same knowledge layer powers copilots for other expert-driven work. Building something
                  knowledge-heavy? Talk to us.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-pill border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-card transition-colors hover:border-accent/30 hover:text-accent"
            >
              Talk to us
              <ArrowRight aria-hidden className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
