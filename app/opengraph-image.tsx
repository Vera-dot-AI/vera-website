import { renderOg, ogContentType, ogSize } from "@/lib/og-card";

export const alt = "Vera AI. Your organization's knowledge, turned into copilots.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Vera AI",
    title: "Your organization's knowledge, turned into copilots.",
  });
}
