"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

export function ReactiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size with device pixel ratio for crisp lines
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const gridSize = 50;
    const { x: mouseX, y: mouseY } = mouseRef.current;
    const spotlightRadius = 200;

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    const isDark = resolvedTheme === "dark";
    const dormantColor = isDark ? "rgba(42, 45, 52, 0.12)" : "rgba(229, 231, 235, 0.4)";
    const activeColor = isDark ? "rgba(42, 45, 52, 0.8)" : "rgba(100, 100, 120, 0.6)";
    const accentColor = "rgba(255, 87, 34, 0.6)";

    // Draw grid lines
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = 0; x <= rect.width; x += gridSize) {
      for (let y = 0; y < rect.height; y += gridSize) {
        const segmentCenterX = x;
        const segmentCenterY = y + gridSize / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - segmentCenterX, 2) + Math.pow(mouseY - segmentCenterY, 2)
        );

        if (distance < spotlightRadius) {
          const intensity = 1 - distance / spotlightRadius;
          const eased = Math.pow(intensity, 2);
          
          // Interpolate color based on distance
          if (isDark) {
            ctx.strokeStyle = `rgba(42, 45, 52, ${0.12 + eased * 0.68})`;
          } else {
            const gray = Math.round(229 - eased * 129);
            ctx.strokeStyle = `rgba(${gray}, ${gray}, ${Math.round(gray * 1.1)}, ${0.4 + eased * 0.4})`;
          }
        } else {
          ctx.strokeStyle = dormantColor;
        }

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + gridSize);
        ctx.stroke();
      }
    }

    // Horizontal lines
    for (let y = 0; y <= rect.height; y += gridSize) {
      for (let x = 0; x < rect.width; x += gridSize) {
        const segmentCenterX = x + gridSize / 2;
        const segmentCenterY = y;
        const distance = Math.sqrt(
          Math.pow(mouseX - segmentCenterX, 2) + Math.pow(mouseY - segmentCenterY, 2)
        );

        if (distance < spotlightRadius) {
          const intensity = 1 - distance / spotlightRadius;
          const eased = Math.pow(intensity, 2);
          
          if (isDark) {
            ctx.strokeStyle = `rgba(42, 45, 52, ${0.12 + eased * 0.68})`;
          } else {
            const gray = Math.round(229 - eased * 129);
            ctx.strokeStyle = `rgba(${gray}, ${gray}, ${Math.round(gray * 1.1)}, ${0.4 + eased * 0.4})`;
          }
        } else {
          ctx.strokeStyle = dormantColor;
        }

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + gridSize, y);
        ctx.stroke();
      }
    }

    // Draw the orange glow at cursor center (only in dark mode for stronger effect)
    if (mouseX > 0 && mouseY > 0) {
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 60);
      gradient.addColorStop(0, "rgba(255, 87, 34, 0.15)");
      gradient.addColorStop(0.5, "rgba(255, 87, 34, 0.05)");
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(mouseX - 60, mouseY - 60, 120, 120);

      // Tiny center dot
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 87, 34, 0.4)";
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      draw();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Start animation loop
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ touchAction: "none" }}
    />
  );
}
