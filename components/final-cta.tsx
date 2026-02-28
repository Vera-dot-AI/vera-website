import Link from "next/link";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-24 md:py-32 border-y-2 border-border"
      aria-labelledby="final-cta-heading"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-50" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <p className="text-xs font-mono-data tracking-widest uppercase text-accent">
          // INITIATE_CONTACT
        </p>

        <h2
          id="final-cta-heading"
          className="font-barlow text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none uppercase tracking-tight"
        >
          READY TO BUILD
          <br />
          <span className="text-accent">THE FUTURE?</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          Whether you&apos;re looking to streamline operations, empower your teams, or explore what AI can do for your organization—we&apos;d love to start a conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="mailto:hello@vera.ai"
            className="btn-primary text-base px-10 py-4"
          >
            REQUEST EARLY ACCESS
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="mailto:hello@vera.ai"
            className="btn-secondary text-base px-10 py-4"
          >
            CONTACT US
          </Link>
        </div>

        {/* Email display */}
        <div className="mt-8 flex items-center gap-3 text-muted-foreground">
          <div className="w-8 h-px bg-border" />
          <a
            href="mailto:hello@vera.ai"
            className="font-mono-data text-sm hover:text-accent transition-colors duration-200"
          >
            hello@vera.ai
          </a>
          <div className="w-8 h-px bg-border" />
        </div>
      </div>
    </section>
  );
}
