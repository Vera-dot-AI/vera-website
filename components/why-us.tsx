const reasons = [
  {
    title: "Built for Real-World Environments",
    description:
      "Our systems are designed to perform in complex, unpredictable conditions — not just controlled settings. We build for the messiness of real operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L3 7V15L11 20L19 15V7L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 2V20M3 7L19 15M19 7L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Secure & Scalable Systems",
    description:
      "Security is not an afterthought. Every solution we build is architected with data integrity and scalability in mind, ready to grow with your organization.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L4 5.5V11C4 15.2 7 19.1 11 20C15 19.1 18 15.2 18 11V5.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 11L10.5 13.5L14.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Designed for Frontline Teams",
    description:
      "We build for the people doing the actual work. Our interfaces are intuitive and efficient, meeting teams where they are rather than demanding they adapt to us.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 19C4 15.134 7.134 12 11 12C14.866 12 18 15.134 18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Workflow-First Approach",
    description:
      "We map to your processes before writing a single line of code. Our solutions augment existing workflows rather than forcing teams to adopt entirely new ones.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 7H18M4 11H14M4 15H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Knowledge-Driven AI Systems",
    description:
      "Our AI is trained on your organization's expertise — not generic data. This ensures recommendations are grounded in your specific context and standards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 4H17C17.6 4 18 4.4 18 5V14L14 18H5C4.4 18 4 17.6 4 17V5C4 4.4 4.4 4 5 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 18V14H18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 9H14M8 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement Model",
    description:
      "Our engagement does not end at launch. We monitor, learn, and iterate alongside your team so the system keeps improving as your operations evolve.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 4C7.13 4 4 7.13 4 11C4 14.87 7.13 18 11 18C14.87 18 18 14.87 18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 4L18 7L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 7H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-cream grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="why-us-heading"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] left-[-8%] w-[380px] h-[380px] bg-blush/30 blob-2 opacity-40"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Why Choose Us
          </p>
          <h2
            id="why-us-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance max-w-lg"
          >
            What Sets Vera Apart
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-navy/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-navy/8 flex items-center justify-center text-navy flex-shrink-0">
                {reason.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground text-base leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
