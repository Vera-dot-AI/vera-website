/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Placeholder until the dedicated GroundControl page ships at /groundcontrol.
      { source: "/groundcontrol", destination: "/products/ground-control", permanent: false },
    ];
  },
};

export default nextConfig;
