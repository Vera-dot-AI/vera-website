"use client";

import { useCallback } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroFlow } from "@/components/visuals/hero-flow";
import { Eyebrow } from "@/components/ui/primitives";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const parallax = fine && !reduced;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 60, damping: 20, mass: 0.6 });
  const cardX = useTransform(sx, (v) => v * 10);
  const cardY = useTransform(sy, (v) => v * 8);
  const glowX = useTransform(sx, (v) => v * -40);
  const glowY = useTransform(sy, (v) => v * -30);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!parallax) return;
      const rect = e.currentTarget.getBoundingClientRect();
      px.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      py.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    },
    [parallax, px, py],
  );

  const onPointerLeave = useCallback(() => {
    px.set(0);
    py.set(0);
  }, [px, py]);

  return (
    <section
      aria-labelledby="hero-title"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative -mt-16 overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      {/* Background: faint drifting dot grid + slow accent glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_60%_40%,#000_35%,transparent_100%)]"
          style={{ animation: "grid-pan 14s linear infinite" }}
        />
        <m.div className="absolute inset-0" style={{ x: glowX, y: glowY }}>
          <div
            className="absolute right-[-10%] top-[-15%] h-[620px] w-[620px] rounded-pill bg-[radial-gradient(circle,rgba(124,58,237,0.20),rgba(79,70,229,0.08)_45%,transparent_70%)] blur-2xl"
            style={{ animation: "drift-glow 22s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-[-25%] left-[-10%] h-[480px] w-[480px] rounded-pill bg-[radial-gradient(circle,rgba(79,70,229,0.12),transparent_65%)] blur-2xl"
            style={{ animation: "drift-glow 28s ease-in-out -9s infinite" }}
          />
        </m.div>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="max-w-[640px]">
          <Eyebrow>AI copilots + knowledge layer</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-balance text-[2.75rem] font-bold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
          >
            Your organization&rsquo;s knowledge, <span className="text-gradient">turned into copilots.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-pretty text-lg leading-relaxed text-body">
            Vera builds the knowledge layer and the AI agents on top of it, so every person on your team works
            with your best expert&rsquo;s know-how.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-pill bg-accent-gradient px-6 py-3.5 text-[15px] font-medium text-white shadow-glow transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
            >
              Talk to us
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-line bg-white px-6 py-3.5 text-[15px] font-medium text-ink shadow-card transition-colors hover:border-accent/30 hover:text-accent"
            >
              See how it works
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2.5 text-sm text-body">
            <span aria-hidden className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-pill bg-accent-violet opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-pill bg-accent-gradient" />
            </span>
            <span>
              Now piloting{" "}
              <a href="/groundcontrol" className="font-medium text-ink underline decoration-accent/40 underline-offset-4 hover:text-accent">
                GroundControl
              </a>
              , our copilot for field operations.
            </span>
          </p>
        </div>

        <m.div style={{ x: cardX, y: cardY }} className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(124,58,237,0.16),transparent)] blur-2xl"
          />
          <figure className="relative rounded-[1.5rem] border border-line bg-white/90 p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_30px_60px_-20px_rgba(79,70,229,0.25)] backdrop-blur sm:p-6">
            <figcaption className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-body sm:mb-4 sm:text-[11px]">
              <span>Knowledge &rarr; Agents</span>
              <span className="flex items-center gap-1.5 text-accent">
                <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-pill bg-accent" />
                Live
              </span>
            </figcaption>
            <div role="img" aria-label="Diagram: manuals, records, work history and docs flow into the Vera knowledge layer, which powers Guide, Answer and Report agents.">
              <HeroFlow />
            </div>
          </figure>
        </m.div>
      </div>
    </section>
  );
}
