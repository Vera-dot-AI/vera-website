import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GroundControl } from "@/components/ground-control";
import { HowItWorks } from "@/components/how-it-works";
import { AboutCta } from "@/components/about-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GroundControl />
      <HowItWorks />
      <AboutCta />
      <Footer />
    </main>
  );
}
