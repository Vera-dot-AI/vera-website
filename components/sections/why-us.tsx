const reasons = [
  {
    title: "Built for Real-World Environments",
    description:
      "Our systems are designed to perform in complex, unpredictable conditions, not just controlled settings.",
  },
  {
    title: "Secure & Scalable Systems",
    description:
      "Security is not an afterthought. Every solution is architected with data integrity and scalability in mind.",
  },
  {
    title: "Designed for Frontline Teams",
    description:
      "We build for the people doing the actual work. Intuitive, efficient interfaces that meet teams where they are.",
  },
  {
    title: "Workflow-First Approach",
    description:
      "We map to your processes before writing a single line of code. Augmentation, not replacement.",
  },
  {
    title: "Knowledge-Driven AI",
    description:
      "Our AI is trained on your organization's expertise, not generic data. Context-aware recommendations.",
  },
  {
    title: "Continuous Improvement",
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
          <p className="text-xs font-mono-data tracking-widest text-accent mb-4">
            // Differentiators
          </p>
          <h2
            id="why-us-heading"
            className="font-barlow text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
          >
            Why VERA
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-border">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`p-4 sm:p-6 flex flex-col gap-3 hover:bg-card/50 transition-colors duration-200
                ${i < reasons.length - 1 ? "border-b-2 border-border" : ""}
                ${i % 2 === 0 ? "sm:border-r-2 sm:border-border" : "sm:border-r-0"}
                ${i >= reasons.length - 2 ? "sm:border-b-0" : ""}
                ${i % 3 !== 2 ? "lg:border-r-2 lg:border-border" : "lg:border-r-0"}
                ${i >= reasons.length - 3 ? "lg:border-b-0" : "lg:border-b-2 lg:border-border"}
              `}
            >
              {/* Index */}
              <span className="font-mono-data text-xs text-accent tracking-wider">
                [{String(i + 1).padStart(2, "0")}]
              </span>

              {/* Title */}
              <h3 className="font-barlow text-sm font-bold text-foreground tracking-wide leading-snug">
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
