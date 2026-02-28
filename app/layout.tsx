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
  title: "Vera - AI That Works Where Real Work Happens.",
  description:
    "Vera builds intelligent systems that empower skilled teams, streamline workflows, and unlock operational excellence.",
  keywords: ["AI", "intelligent systems", "workflow automation", "operational excellence", "Vera"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Vera - AI That Works Where Real Work Happens.",
    description: "We build intelligent systems that empower skilled teams and unlock operational excellence.",
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
