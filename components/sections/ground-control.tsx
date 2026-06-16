import Link from "next/link";

export function GroundControl() {
  return (
    <section id="product" className="px-margin-mobile md:px-margin-desktop pb-24 relative z-20 scroll-mt-24">
      <div className="w-full bg-surface-container-high border border-outline-variant rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
        <div className="p-10 md:p-16 min-[1080px]:p-20 flex-1 flex flex-col justify-center max-md:items-center max-md:text-center z-10 relative bg-surface-container-lowest">
          <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-4 leading-tight">GroundControl</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
            The Intelligent Copilot for On-Field Operations.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/products/ground-control" className="bg-primary text-on-primary px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              Learn more
            </Link>
          </div>
        </div>
        <div className="hidden min-[1080px]:flex flex-1 relative min-[1080px]:min-h-full border-l border-outline-variant overflow-hidden cubic-light-pattern items-center justify-center">
        </div>
      </div>
    </section>
  );
}
