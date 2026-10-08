import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/ui/motion-provider";
import { GroundControlHero } from "@/components/groundcontrol/hero";
import { GroundControlProblem } from "@/components/groundcontrol/problem";
import { GroundControlHow } from "@/components/groundcontrol/how-it-works";
import { GroundedAnswers } from "@/components/groundcontrol/grounded";
import { Capabilities } from "@/components/groundcontrol/capabilities";
import { Audience } from "@/components/groundcontrol/audience";
import { GroundControlClosing } from "@/components/groundcontrol/closing";

export const metadata: Metadata = {
  title: "GroundControl | The AI copilot for field operations",
  description:
    "GroundControl puts expert know-how in every technician's pocket, so teams diagnose faster, fix it the first time, and never lose what their best people know.",
};

export default function GroundControlPage() {
  return (
    <MotionProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lift"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <GroundControlHero />
        <GroundControlProblem />
        <GroundControlHow />
        <GroundedAnswers />
        <Capabilities />
        <Audience />
        <GroundControlClosing />
      </main>
      <Footer />
    </MotionProvider>
  );
}
