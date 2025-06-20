/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

const nextConfig = {
  env: {
    APP_VERSION: packageJson.version,
    NEXT_IMAGE_ALLOWED_DOMAINS: "",
  },
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: false, // 禁用严格模式，避免在开发过程中useEffect执行2次
  images: {
    unoptimized: true, // Disables all image optimization
  },
  output: "standalone", // Reduces deployment size
  swcMinify: true, // Faster than Terser minification
};

export default nextConfig;
