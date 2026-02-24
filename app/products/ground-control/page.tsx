import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "GroundControl - Vera",
  description:
    "GroundControl is your field technician's intelligent copilot for on-site diagnostics and repairs. Powered by your own knowledge base.",
};

const features = [
  {
    title: "Built on Your Knowledge Base",
    description:
      "GroundControl ingests your manuals, schematics, SOPs, and historical job data to build a domain-specific AI layer tailored to your operations.",
  },
  {
    title: "On-Site Diagnostics",
    description:
      "Instantly analyze HVAC system schematics and identify faults with AI-powered visual understanding.",
  },
  {
    title: "Step-by-Step Repair Guidance",
    description:
      "Walk technicians through complex repairs with context-aware, real-time instructions drawn from your own documentation.",
  },
  {
    title: "Knowledge at Your Fingertips",
    description:
      "Access manuals, schematics, and historic job data instantly — without leaving the field.",
  },
];

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

export default function GroundControlPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-cream mesh-gradient grain-overlay px-6 pt-28 pb-16"
        aria-label="GroundControl hero"
      >
        {/* Blob decorations */}
        <div
          aria-hidden="true"
          className="absolute top-[-10%] right-[-12%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] bg-blush/70 blob opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-8%] left-[-10%] w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] bg-sky/60 blob-2 opacity-70"
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 lg:gap-20 items-center animate-fade-in-up">
          {/* Left — text */}
          <div className="flex flex-col gap-8">
            <div>
              {/* Back arrow */}
              <Link
                href="/"
                aria-label="Back to Vera"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-navy/20 text-navy/50 hover:text-navy hover:border-navy/50 hover:bg-navy/5 transition-all duration-200 mb-8"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M12 8H4M8 12L4 8L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <h1
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground text-balance"
                style={{ lineHeight: 1.15 }}
              >
                <span className="text-navy">Ground</span>
                <br />
                <span className="text-navy">Control</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
                Your field technician&apos;s intelligent copilot for on-site
                diagnostics and repairs. Powered by your own knowledge base,
                GroundControl brings AI expertise directly to the job site.
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
            <div className="flex flex-col xs:flex-row gap-3 pt-2 w-full sm:w-auto">
              <a
                href="https://v0-build-ai-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-navy text-primary-foreground text-base font-semibold hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
              >
                Try Demo
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="group/lnk inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-navy/25 text-foreground text-base font-medium hover:border-navy/50 hover:bg-navy/5 transition-all duration-300 hover:scale-[1.02]"
              >
                How It Works
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/lnk:translate-y-1"
                >
                  <path
                    d="M7 2V12M3 8L7 12L11 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — tablet mockup */}
          <div className="relative flex items-center justify-center">
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
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-cream mesh-gradient grain-overlay px-6 py-24 md:py-32"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              The Process
            </p>
            <h2
              id="how-it-works-heading"
              className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance"
            >
              How GroundControl Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
              From connecting your knowledge base to the field in days — not months.
              GroundControl integrates deeply into your existing workflows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-navy/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-8 left-full w-6 h-px bg-border z-10"
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

      <Footer />
    </main>
  );
}
