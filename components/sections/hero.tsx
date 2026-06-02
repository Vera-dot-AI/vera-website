"use client";

import { useState, useEffect } from "react";

const CARDS = [
  { id: 1, icon: "psychology", text: "Context-aware copilots" },
  { id: 2, icon: "account_tree", text: "Guided workflows" },
  { id: 3, icon: "insights", text: "Real-time diagnostics" },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-24 md:py-32 section-divider relative overflow-hidden">
      {/* Subtle grid background overlay for technical feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#e5e1e4 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
      <div className="structural-grid relative z-10">
        <div className="col-span-12 min-[1290px]:col-span-7 flex flex-col justify-center max-md:items-center max-md:text-center">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-6 block">// Platform</span>
          <h1 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-surface mb-6 leading-tight">
            Intelligent Copilots.<br/>
            <span className="text-primary">For Every Workflow.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Building the intelligence layer for faster operational decision-making.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-primary text-on-primary px-6 py-3 rounded font-medium flex items-center gap-2 hover:opacity-90 transition-opacity group">
              Try it now
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="border border-outline-variant text-on-surface px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-surface-variant transition-colors">
              Explore platform
            </button>
          </div>
        </div>
        
        {/* Technical Abstract Visual / Feature List */}
        <div className="col-span-12 min-[1290px]:col-span-5 hidden min-[1290px]:block relative h-[300px]">
          <div className="absolute inset-0 right-0 max-w-sm ml-auto">
            {CARDS.map((card, index) => {
              const position = (index - activeIndex + 3) % 3;
              
              let positionClasses = "";
              if (position === 0) {
                // Top
                positionClasses = "-translate-y-[84px] translate-x-4 opacity-40 scale-95 z-0";
              } else if (position === 1) {
                // Middle
                positionClasses = "translate-y-0 -translate-x-4 opacity-100 scale-105 z-10 shadow-xl border-primary/40";
              } else {
                // Bottom
                positionClasses = "translate-y-[84px] translate-x-4 opacity-40 scale-95 z-0";
              }

              return (
                <div 
                  key={card.id} 
                  className={`absolute top-1/2 -mt-[36px] right-0 material-panel p-4 rounded-lg flex items-center gap-4 w-full transition-all duration-700 ease-in-out ${positionClasses}`}
                >
                  <div className="w-10 h-10 rounded bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <span className="font-medium text-on-surface">{card.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
