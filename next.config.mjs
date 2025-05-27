// next.config.mjs (або next.config.js) у чистому проекті railway-test
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Залишаємо або встановлюємо за бажанням
    output: "standalone", // 
    experimental: {
      instrumentationHook: true, // Залишаємо, ЯКЩО ви додавали файл instrumentation.ts для тестування глобальних помилок. Якщо ні - цю секцію experimental можна прибрати.
    },
  };
  export default nextConfig; // Або module.exports = nextConfig; для .js