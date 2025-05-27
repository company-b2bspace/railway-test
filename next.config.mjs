// next.config.mjs (або next.config.js) у ЧИСТОМУ проекті railway-test
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig; // Або module.exports = nextConfig; для .js-файлу