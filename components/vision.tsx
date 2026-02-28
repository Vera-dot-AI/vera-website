const pillars = [
  {
    id: "01",
    title: "Seamless Integration",
    description:
      "Our systems plug directly into your existing tools and workflows. No disruptive overhauls—just intelligent augmentation that works from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Universal Applicability",
    description:
      "Built for every industry where expertise matters. Our architecture adapts to your domain, your data, and your specific operational requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Zero Friction",
    description:
      "Designed for the people doing the actual work. Intuitive interfaces that reduce cognitive load, not add to it. AI that assists, never obstructs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-card border-y-2 border-border px-6 py-24 md:py-32"
      aria-labelledby="vision-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-mono-data tracking-widest text-accent mb-4">
            // Core Modules
          </p>
          <h2
            id="vision-heading"
            className="font-barlow text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight"
          >
            The Interlocking Grid
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Three foundational pillars that define every system we build.
          </p>
        </div>

        {/* Pillar cards - Interlocking grid layout */}
        <div className="grid md:grid-cols-3 gap-0 border-2 border-border">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className={`card-module border-0 ${
                i < pillars.length - 1 ? "md:border-r-2 md:border-border" : ""
              } ${i < pillars.length - 1 ? "border-b-2 md:border-b-0 border-border" : ""} flex flex-col gap-6 hover:bg-secondary/50`}
              style={{ borderRadius: 0 }}
            >
              {/* Module ID */}
              <div className="flex items-center justify-between">
                <span className="font-mono-data text-sm text-accent tracking-wider">
                  [{pillar.id}]
                </span>
                <div className="w-10 h-10 flex items-center justify-center text-accent">
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-barlow text-xl font-bold text-foreground tracking-wide">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
