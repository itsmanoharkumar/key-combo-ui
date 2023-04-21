/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "keycomboserver.blob.core.windows.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
