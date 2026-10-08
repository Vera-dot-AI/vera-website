import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function switzer() {
  return readFile(join(process.cwd(), "app/fonts/Switzer-Semibold.ttf"));
}

function Mark() {
  return (
    <svg width="52" height="59" viewBox="0 0 574 652" fill="none">
      <g stroke="#0B0D12" strokeWidth="36" strokeLinecap="round" fill="none">
        <line x1="294" y1="48" x2="51" y2="196" />
        <line x1="51" y1="196" x2="51" y2="456" />
        <line x1="529" y1="207" x2="535" y2="469" />
        <line x1="535" y1="469" x2="301" y2="598" />
        <line x1="292" y1="346" x2="154" y2="266" />
        <line x1="292" y1="346" x2="435" y2="262" />
        <line x1="292" y1="346" x2="301" y2="598" />
      </g>
      <g fill="#0B0D12">
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

export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const font = await switzer();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F8FA",
          padding: "68px 76px",
          fontFamily: "Switzer",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(124,58,237,0.16)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Mark />
          <span style={{ fontSize: 36, color: "#0B0D12", letterSpacing: "-0.025em" }}>Vera</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <span style={{ fontSize: 20, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4F46E5" }}>
            {eyebrow}
          </span>
          <div style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.025em", color: "#0B0D12" }}>{title}</div>
        </div>
        <span style={{ fontSize: 22, color: "#5B6170" }}>veraops.ai</span>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Switzer", data: font, weight: 600, style: "normal" }],
    },
  );
}
