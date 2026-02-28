import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Vision } from "@/components/vision";
import { HowItWorks } from "@/components/how-it-works";
import { WhyUs } from "@/components/why-us";
import { AboutCta } from "@/components/about-cta";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

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
