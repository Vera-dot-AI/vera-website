import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

// Social media placeholder hrefs — replace with actual URLs when ready
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
  return (
    <footer className="bg-navy grain-overlay border-t border-primary-foreground/10 px-6 py-14" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2 group" aria-label="Vera home">
              <div className="w-9 h-9 relative transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/vera-logo.svg"
                  alt="Vera logo mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-poppins text-xl font-light text-primary-foreground tracking-tight" style={{ lineHeight: 1 }}>
                vera
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Building intelligent systems that empower skilled teams and unlock operational excellence.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/8 border border-primary-foreground/12 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/25 transition-all duration-200"
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-1">
                Quick Links
              </p>
              <nav aria-label="Footer quick links">
                <ul className="flex flex-col gap-2" role="list">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
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
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-1">
                Contact
              </p>
              <a
                href="mailto:hello@vera.ai"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                hello@vera.ai
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6">
          <p className="text-xs text-primary-foreground/35">
            &copy; {new Date().getFullYear()} Vera. All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-5" role="list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
