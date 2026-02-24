import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vera - Intelligent Copilots. Real-World Solutions.",
  description:
    "Vera empowers field teams with AI copilots that understand and guide. Our first product, Ground Control, is an intelligent guide for HVAC technicians.",
  keywords: ["AI copilot", "HVAC", "field service", "Ground Control", "Vera"],
  openGraph: {
    title: "Vera - Intelligent Copilots. Real-World Solutions.",
    description: "Empowering teams with AI that understands and guides.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B2B5B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
