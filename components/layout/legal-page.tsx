import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <article className="mx-auto w-full max-w-[720px] px-5 py-16 sm:px-8 sm:py-24">
          <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.025em] text-ink sm:text-[3rem]">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
            Last updated {updated}
          </p>
          <div className="mt-10 space-y-10 text-base leading-[1.6] text-body">{children}</div>
          <p className="mt-14 border-t border-line pt-6 text-sm leading-[1.6] text-body">
            This page will be reviewed and updated as Vera AI is formally incorporated.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
