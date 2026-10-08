"use client";

import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/primitives";
import { GroundControlChat } from "@/components/groundcontrol/chat";

export function GroundControlHero() {
  return (
    <section aria-labelledby="gc-hero-title" className="relative -mt-16 overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_60%_40%,#000_35%,transparent_100%)]"
          style={{ animation: "grid-pan 14s linear infinite" }}
        />
        <div
          className="absolute right-[-10%] top-[-15%] h-[620px] w-[620px] rounded-pill bg-[radial-gradient(circle,rgba(124,58,237,0.20),rgba(79,70,229,0.08)_45%,transparent_70%)] blur-2xl"
          style={{ animation: "drift-glow 22s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-25%] left-[-10%] h-[420px] w-[420px] rounded-pill bg-[radial-gradient(circle,rgba(79,70,229,0.12),transparent_65%)] blur-2xl"
          style={{ animation: "drift-glow 28s ease-in-out -9s infinite" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-body">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/#products" className="font-medium hover:text-ink">
                Products
              </a>
            </li>
            <li aria-hidden className="text-slate-300">
              /
            </li>
            <li className="font-medium text-ink" aria-current="page">
              GroundControl
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1fr] lg:gap-10">
          <div className="max-w-[620px]">
            <Eyebrow>GroundControl · Now piloting</Eyebrow>
            <h1
              id="gc-hero-title"
              className="mt-5 text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.025em] text-ink sm:text-[3.75rem] lg:text-[4rem]"
            >
              The AI copilot for <span className="text-gradient">field operations.</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-pretty text-lg leading-[1.6] text-body">
              GroundControl puts expert know-how in every technician&rsquo;s pocket, so teams diagnose faster, fix
              it the first time, and never lose what their best people know.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-pill bg-accent-gradient px-6 py-3.5 text-[15px] font-medium text-white shadow-glow transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
              >
                Request pilot access
                <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-pill border border-line bg-white px-6 py-3.5 text-[15px] font-medium text-ink shadow-card transition-colors hover:border-accent/30 hover:text-accent"
              >
                See how it works
              </a>
            </div>
            <p className="mt-8 text-sm text-body">
              Built on the{" "}
              <a href="/#platform" className="font-medium text-ink underline decoration-accent/40 underline-offset-4 hover:text-accent">
                Vera knowledge layer
              </a>
              .
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(124,58,237,0.16),transparent)] blur-2xl"
            />
            <figure className="relative rounded-[1.5rem] border border-line bg-white/90 p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_60px_-20px_rgba(79,70,229,0.25)] backdrop-blur sm:p-6">
              <figcaption className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.08em] text-body sm:mb-4 sm:text-[11px]">
                <span>On the job</span>
                <span className="flex items-center gap-1.5 text-accent">
                  <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent" />
                  Live
                </span>
              </figcaption>
              <div
                role="img"
                aria-label="Illustrative GroundControl chat. A technician asks about fault code E21. The copilot replies with a short read, a source from the equipment manual, three checks, then a generated report."
              >
                <GroundControlChat />
              </div>
              <p className="mt-4 text-center text-xs text-body">Illustrative interface.</p>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
