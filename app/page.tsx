import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductsSection } from "@/components/products-section";
import { AboutCta } from "@/components/about-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductsSection />
      <AboutCta />
      <Footer />
    </main>
  );
}
