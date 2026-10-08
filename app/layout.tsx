import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vera AI | Your organization's knowledge, turned into copilots",
  description:
    "Vera builds the knowledge layer and the AI agents on top of it, so every person on your team works with your best expert's know-how.",
  keywords: ["AI copilots", "knowledge layer", "AI agents", "enterprise knowledge", "Vera AI"],
  icons: {
    icon: "/logo.png",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-canvas font-sans text-body antialiased selection:bg-accent/15 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
