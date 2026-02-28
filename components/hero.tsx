"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactiveGrid } from "./reactive-grid";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-24 pb-20"
      aria-label="Hero"
    >
      {/* Reactive Grid Background */}
      <ReactiveGrid />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-10 animate-fade-in-up">
        {/* VERA Badge */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 relative animate-pulse-glow">
            <Image
              src="/vera-logo.svg"
              alt="VERA AI hexagonal badge"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Headline - Barlow Condensed, Bold, All Caps */}
        <h1 className="font-barlow text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight uppercase leading-none">
          THE CO-PILOT FOR
          <br />
          <span className="text-accent">EVERY WORKFLOW</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
          We build intelligent systems that integrate seamlessly into your operations. 
          Universal applicability. Zero friction. Maximum impact.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="/#contact"
            className="btn-primary text-base px-10 py-4"
          >
            REQUEST EARLY ACCESS
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/#about"
            className="btn-secondary text-base px-10 py-4"
          >
            LEARN MORE
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono-data tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}
