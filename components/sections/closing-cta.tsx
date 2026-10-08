import { ArrowRight } from "lucide-react";
import { Constellation } from "@/components/visuals/constellation";
import { Reveal } from "@/components/ui/primitives";
import { container } from "@/lib/utils";

// TODO: team to confirm the public contact address.
const CONTACT_EMAIL = "hello@veraops.ai";

export function ClosingCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
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
            id="contact-title"
            className="mx-auto max-w-3xl text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.5rem]"
          >
            Let&rsquo;s put your knowledge to work.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
            Piloting, partnering, or investing? We&rsquo;d like to hear from you.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-10 inline-flex items-center gap-2 rounded-pill bg-white px-7 py-3.5 text-[15px] font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_10px_40px_-8px_rgba(124,58,237,0.7)] transition-transform hover:-translate-y-0.5 focus-visible:outline-white"
          >
            Talk to us
            <ArrowRight aria-hidden className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="mt-4 text-sm text-slate-400">{CONTACT_EMAIL}</p>
        </Reveal>
      </div>
    </section>
  );
}
