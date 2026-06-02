export function AboutCta() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 section-divider" id="about">
      <div className="structural-grid">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 pr-0 md:pr-12 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">// About Vera</span>
          <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-8 leading-tight">
            Building AI That<br/>
            <span className="text-primary">Stands Behind Real Work.</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed max-w-2xl">
            Vera was founded on a straightforward conviction: the most impactful AI works reliably alongside people, amplifying human capability.
          </p>
        </div>
        
        {/* Right Column: Core Values List */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 mt-16 md:mt-0">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant pb-4">Core Values</h3>
          <div className="flex flex-col gap-0 border border-outline-variant rounded-lg overflow-hidden">
            <div className="material-panel border-0 border-b border-outline-variant p-6 last:border-b-0 hover:bg-surface-variant/30 transition-colors">
              <h4 className="font-headline-md text-headline-md text-on-surface text-lg mb-2 flex items-center justify-between">
                Practical Innovation
                <span className="material-symbols-outlined text-primary text-sm">build</span>
              </h4>
              <p className="text-on-surface-variant font-body-md text-body-md text-sm">
                Solving real operational challenges.
              </p>
            </div>
            <div className="material-panel border-0 border-b border-outline-variant p-6 last:border-b-0 hover:bg-surface-variant/30 transition-colors">
              <h4 className="font-headline-md text-headline-md text-on-surface text-lg mb-2 flex items-center justify-between">
                Reliability
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
              </h4>
              <p className="text-on-surface-variant font-body-md text-body-md text-sm">
                Dependable systems for critical moments.
              </p>
            </div>
            <div className="material-panel border-0 border-b border-outline-variant p-6 last:border-b-0 hover:bg-surface-variant/30 transition-colors">
              <h4 className="font-headline-md text-headline-md text-on-surface text-lg mb-2 flex items-center justify-between">
                Human-Centered AI
                <span className="material-symbols-outlined text-primary text-sm">group</span>
              </h4>
              <p className="text-on-surface-variant font-body-md text-body-md text-sm">
                Empowering operators with context and clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
