import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border px-6 py-12" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Vera home">
            <div className="w-8 h-8 relative">
              <Image
                src="/vera-logo.svg"
                alt="Vera logo mark"
                fill
                className="object-contain rounded-sm"
              />
            </div>
            <span className="font-serif text-lg font-bold text-foreground tracking-tight">
              vera
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Intelligent copilots for real-world teams.
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6" role="list">
            {[
              { label: "Products", href: "#products" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "mailto:hello@vera.ai" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal */}
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Vera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
