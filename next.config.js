/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "http://192.168.0.56:8080/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
