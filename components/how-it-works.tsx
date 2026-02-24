const steps = [
  {
    number: "01",
    title: "Connect Your Knowledge Base",
    description:
      "GroundControl ingests your manuals, schematics, historical job data, and SOPs — building a domain-specific knowledge layer tailored to your operations.",
  },
  {
    number: "02",
    title: "Deploy to the Field",
    description:
      "Technicians access GroundControl on a tablet or phone. It understands the context of their current job, location, and equipment.",
  },
  {
    number: "03",
    title: "Guide in Real Time",
    description:
      "GroundControl provides step-by-step diagnostics, repair guidance, and answers — reducing errors and slashing resolution time.",
  },
  {
    number: "04",
    title: "Learn and Improve",
    description:
      "Every interaction makes GroundControl smarter. It continuously learns from outcomes to improve future recommendations.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-groundcontrol-works"
      className="bg-cream mesh-gradient grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="how-groundcontrol-works-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            The Process
          </p>
          <h2
            id="how-groundcontrol-works-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance"
          >
            How GroundControl Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            From connecting your knowledge base to the field in days — not months.
            GroundControl integrates deeply into your existing workflows.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-navy/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-8 left-full w-6 h-px bg-border z-10 -translate-y-0"
                />
              )}

              <span className="font-serif text-4xl font-black text-navy/15 group-hover:text-navy/25 transition-colors duration-200">
                {step.number}
              </span>
              <h3 className="mt-3 font-semibold text-foreground text-base leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
