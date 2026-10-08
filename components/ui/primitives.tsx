"use client";

import { m } from "framer-motion";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "header";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em]",
        dark ? "text-indigo-200" : "text-accent",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-pill bg-accent-gradient" />
      {children}
    </p>
  );
}

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "li";
};

/** White card with hover lift and a cursor-following accent glow (desktop only). */
export function GlowCard({ className, children, as = "div", ...rest }: GlowCardProps) {
  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  const Comp = as;
  return (
    <Comp
      onPointerMove={onPointerMove}
      className={cn(
        "glow-card rounded-2xl border border-line bg-white shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out",
        "hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift",
        className,
      )}
      {...(rest as React.HTMLAttributes<HTMLElement>)}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  dark = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-balance text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.875rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-body",
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
