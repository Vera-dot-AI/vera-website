/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/products/ground-control", destination: "/groundcontrol", permanent: false },
    ];
  },
};

export default nextConfig;
