import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { WhyUs } from "@/components/sections/why-us";
import { AboutCta } from "@/components/sections/about-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyUs />
      <AboutCta />
      <Footer />
    </main>
  );
}
