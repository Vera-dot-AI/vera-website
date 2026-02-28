"use client";

import { useEffect, useRef, useState } from "react";

export function ReactiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      aria-hidden="true"
    >
      {/* Base grid pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />

      {/* Spotlight effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          opacity: isHovering ? 1 : 0,
          background: `
            radial-gradient(
              circle at center,
              hsl(var(--accent) / 0.08) 0%,
              hsl(var(--accent) / 0.03) 30%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Brighter grid lines in spotlight area */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          opacity: isHovering ? 1 : 0,
          maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 70%)",
          backgroundImage: `
            linear-gradient(hsl(var(--accent) / 0.25) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent) / 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Center glow point */}
      <div
        className="absolute pointer-events-none rounded-full transition-opacity duration-200"
        style={{
          left: mousePos.x - 4,
          top: mousePos.y - 4,
          width: 8,
          height: 8,
          opacity: isHovering ? 0.8 : 0,
          background: "hsl(var(--accent))",
          boxShadow: "0 0 20px 6px hsl(var(--accent) / 0.4)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
