const beliefs = [
  {
    title: "AI should assist, not replace human expertise.",
    description:
      "We believe the most powerful AI amplifies what skilled people already do best — it does not sideline them. Our systems are built to support decision-making, not override it.",
  },
  {
    title: "Technology should integrate seamlessly into daily operations.",
    description:
      "Disruption is not a feature. We design our solutions to fit naturally into the tools and routines your teams already rely on, reducing friction from day one.",
  },
  {
    title: "We focus on practical solutions over hype-driven innovation.",
    description:
      "Genuine value comes from solving real problems with proven technology. We prioritize outcomes over novelty, building systems that deliver measurable results.",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-cream grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="vision-heading"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-15%] right-[-8%] w-[360px] h-[360px] bg-sky/30 blob opacity-40"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-18">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Our Vision
          </p>
          <h2
            id="vision-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance max-w-xl"
          >
            What We Believe
          </h2>
        </div>

        {/* Belief cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {beliefs.map((belief, i) => (
            <div
              key={i}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-7 border border-border hover:border-navy/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="font-serif text-5xl font-black text-navy/10 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-foreground text-base leading-snug text-pretty">
                {belief.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
