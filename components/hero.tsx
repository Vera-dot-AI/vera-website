import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream px-6 pt-24 pb-16"
      aria-label="Hero"
    >
      {/* Blob background decorations */}
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-12%] w-[480px] h-[480px] bg-blush/70 blob opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8%] left-[-10%] w-[420px] h-[420px] bg-sky/60 blob-2 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute top-[30%] left-[5%] w-[260px] h-[260px] bg-blush/40 blob opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/10 border border-navy/15 text-xs font-semibold text-foreground tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block" />
          AI Copilots for the Real World
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black text-foreground leading-[1.08] text-balance">
          Intelligent
          <br />
          Copilots.
          <br />
          Real-World
          <br />
          Solutions.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md text-balance">
          Empowering teams with AI that understands and guides — from the
          office to the field.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="#products"
            className="px-8 py-4 rounded-full bg-navy text-primary-foreground text-base font-semibold hover:bg-navy-light transition-all duration-200 shadow-md hover:shadow-lg"
          >
            See Our Products
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 rounded-full border border-navy/30 text-foreground text-base font-medium hover:border-navy/60 hover:bg-navy/5 transition-all duration-200"
          >
            How It Works
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-muted-foreground tracking-widest uppercase font-medium">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-navy/30 to-transparent" />
      </div>
    </section>
  );
}
