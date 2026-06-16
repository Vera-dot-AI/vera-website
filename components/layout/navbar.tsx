"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Solutions", href: "#product" },
  { label: "Why Vera?", href: "#why-us" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 transition-all duration-300 z-50 bg-background ${scrolled ? "border-b border-outline-variant shadow-md" : "border-b border-transparent"}`}>
      <div className="grid grid-cols-2 min-[1210px]:grid-cols-3 items-center w-full px-margin-mobile md:px-margin-desktop h-16 max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center group transition-transform duration-300">
            <img src="/logo_clear.png" alt="Vera Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" />
            <span className={`text-headline-md font-headline-md font-bold tracking-tighter text-on-surface transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden ${pastHero ? "max-w-[100px] opacity-100 translate-x-0 ml-2" : "max-w-0 opacity-0 -translate-x-4 ml-0"}`}>Vera</span>
          </Link>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden min-[1210px]:flex justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Trailing Actions */}
        <div className="flex justify-end items-center gap-4">
          <a href="mailto:hello@veraops.ai" className="hidden min-[1210px]:flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded font-medium hover:opacity-90 transition-opacity group">
            Contact Us
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </a>
          <button className="min-[1210px]:hidden text-on-surface" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="min-[1210px]:hidden bg-background border-t border-b border-outline-variant px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body-md font-medium text-on-surface-variant py-2 tracking-wide hover:text-primary transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-outline-variant pt-4 mt-2">
            <a href="mailto:hello@veraops.ai" className="w-full flex justify-between items-center px-4 py-3 bg-primary text-on-primary rounded font-medium">
              Contact Us
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
