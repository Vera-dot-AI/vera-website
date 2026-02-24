import Link from "next/link";

const products = [
  {
    name: "GroundControl",
    tagline: "AI Copilot for Field Technicians",
    description:
      "Powered by your own knowledge base, GroundControl guides HVAC technicians through on-site diagnostics, step-by-step repairs, and instant access to manuals and schematics.",
    href: "/products/ground-control",
    badge: "Available Soon",
    highlights: ["Knowledge-base powered", "Real-time guidance", "HVAC focused"],
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
        className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-blush/30 blob opacity-40"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-navy/30 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Top accent bar — slides in from left on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-navy scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

              {/* Card body */}
              <div className="flex flex-col gap-5 p-7 flex-1">
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                    {product.badge}
                  </span>
                </div>

                {/* Name + tagline */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:text-navy transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 text-pretty">
                  {product.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2">
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

              {/* Card footer */}
              <div className="px-7 py-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-semibold text-navy">
                  Learn more
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="text-navy transition-transform duration-300 group-hover:translate-x-1"
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
