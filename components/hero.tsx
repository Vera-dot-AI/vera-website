import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-cream mesh-gradient grain-overlay px-6 pt-24 pb-20"
      aria-label="Hero"
    >
      {/* Fluid blob background decorations */}
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-12%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] bg-blush/70 blob opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8%] left-[-10%] w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] bg-sky/60 blob-2 opacity-70"
      />
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-[30%] left-[5%] w-[260px] h-[260px] bg-blush/40 blob opacity-50"
        style={{ animationDelay: "2s" }}
      />
      <div
        aria-hidden="true"
        className="hidden sm:block absolute bottom-[20%] right-[8%] w-[200px] h-[200px] bg-sky/30 blob opacity-40"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in-up">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-navy/8 border border-navy/12 text-xs font-semibold text-foreground tracking-wide uppercase backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block animate-pulse" />
          Built for modern teams
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground text-balance"
          style={{ lineHeight: 1.15 }}
        >
          AI That Works
          <br />
          Where Real Work
          <br />
          Happens.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl text-balance">
          We build intelligent systems that empower skilled teams, streamline workflows, and unlock operational excellence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/#contact"
            className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-primary-foreground text-base font-semibold hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
          >
            Get in Touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/#about"
            className="px-8 py-4 rounded-full border border-navy/20 text-foreground text-base font-medium hover:border-navy/40 hover:bg-navy/5 transition-all duration-300 hover:scale-[1.02]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
