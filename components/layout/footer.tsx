import { Logo } from "@/components/ui/logo";
import { container } from "@/lib/utils";

const links = [
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "#contact" },
  // TODO: replace with the Vera AI LinkedIn page URL.
  { label: "LinkedIn", href: "#" },
  // TODO: replace with the privacy policy URL.
  { label: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-400">
      <div className={`${container} flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between`}>
        <div className="flex items-center gap-2 text-white">
          <Logo className="h-7 w-7" />
          <span className="font-medium tracking-[-0.025em]">Vera</span>
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
        <p className="text-sm">&copy; {new Date().getFullYear()} Vera AI</p>
      </div>
    </footer>
  );
}
