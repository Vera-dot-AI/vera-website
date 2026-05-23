const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your existing operations, team structure, and pain points. No assumptions, just careful listening and analysis to understand what matters most.",
  },
  {
    number: "02",
    title: "Integrate",
    description:
      "Our solutions connect with the tools and platforms your teams already use. We prioritize compatibility and minimal disruption to established processes.",
  },
  {
    number: "03",
    title: "Train",
    description:
      "We build AI systems grounded in your specific domain knowledge, data, and standards, ensuring every recommendation is relevant and accurate for your context.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "After a careful rollout, we continuously monitor performance and refine the system alongside your team. Improvement is ongoing, not a one-time event.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-we-work"
      className="bg-secondary grain-overlay px-6 py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono-data tracking-widest text-accent mb-4">
            // Process Flow
          </p>
          <h2
            id="how-we-work-heading"
            className="font-barlow text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
          >
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            A structured, collaborative approach that integrates deeply with your operations from day one.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-6 left-full w-4 xl:w-6 h-0.5 bg-border z-10"
                />
              )}

              <div className="card-module h-full flex flex-col gap-3 sm:gap-4 group p-4 sm:p-6">
                {/* Step number */}
                <div className="flex items-center gap-3">
                  <span className="font-mono-data text-3xl font-bold text-accent">
                    {step.number}
                  </span>
                  <div className="flex-1 h-0.5 bg-border group-hover:bg-accent/50 transition-colors duration-200" />
                </div>

                {/* Title */}
                <h3 className="font-barlow text-lg font-bold text-foreground tracking-wide">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
