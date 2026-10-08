import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/ui/motion-provider";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { KnowledgeLayer } from "@/components/sections/knowledge-layer";
import { Agents } from "@/components/sections/agents";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Products } from "@/components/sections/products";
import { Deploy } from "@/components/sections/deploy";
import { WhyVera } from "@/components/sections/why-vera";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
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
        <Hero />
        <Problem />
        <KnowledgeLayer />
        <Agents />
        <HowItWorks />
        <Products />
        <Deploy />
        <WhyVera />
        <ClosingCta />
      </main>
      <Footer />
    </MotionProvider>
  );
}
