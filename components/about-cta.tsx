const coreValues = [
  {
    name: "Practical Innovation",
    description: "We pursue innovation that solves real problems, not innovation for its own sake.",
  },
  {
    name: "Reliability",
    description: "Teams depend on our systems in critical moments. We build with that responsibility in mind.",
  },
  {
    name: "Human-Centered AI",
    description: "Every product decision starts with the person using it. AI is a tool in service of people.",
  },
  {
    name: "Operational Excellence",
    description: "We hold ourselves to the same standard we help our clients achieve — rigorous, efficient, and always improving.",
  },
];

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
        className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-blush/8 blob"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] left-[-8%] w-[360px] h-[360px] bg-sky/8 blob-2"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-4">
          About Vera
        </p>

        {/* Two-column layout: story + values */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* Left: story */}
          <div className="flex-1 flex flex-col gap-6">
            <h2
              id="about-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground leading-tight text-balance"
            >
              Building AI That
              <br />
              Stands Behind
              <br />
              Real Work.
            </h2>
            <div className="flex flex-col gap-4 text-primary-foreground/70 leading-relaxed text-pretty">
              <p>
                Vera was founded on a straightforward conviction: the most impactful AI is the kind that works quietly and reliably alongside people — not as a replacement, but as an amplifier of human capability.
              </p>
              <p>
                We started by asking a simple question: where does skilled work break down, and how can intelligent systems make it better? That question guides every product we build and every partnership we pursue.
              </p>
              <p>
                Our long-term vision is to become the trusted infrastructure for intelligent operations — delivering AI systems that teams depend on every day, across every industry where expertise matters.
              </p>
            </div>
          </div>

          {/* Right: core values */}
          <div className="lg:w-80 xl:w-96 flex flex-col gap-4">
            <h3 className="font-semibold text-primary-foreground/80 text-sm uppercase tracking-widest mb-2">
              Core Values
            </h3>
            {coreValues.map((value) => (
              <div
                key={value.name}
                className="bg-primary-foreground/5 rounded-xl px-5 py-4 border border-primary-foreground/10 hover:border-primary-foreground/20 hover:bg-primary-foreground/8 transition-all duration-300"
              >
                <p className="font-semibold text-primary-foreground text-sm mb-1">
                  {value.name}
                </p>
                <p className="text-xs text-primary-foreground/55 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
