"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Agents", href: "/#agents" },
  { label: "Products", href: "/#products" },
  { label: "Deploy", href: "/#deploy" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-line/80 bg-white/75 shadow-[0_1px_0_rgba(16,24,40,0.02),0_8px_24px_-12px_rgba(16,24,40,0.12)]"
          : "border-transparent bg-canvas/60",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="flex items-center gap-2 rounded-md text-ink" aria-label="Vera AI home">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-medium tracking-[-0.025em]">Vera</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-pill px-4 py-2 text-sm font-medium text-body transition-colors hover:bg-ink/[0.04] hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-pill bg-accent-gradient px-4 py-2 text-sm font-medium text-white shadow-glow transition-[filter,transform] hover:brightness-110 active:scale-[0.98] md:inline-flex"
          >
            Talk to us
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink hover:bg-ink/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white/95 px-5 pb-6 pt-3 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-ink/[0.04]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-pill bg-accent-gradient px-4 py-3 text-sm font-medium text-white shadow-glow"
          >
            Talk to us
            <ArrowRight aria-hidden className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
