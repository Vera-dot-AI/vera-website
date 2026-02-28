"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#how-we-work" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b-2 border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Vera home">
          <div className="w-10 h-10 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/vera-logo.svg"
              alt="Vera hexagonal logo mark"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span
            className="font-barlow text-2xl font-bold text-foreground tracking-tight uppercase"
            style={{ lineHeight: 1 }}
          >
            VERA
          </span>
        </Link>

        {/* Desktop: Center nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: Right side - CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#contact"
            className="btn-primary"
          >
            Get in Touch
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className="flex flex-col gap-1.5 p-2 border-2 border-border bg-card"
            style={{ borderRadius: "var(--radius)" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t-2 border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground py-2 tracking-wide hover:text-accent transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t-2 border-border pt-4 mt-2">
            <Link
              href="/#contact"
              className="btn-primary w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
