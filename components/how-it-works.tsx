const steps = [
  {
    number: "01",
    title: "Understand Your Workflow",
    description:
      "We begin by deeply understanding your existing operations, team structure, and pain points. No assumptions — just careful listening and analysis to map what matters most.",
  },
  {
    number: "02",
    title: "Integrate with Existing Systems",
    description:
      "Our solutions connect with the tools and platforms your teams already use. We prioritize compatibility and minimal disruption to your established processes.",
  },
  {
    number: "03",
    title: "Train AI on Your Knowledge",
    description:
      "We build AI systems grounded in your specific domain knowledge, data, and standards — ensuring every insight and recommendation is relevant and accurate for your context.",
  },
  {
    number: "04",
    title: "Deploy & Optimize",
    description:
      "After a careful rollout, we continuously monitor performance and refine the system alongside your team. Improvement is ongoing, not a one-time event.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-we-work"
      className="bg-navy grain-overlay px-6 py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      {/* Subtle decorations on dark bg */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] left-[-8%] w-[380px] h-[380px] bg-blush/8 blob"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] right-[-6%] w-[320px] h-[320px] bg-sky/8 blob-2"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/40 mb-3">
            The Process
          </p>
          <h2
            id="how-we-work-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground text-balance"
          >
            How We Work
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed text-pretty">
            A structured, collaborative approach that integrates deeply with your operations from day one.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-primary-foreground/20 hover:bg-primary-foreground/8 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-8 left-full w-6 h-px bg-primary-foreground/15 z-10"
                />
              )}

              <span className="font-serif text-4xl font-black text-primary-foreground/15 group-hover:text-primary-foreground/25 transition-colors duration-200">
                {step.number}
              </span>
              <h3 className="mt-3 font-semibold text-primary-foreground text-base leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
