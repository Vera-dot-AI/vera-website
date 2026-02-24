import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "On-Site Diagnostics",
    description:
      "Instantly analyze HVAC system schematics and identify faults with AI-powered visual understanding.",
  },
  {
    title: "Step-by-Step Repair Guidance",
    description:
      "Walk technicians through complex repairs with context-aware, real-time instructions.",
  },
  {
    title: "Knowledge at Your Fingertips",
    description:
      "Access manuals, schematics, and historic job data instantly — without leaving the field.",
  },
];

export function GroundControl() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-sky/30 px-6 py-24 md:py-32"
      aria-labelledby="ground-control-heading"
    >
      {/* Blob decorations */}
      <div
        aria-hidden="true"
        className="absolute top-[-15%] left-[-8%] w-[500px] h-[500px] bg-blush/50 blob opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-8%] w-[400px] h-[400px] bg-sky/70 blob-2 opacity-70"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-foreground/60 mb-4">
          Our First Copilot
        </p>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-8">
            <div>
              <h2
                id="ground-control-heading"
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-tight text-balance"
              >
                Our First Copilot:{" "}
                <span className="text-navy">GroundControl</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Your field technician&apos;s intelligent guide for on-site
                diagnostics and repairs. Ground Control brings AI expertise
                directly to the job site.
              </p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-5" role="list">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-navy flex items-center justify-center">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {f.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-navy text-primary-foreground text-base font-semibold hover:bg-navy-light transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Try Demo
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-navy/25 text-foreground text-base font-medium hover:border-navy/50 hover:bg-navy/5 transition-all duration-200"
              >
                Learn More
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7H12M8 3L12 7L8 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — tablet mockup */}
          <div className="relative flex items-center justify-center">
            {/* Glow behind tablet */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky/60 to-blush/40 blur-2xl scale-90"
            />
            <div className="relative z-10 w-full max-w-md">
              <Image
                src="/ground-control-mockup.jpg"
                alt="Ground Control app running on an iPad, showing HVAC schematics and AI chat interface"
                width={600}
                height={450}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
