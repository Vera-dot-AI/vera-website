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
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-blush/30 blob opacity-40"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
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

        {/* Horizontal card list */}
        <div className="flex flex-col gap-5">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative flex flex-col sm:flex-row sm:items-center bg-card border border-border rounded-2xl overflow-hidden hover:border-navy/30 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-navy scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 rounded-l-2xl" />

              {/* Main content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-6 px-8 py-7">
                {/* Name + tagline */}
                <div className="sm:w-56 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-navy transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch bg-border" />

                {/* Description + pills */}
                <div className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Available soon badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      {product.badge}
                    </span>
                    {product.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center px-3 py-1 rounded-full border border-navy/15 text-xs font-medium text-foreground/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 flex items-center pr-8 pl-0 sm:pl-4 pb-7 sm:pb-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="text-navy/40 group-hover:text-navy transition-all duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M4 10H16M11 5L16 10L11 15"
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
