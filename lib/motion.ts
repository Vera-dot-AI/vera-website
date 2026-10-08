"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Hydration-safe reduced-motion flag: always `false` on the server and first
 * client render, then follows the media query.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** True only on devices with a precise pointer that can hover (desktop). */
export function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return fine;
}

/**
 * Tracks whether an element is near the viewport so looping visuals only run
 * while visible. Returns the ref, the live visibility, and whether it has ever
 * been visible (useful for lazy-mounting heavier SVG).
 */
export function useActiveInView<T extends Element = HTMLDivElement>(margin = "120px 0px") {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: margin as `${number}px ${number}px` });
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (inView) setSeen(true);
  }, [inView]);

  return { ref, inView, seen };
}

/**
 * Steps through `durations.length` phases in a loop while `active`. Each entry
 * is how long (ms) to stay on that phase. When `reduced` is set the loop is
 * frozen on `staticStep` (defaults to the last phase, i.e. the "complete"
 * state).
 */
export function useStepLoop(
  durations: number[],
  active: boolean,
  reduced: boolean,
  staticStep = durations.length - 1,
) {
  const [step, setStep] = useState(0);
  const durationsRef = useRef(durations);
  durationsRef.current = durations;

  useEffect(() => {
    if (reduced || !active) return;
    const timer = window.setTimeout(() => {
      setStep((s) => (s + 1) % durationsRef.current.length);
    }, durationsRef.current[step]);
    return () => window.clearTimeout(timer);
  }, [step, active, reduced]);

  return reduced ? staticStep : step;
}
