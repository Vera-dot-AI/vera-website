import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "600"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vera - Intelligent Copilots. Real-World Solutions.",
  description:
    "Vera empowers field teams with AI copilots that understand and guide. Our first product, Ground Control, is an intelligent guide for HVAC technicians.",
  keywords: ["AI copilot", "HVAC", "field service", "Ground Control", "Vera"],
  icons: {
    icon: "/favicon.svg",
  },
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
