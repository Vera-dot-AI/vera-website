import Link from "next/link";

const products = [
  {
    name: "GroundControl",
    tagline: "AI Copilot for Field Technicians",
    description:
      "Powered by your own knowledge base, GroundControl guides HVAC technicians through on-site diagnostics, step-by-step repairs, and instant access to manuals and schematics.",
    href: "/products/ground-control",
    badge: "Available Now",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-sky/20 grain-overlay px-6 py-24 md:py-32"
      aria-labelledby="products-heading"
    >
      {/* Blob decorations */}
      <div
        aria-hidden="true"
        className="absolute top-[-15%] right-[-8%] w-[400px] h-[400px] bg-blush/40 blob opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-[-8%] w-[360px] h-[360px] bg-sky/50 blob-2 opacity-50"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
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
          <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
            Each product is designed around a specific industry workflow, trained on your data, and deployed where the work actually happens.
          </p>
        </div>

        {/* Product cards */}
        <div className="flex flex-col gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-card/80 backdrop-blur-sm border border-border hover:border-navy/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex flex-col gap-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
                    {product.name}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {product.tagline}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 text-navy font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Explore
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
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
