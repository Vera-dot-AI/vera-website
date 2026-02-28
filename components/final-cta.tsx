import Link from "next/link";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream mesh-gradient grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute top-[-15%] left-[-10%] w-[380px] h-[380px] bg-blush/50 blob opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-8%] w-[320px] h-[320px] bg-sky/40 blob-2 opacity-50"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          Let&apos;s Work Together
        </p>

        <h2
          id="final-cta-heading"
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance"
        >
          Ready to Build the Future of Intelligent Work?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
          Whether you&apos;re looking to streamline operations, empower your teams, or explore what AI can do for your organization — we&apos;d love to start a conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="mailto:hello@vera.ai"
            className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-primary-foreground text-base font-semibold hover:bg-navy-light transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
          >
            Schedule a Call
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
          </Link>
          <Link
            href="mailto:hello@vera.ai"
            className="px-8 py-4 rounded-full border border-navy/20 text-foreground text-base font-medium hover:border-navy/40 hover:bg-navy/5 transition-all duration-300 hover:scale-[1.02]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
