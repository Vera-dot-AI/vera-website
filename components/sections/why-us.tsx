export function WhyUs() {
  const differentiators = [
    {
      num: "[01]",
      title: "Built for Real-World Environments",
      desc: "Engineered for unpredictable, complex field conditions."
    },
    {
      num: "[02]",
      title: "Secure & Scalable Systems",
      desc: "Architected with enterprise-grade security and data integrity."
    },
    {
      num: "[03]",
      title: "Designed for Frontline Teams",
      desc: "Intuitive interfaces built for operational efficiency."
    },
    {
      num: "[04]",
      title: "Workflow-First Approach",
      desc: "Augments existing processes without disruption."
    },
    {
      num: "[05]",
      title: "Knowledge-Driven AI",
      desc: "Trained on your proprietary organizational expertise."
    },
    {
      num: "[06]",
      title: "Continuous Improvement",
      desc: "Ongoing iteration and learning alongside your team."
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-24 mb-0 section-divider" id="why-us">
      <div className="mb-16 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">// Differentiators</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Why Vera</h2>
      </div>
      
      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-outline-variant border border-outline-variant rounded-lg overflow-hidden">
        {differentiators.map((diff) => (
          <div key={diff.num} className="bg-surface p-8 material-panel border-0 hover:bg-surface-variant/50 transition-colors">
            <span className="font-label-caps text-label-caps text-primary mb-6 block">{diff.num}</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{diff.title}</h3>
            <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
              {diff.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
