/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = nextConfig;
