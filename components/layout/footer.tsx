import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full bottom-0 border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-4 max-md:items-center max-md:text-center">
          <span className="text-headline-md font-headline-md text-on-surface font-bold tracking-tight">Vera</span>
          <p className="text-body-md font-body-md text-on-surface-variant">
            &copy; {new Date().getFullYear()} Vera AI. All rights reserved. Built for real work.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-6 md:justify-end items-center md:items-end justify-center">
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface underline hover:translate-y-[-1px] transition-transform" href="#">Privacy Policy</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface underline hover:translate-y-[-1px] transition-transform" href="#">Terms of Service</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface underline hover:translate-y-[-1px] transition-transform" href="#">Security</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface underline hover:translate-y-[-1px] transition-transform" href="#">Status</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-on-surface underline hover:translate-y-[-1px] transition-transform" href="#">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
