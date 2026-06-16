"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GroundControlPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary selection:text-on-primary flex flex-col">
      {/* Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top'
        }} 
      />

      {/* Top Navbar */}
      <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 bg-background ${scrolled ? "border-b border-outline-variant shadow-md" : "border-b border-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-12">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-headline-md font-bold font-headline-md tracking-tight text-on-surface">GroundControl</span>
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#intelligence" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Pipeline</Link>
              <Link href="#operations" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Operations</Link>
              <Link href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Docs</Link>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="#" className="font-medium text-on-surface border border-outline-variant px-4 py-1.5 rounded hover:bg-surface-container transition-colors">Log In</Link>
            </div>
            <Link href="#" className="hidden lg:flex bg-primary text-on-primary px-4 py-1.5 rounded font-medium hover:opacity-90 transition-opacity whitespace-nowrap">Get Started</Link>
            <button 
              className="lg:hidden text-on-surface p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-background border-b border-outline-variant px-4 py-4 flex flex-col gap-4 shadow-xl">
            <Link href="#intelligence" className="text-body-md font-medium text-on-surface-variant py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Pipeline</Link>
            <Link href="#operations" className="text-body-md font-medium text-on-surface-variant py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Operations</Link>
            <Link href="#" className="text-body-md font-medium text-on-surface-variant py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
            <div className="border-t border-outline-variant pt-4 mt-2 flex flex-col gap-3">
              <Link href="#" className="block w-full text-center font-medium text-on-surface border border-outline-variant px-4 py-2 rounded hover:bg-surface-container transition-colors" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
              <Link href="#" className="block w-full text-center font-medium bg-primary text-on-primary px-4 py-2 rounded hover:opacity-90 transition-opacity" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-4 md:px-6 flex flex-col pt-16">
        
        {/* Hero Section */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-32 border-b border-outline-variant grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant bg-surface-container/50 mb-6 lg:mb-8 mx-auto lg:mx-0">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Vera Systems Intelligence</span>
            </div>
            <h1 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-surface leading-tight mb-6 tracking-tight text-balance">
              The Intelligence Layer<br className="hidden sm:block" />for Field Teams.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 lg:mb-10 max-w-xl leading-relaxed text-pretty mx-auto lg:mx-0">
              Instant answers for field teams. GroundControl synthesizes technical data into a proactive AI assistant.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mx-auto lg:mx-0">
              <Link href="#" className="w-full sm:w-auto justify-center bg-primary text-on-primary px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link href="#" className="w-full sm:w-auto justify-center border border-outline-variant text-on-surface px-6 py-3 rounded font-medium hover:bg-surface-container transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 w-full max-w-lg lg:max-w-none mx-auto hidden lg:block lg:ml-auto">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl rounded-full" />
            
            {/* Mockup Container */}
            <div className="relative rounded-xl border border-outline-variant bg-surface overflow-hidden shadow-2xl flex flex-col h-[400px] sm:h-[450px]">
              
              {/* Header */}
              <div className="px-4 py-3 border-b border-outline-variant bg-surface-container flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest font-bold">GroundControl</span>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-hidden flex flex-col p-4 sm:p-6 gap-6 bg-[#f8f9fa] dark:bg-[#121212] relative">
                {/* Background grid for aesthetic */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* User Message */}
                <div className="flex items-start gap-3 relative z-10 w-[90%] md:w-[85%] self-end">
                  <div className="flex-1 bg-primary text-on-primary rounded-2xl rounded-tr-sm p-4 shadow-sm">
                    <p className="text-body-md font-medium">Error Code 402 on compressor C-4. What is the recommended diagnostic procedure?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
                  </div>
                </div>

                {/* AI Message */}
                <div className="flex items-start gap-3 relative z-10 w-[95%] md:w-[90%]">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                  </div>
                  <div className="flex-1 bg-surface border border-outline-variant rounded-2xl rounded-tl-sm p-4 shadow-sm flex flex-col gap-3">
                    <p className="text-body-md text-on-surface">Error 402 indicates a pressure anomaly in the secondary coolant loop. Initiating diagnostic flow.</p>
                    
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-md w-fit">
                      <span className="material-symbols-outlined text-[14px] text-primary">menu_book</span>
                      <span className="text-xs font-medium text-primary">Ref: C-4 Maintenance Manual, p. 42</span>
                    </div>

                    <div className="flex flex-col gap-2 mt-1">
                      <div className="flex gap-2">
                        <span className="text-primary font-bold text-sm">1.</span>
                        <p className="text-sm text-on-surface-variant">Check valve V-102 for physical obstructions or ice buildup.</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary font-bold text-sm">2.</span>
                        <p className="text-sm text-on-surface-variant">Verify pressure sensor <span className="font-mono text-[11px] bg-surface-container border border-outline-variant px-1 py-0.5 rounded">PT-204</span> calibration against ambient.</p>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                         <span className="material-symbols-outlined text-primary text-[16px] animate-spin">progress_activity</span>
                         <p className="text-sm text-on-surface-variant italic">Awaiting technician input...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input Area */}
              <div className="p-3 bg-surface border-t border-outline-variant shrink-0">
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">attach_file</span>
                  </div>
                  <input type="text" disabled placeholder="Reply to GroundControl..." className="w-full bg-surface-container border border-outline-variant rounded-full py-2 pl-9 pr-10 text-sm focus:outline-none opacity-70" />
                  <div className="absolute right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-[14px]">arrow_upward</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section id="intelligence" className="py-16 md:py-24 border-b border-outline-variant scroll-mt-16">
          <div className="max-w-3xl mb-12 md:mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The Intelligence Pipeline</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A secure, deterministic data flow from your unstructured documents to actionable field intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border border-outline-variant rounded overflow-hidden shadow-sm">
            {[
              { num: "01", icon: "cloud_download", title: "Ingestion", desc: "Securely sync unstructured technical data from S3, Dropbox, and legacy ERP systems." },
              { num: "02", icon: "account_tree", title: "Synthesis", desc: "Vectorize manuals and schematics into a structured, queryable knowledge base." },
              { num: "03", icon: "satellite_alt", title: "Deployment", desc: "Deliver deterministic, cited answers directly to mobile and tablet interfaces." }
            ].map((step, i) => (
              <div key={i} className={`p-6 sm:p-8 bg-surface ${i !== 0 ? 'border-t sm:border-t-0 md:border-l border-outline-variant' : ''} ${i === 1 ? 'sm:border-l border-outline-variant' : ''} ${i === 2 ? 'sm:border-t md:border-t-0 sm:col-span-2 md:col-span-1' : ''}`}>
                <div className="flex justify-between items-start mb-8 sm:mb-12">
                  <span className="font-label-caps text-label-caps text-primary">[{step.num}]</span>
                  <span className="material-symbols-outlined text-on-surface-variant">{step.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 sm:mb-3">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Capabilities Section */}
        <section id="operations" className="py-16 md:py-24 border-b border-outline-variant scroll-mt-16">
          <div className="max-w-3xl mb-12 md:mb-16 text-center md:text-left mx-auto md:mx-0">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Operational Capabilities</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Built for the realities of industrial environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 sm:p-8 border border-outline-variant bg-surface rounded shadow-sm">
              <span className="material-symbols-outlined text-primary mb-6 sm:mb-8 block">search_insights</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 sm:mb-3">Context-Aware Assistance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Grounds every response in your proprietary documentation with exact citations and page numbers.
              </p>
            </div>
            <div className="p-6 sm:p-8 border border-outline-variant bg-surface rounded shadow-sm">
              <span className="material-symbols-outlined text-on-surface-variant mb-6 sm:mb-8 block">security</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 sm:mb-3">Enterprise Security</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Built with military-grade encryption and strict access controls to protect your proprietary data.
              </p>
            </div>
            <div className="sm:col-span-2 border border-outline-variant bg-surface rounded shadow-sm flex flex-col md:flex-row overflow-hidden">
              <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center bg-surface">
                <span className="material-symbols-outlined text-primary mb-6 sm:mb-8 block">checklist</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 sm:mb-3">Guided Troubleshooting</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                  Transform diagnostic trees into interactive, step-by-step resolution flows.
                </p>
              </div>
              <div className="p-6 sm:p-8 md:w-1/2 bg-surface-container flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start sm:items-center gap-3 p-3 border border-outline-variant rounded bg-surface shadow-sm">
                    <span className="material-symbols-outlined text-primary text-sm shrink-0 mt-0.5 sm:mt-0">check_circle</span>
                    <span className="text-sm text-on-surface font-medium">Check compressor voltage (Expected: 240V).</span>
                  </div>
                  <div className="flex items-start sm:items-center gap-3 p-3 border border-outline-variant rounded bg-surface/50 opacity-70">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm shrink-0 mt-0.5 sm:mt-0">radio_button_unchecked</span>
                    <span className="text-sm text-on-surface-variant">Verify refrigerant line pressure.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 md:py-12 px-4 md:px-6 bg-surface-container border-t border-outline-variant mt-16">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto text-center sm:text-left">
            <span className="font-headline-md font-bold text-on-surface tracking-tight">Vera</span>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
              <Link href="#" className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors">Security</Link>
              <Link href="#" className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors">Status</Link>
              <a href="mailto:hello@veraops.ai" className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant text-center lg:text-right">
            © 2024 Vera Systems. All rights reserved. Built for Mission-Critical Operations.
          </p>
        </div>
      </footer>
    </div>
  );
}
