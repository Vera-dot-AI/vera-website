"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#how-we-work" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

// Social media placeholder hrefs - replace with actual URLs when ready
const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-card border-t-2 border-border relative" role="contentinfo">
      {/* Hazard stripe accent */}
      <div className="h-1 hazard-stripe" aria-hidden="true" />

      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-4 max-w-xs">
              <Link href="/" className="flex items-center gap-3 group" aria-label="Vera home">
                <div className="w-9 h-9 relative transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={mounted && resolvedTheme === "dark" ? "/vera-logo-light.svg" : "/vera-logo-dark.svg"}
                    alt="Vera logo mark"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-barlow text-xl font-bold text-foreground tracking-tight uppercase" style={{ lineHeight: 1 }}>
                  VERA
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building intelligent co-pilots that integrate seamlessly into every workflow.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-2 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center border-2 border-border bg-background text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            <div className="flex flex-col sm:flex-row gap-10">
              {/* Quick links */}
              <div className="flex flex-col gap-3">
                <p className="font-barlow text-xs font-bold tracking-widest text-foreground mb-1">
                  Navigation
                </p>
                <nav aria-label="Footer quick links">
                  <ul className="flex flex-col gap-2" role="list">
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="font-mono-data text-xs text-muted-foreground hover:text-accent transition-colors duration-200 tracking-wider"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3">
                <p className="font-barlow text-xs font-bold tracking-widest text-foreground mb-1">
                  Contact
                </p>
                <a
                  href="mailto:hello@veraops.ai"
                  className="font-mono-data text-xs text-muted-foreground hover:text-accent transition-colors duration-200 tracking-wider"
                >
                  hello@veraops.ai
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-border pt-6">
            <p className="font-mono-data text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} VERA AI. All rights reserved.
            </p>
            <nav aria-label="Legal navigation">
              <ul className="flex items-center gap-5" role="list">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-mono-data text-xs text-muted-foreground hover:text-accent transition-colors duration-200 tracking-wider"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
