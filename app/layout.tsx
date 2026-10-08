import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Switzer-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Switzer-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vera AI | Your organization's knowledge, turned into copilots",
  description:
    "Vera builds the knowledge layer and the AI agents on top of it, so every person on your team works with your best expert's know-how.",
  keywords: ["AI copilots", "knowledge layer", "AI agents", "enterprise knowledge", "Vera AI"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vera AI | Knowledge, turned into copilots",
    description:
      "One knowledge layer for everything your team knows, and copilots that do the work with you.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F8FA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${switzer.variable} ${plexMono.variable}`}>
      <body className="bg-canvas font-sans text-base font-normal leading-[1.6] text-body antialiased selection:bg-accent/15 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
