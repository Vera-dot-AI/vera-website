"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { label: "Why Vera?", href: "/#why-us" },
  // { label: "Process", href: "/#how-we-work" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight * 0.75);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="Vera home">
          <div className="w-9 h-9 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Logo className="w-full h-full text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
              pastHero ? "max-w-[100px] opacity-100 ml-3" : "max-w-0 opacity-0 ml-0"
            }`}
          >
            <span
              className="font-barlow text-2xl font-bold text-white tracking-wider uppercase whitespace-nowrap"
              style={{ lineHeight: 1 }}
            >
              VERA
            </span>
          </div>
        </Link>

        {/* Desktop: Center nav links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-accent tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: Right side - CTA button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative group">
            {/* White glow effect behind navbar CTA button */}
            <div className="absolute -inset-0.5 rounded-full bg-white/10 blur opacity-65 group-hover:opacity-100 transition duration-300 shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
            <a
              href="mailto:hello@veraops.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-between gap-4 pl-5 pr-1.5 py-1.5 bg-white text-black font-semibold text-xs rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              <span className="tracking-wider text-black font-bold whitespace-nowrap">Contact Us</span>
              <span className="w-6 h-6 rounded-full bg-[#9945ff] flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5 shadow-sm">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className="flex flex-col gap-1.5 p-2.5 border border-white/10 bg-white/5 rounded-xl"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 py-2 tracking-wide hover:text-accent transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3">
            <a
              href="mailto:hello@veraops.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-premium group w-full flex justify-between"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-black font-semibold text-xs tracking-wider whitespace-nowrap">Contact Us</span>
              <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
