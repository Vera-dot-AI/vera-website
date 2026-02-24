import Link from "next/link";

export function AboutCta() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      {/* Subtle blob decorations on dark bg */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-blush/10 blob"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] left-[-8%] w-[360px] h-[360px] bg-sky/10 blob-2"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50">
          About Vera
        </p>

        <h2
          id="about-heading"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight text-balance"
        >
          Building the Copilots
          <br />
          That Industries Need
        </h2>

        <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-2xl text-pretty">
          Vera was founded with one belief: the most impactful AI is the kind
          that works alongside people in the real world. We focus on integrating
          intelligent copilots into existing workflows — not just in tech, but
          across skilled trades, industrial fields, and beyond. Starting with
          HVAC, with more industries on the way.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-lg mt-4">
          {[
            { value: "1", label: "Product Live" },
            { value: "∞", label: "Copilots Coming" },
            { value: "24/7", label: "AI Availability" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-serif text-3xl font-black text-primary-foreground">
                {stat.value}
              </span>
              <span className="text-xs text-primary-foreground/50 font-medium text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="mailto:hello@vera.ai"
            className="px-8 py-4 rounded-full bg-primary-foreground text-navy text-base font-semibold hover:bg-cream transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
          >
            Get in Touch
          </Link>
          <Link
            href="/products/ground-control"
            className="px-8 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground text-base font-medium hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-[1.02]"
          >
            Try Ground Control
          </Link>
        </div>
      </div>
    </section>
  );
}
