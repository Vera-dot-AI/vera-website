/**
 * Builds a CSS @keyframes block that toggles `opacity` between 0 and 1 inside
 * the given time windows of a looping timeline. Lets several CSS-animated
 * elements and SMIL particles share one clock without JS.
 */
export function windowKeyframes(
  name: string,
  windows: [number, number][],
  total: number,
  ramp = 0.25,
  on = 1,
  off = 0,
) {
  const pct = (t: number) => `${Math.min(100, Math.max(0, (t / total) * 100)).toFixed(2)}%`;
  const frames: string[] = [`0%{opacity:${off}}`];
  for (const [start, end] of windows) {
    frames.push(`${pct(start)}{opacity:${off}}`);
    frames.push(`${pct(start + ramp)}{opacity:${on}}`);
    frames.push(`${pct(end - ramp)}{opacity:${on}}`);
    frames.push(`${pct(end)}{opacity:${off}}`);
  }
  frames.push(`100%{opacity:${off}}`);
  return `@keyframes ${name}{${frames.join("")}}`;
}

/** keyTimes / keyPoints for an SMIL particle that only moves within [start, end]. */
export function particleTiming(start: number, end: number, total: number) {
  const a = +(start / total).toFixed(4);
  const b = +(end / total).toFixed(4);
  const e = 0.004;
  return {
    keyTimes: `0;${a};${b};1`,
    keyPoints: "0;0;1;1",
    opacityTimes: `0;${a};${+(a + e).toFixed(4)};${+(b - e).toFixed(4)};${b};1`,
    opacityValues: "0;0;1;1;0;0",
  };
}
