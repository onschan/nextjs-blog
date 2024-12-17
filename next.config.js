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
