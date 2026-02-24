import Link from "next/link";

const products = [
  {
    number: "01",
    name: "GroundControl",
    tagline: "AI Copilot for Field Technicians",
    description:
      "Powered by your own knowledge base, GroundControl guides HVAC technicians through on-site diagnostics, step-by-step repairs, and instant access to manuals and schematics.",
    href: "/products/ground-control",
    badge: "Available Now",
    highlights: ["Knowledge-base powered", "Real-time guidance", "Works offline"],
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-cream grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="products-heading"
    >
      {/* Subtle blob */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blush/30 blob opacity-40"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            Our Products
          </p>
          <h2
            id="products-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground text-balance"
          >
            Copilots Built for the Real World
          </h2>
        </div>

        {/* Product rows */}
        <div className="flex flex-col divide-y divide-border">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 py-12 md:py-16 transition-all duration-300"
            >
              {/* Index number */}
              <span className="font-serif text-6xl md:text-7xl font-bold text-navy/10 group-hover:text-navy/20 transition-colors duration-300 flex-shrink-0 leading-none select-none">
                {product.number}
              </span>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground group-hover:text-navy transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-semibold tracking-wide">
                    {product.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  {product.tagline}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-pretty">
                  {product.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center px-3 py-1 rounded-full border border-navy/15 text-xs font-medium text-foreground/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow CTA */}
              <div className="flex-shrink-0 flex items-center gap-2 text-navy font-semibold text-sm opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300 md:self-center">
                Explore
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
