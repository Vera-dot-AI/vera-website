const coreValues = [
  {
    name: "PRACTICAL INNOVATION",
    description: "We pursue innovation that solves real problems, not innovation for its own sake.",
  },
  {
    name: "RELIABILITY",
    description: "Teams depend on our systems in critical moments. We build with that responsibility in mind.",
  },
  {
    name: "HUMAN-CENTERED AI",
    description: "Every product decision starts with the person using it. AI is a tool in service of people.",
  },
  {
    name: "OPERATIONAL EXCELLENCE",
    description: "We hold ourselves to the same standard we help our clients achieve.",
  },
];

export function AboutCta() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-card grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono-data tracking-widest uppercase text-accent mb-4">
          // ABOUT_VERA
        </p>

        {/* Two-column layout: story + values */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: story */}
          <div className="flex-1 flex flex-col gap-6">
            <h2
              id="about-heading"
              className="font-barlow text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight uppercase tracking-tight"
            >
              BUILDING AI THAT
              <br />
              <span className="text-accent">STANDS BEHIND</span>
              <br />
              REAL WORK.
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Vera was founded on a straightforward conviction: the most impactful AI is the kind that works quietly and reliably alongside people—not as a replacement, but as an amplifier of human capability.
              </p>
              <p>
                We started by asking a simple question: where does skilled work break down, and how can intelligent systems make it better? That question guides every product we build and every partnership we pursue.
              </p>
              <p>
                Our long-term vision is to become the trusted infrastructure for intelligent operations—delivering AI systems that teams depend on every day, across every industry where expertise matters.
              </p>
            </div>
          </div>

          {/* Right: core values */}
          <div className="lg:w-80 xl:w-96 flex flex-col gap-4">
            <h3 className="font-barlow font-bold text-foreground text-sm uppercase tracking-widest mb-2">
              CORE VALUES
            </h3>
            <div className="border-2 border-border">
              {coreValues.map((value, i) => (
                <div
                  key={value.name}
                  className={`p-5 hover:bg-secondary/50 transition-colors duration-200 ${
                    i < coreValues.length - 1 ? "border-b-2 border-border" : ""
                  }`}
                >
                  <p className="font-barlow font-bold text-foreground text-sm uppercase tracking-wide mb-1">
                    {value.name}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
