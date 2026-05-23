"use client";

import Link from "next/link";
import { FloatingTiles } from "@/components/ui/floating-tiles";

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#020005] px-6 pt-24 pb-20 md:pt-32 md:pb-32"
      aria-label="Hero"
    >
      {/* Background spotlights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#9945ff] opacity-[0.45] pointer-events-none filter blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[650px] h-[650px] rounded-full bg-[#9945ff] opacity-[0.38] pointer-events-none filter blur-[120px]" />
        <div className="absolute top-[0%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#c084fc] opacity-[0.30] pointer-events-none filter blur-[90px]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Huge Headline and CTA */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left animate-fade-in-up">
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl">
            Intelligent
            <br />
            Copilots. For
            <br />
            <span className="bg-gradient-to-r from-[#c084fc] via-[#9945ff] to-white bg-clip-text text-transparent pb-1">
              Every Workflow.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-lg font-medium mx-auto lg:mx-0">
            Building the intelligence layer for faster operational decision-making.
          </p>

          {/* CTA Button — white pill with animated draw-border on hover */}
          <div className="cta-btn-group group relative mt-4 inline-block">
            <Link
              href="/#contact"
              className="relative inline-flex items-center justify-between gap-6 pl-8 pr-2 py-2 bg-white text-black font-bold text-sm sm:text-base rounded-full transition-all duration-300"
            >
              <span className="tracking-wider font-bold text-black">Try it now</span>
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#9945ff] flex items-center justify-center text-white transition-transform duration-100 group-hover:translate-x-0.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            {/* SVG border — 5px gap outside button, draws clockwise from top-left on hover */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{
                top: "-5px",
                left: "-5px",
                width: "calc(100% + 10px)",
                height: "calc(100% + 10px)",
                overflow: "visible",
              }}
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="31"
                ry="31"
                fill="none"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="1.5"
                className="cta-border-rect"
              />
            </svg>
          </div>
        </div>

        {/* Right Column: Floating Staggered Badges */}
        <FloatingTiles />
      </div>

      {/* Animations */}
      <style jsx global>{`
        /* Border draw: hidden by default */
        .cta-border-rect {
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
        }

        .cta-btn-group:hover .cta-border-rect {
          animation: drawBorder 0.8s linear forwards;
        }

        @keyframes drawBorder {
          0%   { stroke-dashoffset: 1500; }
          100% { stroke-dashoffset: 0; }
        }

        /* Soft white glow on the button itself */
        .cta-btn-group > a {
          transition: box-shadow 0.4s ease;
        }
        .cta-btn-group:hover > a {
          box-shadow: 0 0 22px 6px rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </section>
  );
}
