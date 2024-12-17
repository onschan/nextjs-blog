/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    domains: [],
  },
  experimental: {
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/generate-files",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
