import { ArrowLeft, ArrowRight } from "lucide-react";
import { Constellation } from "@/components/visuals/constellation";
import { Reveal } from "@/components/ui/primitives";
import { container } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/site";

export function GroundControlClosing() {
  return (
    <section id="contact" aria-labelledby="gc-contact-title" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[10%] top-[-30%] h-[560px] w-[560px] rounded-pill bg-[radial-gradient(circle,rgba(79,70,229,0.45),transparent_65%)] blur-3xl"
          style={{ animation: "mesh-a 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-[10%] bottom-[-35%] h-[620px] w-[620px] rounded-pill bg-[radial-gradient(circle,rgba(124,58,237,0.42),transparent_65%)] blur-3xl"
          style={{ animation: "mesh-b 24s ease-in-out infinite" }}
        />
        <Constellation />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      </div>

      <div className={`${container} relative text-center`}>
        <Reveal>
          <h2
            id="gc-contact-title"
            className="mx-auto max-w-3xl text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-[3rem] lg:text-[3.5rem]"
          >
            Bring GroundControl to your team.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.6] text-slate-300">
            We&rsquo;re onboarding a small group of pilot partners. Tell us about your team.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-pill bg-white px-7 py-3.5 text-[15px] font-medium text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_40px_-8px_rgba(124,58,237,0.7)] transition-transform hover:-translate-y-0.5 focus-visible:outline-white"
            >
              Request pilot access
              <ArrowRight aria-hidden className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="/" className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white">
              <ArrowLeft aria-hidden className="h-4 w-4" />
              Back to Vera
            </a>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-block text-sm text-slate-300 hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
