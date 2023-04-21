/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const { i18n } = require("./next-i18next.config");
module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["cdn.shortpixel.ai"],
  },
  i18n,
};
