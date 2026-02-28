const reasons = [
  {
    title: "BUILT FOR REAL-WORLD ENVIRONMENTS",
    description:
      "Our systems are designed to perform in complex, unpredictable conditions—not just controlled settings.",
  },
  {
    title: "SECURE & SCALABLE SYSTEMS",
    description:
      "Security is not an afterthought. Every solution is architected with data integrity and scalability in mind.",
  },
  {
    title: "DESIGNED FOR FRONTLINE TEAMS",
    description:
      "We build for the people doing the actual work. Intuitive, efficient interfaces that meet teams where they are.",
  },
  {
    title: "WORKFLOW-FIRST APPROACH",
    description:
      "We map to your processes before writing a single line of code. Augmentation, not replacement.",
  },
  {
    title: "KNOWLEDGE-DRIVEN AI",
    description:
      "Our AI is trained on your organization's expertise—not generic data. Context-aware recommendations.",
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    description:
      "Our engagement does not end at launch. We monitor, learn, and iterate alongside your team.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-background px-6 py-24 md:py-32 border-y-2 border-border"
      aria-labelledby="why-us-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-mono-data tracking-widest uppercase text-accent mb-4">
            // DIFFERENTIATORS
          </p>
          <h2
            id="why-us-heading"
            className="font-barlow text-4xl sm:text-5xl md:text-6xl font-bold text-foreground uppercase tracking-tight"
          >
            WHY VERA
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`p-6 flex flex-col gap-3 hover:bg-card transition-colors duration-200 ${
                i % 3 !== 2 ? "lg:border-r-2 lg:border-border" : ""
              } ${i % 2 !== 1 ? "sm:border-r-2 sm:border-border lg:border-r-0" : ""} ${
                i < reasons.length - 3 ? "lg:border-b-2 lg:border-border" : ""
              } ${i < reasons.length - 2 ? "sm:border-b-2 sm:border-border lg:border-b-0" : ""} ${
                i < reasons.length - 1 ? "border-b-2 sm:border-b-0 border-border" : ""
              }`}
            >
              {/* Index */}
              <span className="font-mono-data text-xs text-accent tracking-wider">
                [{String(i + 1).padStart(2, "0")}]
              </span>

              {/* Title */}
              <h3 className="font-barlow text-sm font-bold text-foreground uppercase tracking-wide leading-snug">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
