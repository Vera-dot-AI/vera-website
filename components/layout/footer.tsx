import { Logo } from "@/components/ui/logo";
import { CONTACT_EMAIL } from "@/lib/site";
import { container } from "@/lib/utils";

const links = [
  { label: "Products", href: "/#products" },
  { label: "GroundControl", href: "/groundcontrol" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.34 8.5h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 7v8.76h-4.56v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.01-2.98 4.1V24H8.34V8.5z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.37.5.5 5.37.5 12a11.5 11.5 0 0 0 7.86 10.95c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.37 18.63.5 12 .5z" />
    </svg>
  );
}

const social = [
  // TODO: replace href with the Vera AI LinkedIn URL.
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  // TODO: replace href with the Vera AI GitHub organization URL (https://github.com/<org>).
  { label: "GitHub", href: "#", Icon: GitHubIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-400">
      <div className={`${container} py-12`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-white">
              <Logo className="h-7 w-7" />
              <span className="font-medium tracking-[-0.025em]">Vera</span>
            </div>
            <p className="mt-3 text-sm leading-[1.6]">Your organization&rsquo;s knowledge, turned into copilots.</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
              {CONTACT_EMAIL}
            </a>
            <span>India</span>
            <ul className="flex items-center gap-3">
              {social.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-pill border border-white/10 text-slate-300 transition-colors hover:text-white"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p>&copy; 2026 Vera AI</p>
        </div>
      </div>
    </footer>
  );
}
