import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { GroundControl } from "@/components/sections/ground-control";
import { WhyUs } from "@/components/sections/why-us";
import { AboutCta } from "@/components/sections/about-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-container-max mx-auto">
        <Hero />
        <GroundControl />
        <WhyUs />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
