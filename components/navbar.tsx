"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "GroundControl",
    description: "AI copilot for HVAC field technicians",
    href: "/products/ground-control",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Vera home">
          <div className="w-10 h-10 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/vera-logo.svg"
              alt="Vera hexagonal logo mark"
              fill
              className="object-contain"
            />
          </div>
          <span
            className="font-poppins text-2xl font-light text-foreground tracking-tight"
            style={{ lineHeight: 1 }}
          >
            vera
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {/* Products dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen((o) => !o)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Products
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {productsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-card/95 backdrop-blur-md border border-border rounded-2xl shadow-xl overflow-hidden"
                role="menu"
              >
                <div className="p-2">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      role="menuitem"
                      onClick={() => setProductsOpen(false)}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-navy/5 transition-colors duration-200 group"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors duration-200">
                        {p.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {p.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md"
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
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground px-2 pt-1 pb-0.5">
            Products
          </p>
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="text-sm font-medium text-foreground py-2 px-2 rounded-lg hover:bg-navy/5 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {p.name}
            </Link>
          ))}
          <div className="border-t border-border my-1" />
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground py-2 px-2 rounded-lg hover:bg-navy/5 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
