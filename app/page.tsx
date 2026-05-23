import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Vision } from "@/components/sections/vision";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyUs } from "@/components/sections/why-us";
import { AboutCta } from "@/components/sections/about-cta";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <HowItWorks />
      <WhyUs />
      <AboutCta />
      <FinalCta />
      <Footer />
    </main>
  );
}
