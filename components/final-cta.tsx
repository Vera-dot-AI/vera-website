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
        <p className="text-xs font-mono-data tracking-widest text-accent">
          // Initiate Contact
        </p>

        <h2
          id="final-cta-heading"
          className="font-barlow text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none tracking-tight"
        >
          Ready to Build
          <br />
          <span className="text-accent">The Future?</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          Whether you&apos;re looking to streamline operations, empower your teams, or explore what AI can do for your organization, we&apos;d love to start a conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="mailto:hello@vera.ai"
            className="btn-primary text-base px-8 sm:px-10 py-4 group w-full sm:w-auto justify-center"
          >
            Request Early Access
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
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
            className="btn-secondary text-base px-8 sm:px-10 py-4 w-full sm:w-auto justify-center"
          >
            Contact Us
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
