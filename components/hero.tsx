"use client";

import Link from "next/link";
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
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in-up">
        {/* Headline - Barlow Condensed, Bold */}
        <h1 className="font-barlow text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
          Intelligent Copilots for
          <br />
          <span className="text-accent">Every Workflow</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-balance">
          We build intelligent systems that integrate seamlessly into your operations. 
          Universal applicability. Zero friction. Maximum impact.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/#contact"
            className="btn-primary text-base px-8 sm:px-10 py-4 group w-full sm:w-auto justify-center"
          >
            Request Early Access
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
            className="btn-secondary text-base px-8 sm:px-10 py-4 w-full sm:w-auto justify-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
