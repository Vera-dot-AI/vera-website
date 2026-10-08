import { renderOg, ogContentType, ogSize } from "@/lib/og-card";

export const alt = "GroundControl by Vera. The AI copilot for field operations.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "GroundControl",
    title: "The AI copilot for field operations.",
  });
}
