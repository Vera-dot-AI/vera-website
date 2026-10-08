/**
 * Vera mark: the six-node network that was the browser favicon, redrawn as
 * vectors so it inherits color. The glyph this file used to hold is the
 * GroundControl mark; it now lives in ground-control-logo.tsx.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 574 652" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="36" strokeLinecap="round">
        <line x1="294" y1="48" x2="51" y2="196" />
        <line x1="51" y1="196" x2="51" y2="456" />
        <line x1="529" y1="207" x2="535" y2="469" />
        <line x1="535" y1="469" x2="301" y2="598" />
        <line x1="292" y1="346" x2="154" y2="266" />
        <line x1="292" y1="346" x2="435" y2="262" />
        <line x1="292" y1="346" x2="301" y2="598" />
      </g>
      <g fill="currentColor">
        <circle cx="294" cy="48" r="47.5" />
        <circle cx="51" cy="196" r="47.5" />
        <circle cx="529" cy="207" r="47.5" />
        <circle cx="51" cy="456" r="47.5" />
        <circle cx="535" cy="469" r="47.5" />
        <circle cx="301" cy="598" r="47.5" />
      </g>
    </svg>
  );
}
