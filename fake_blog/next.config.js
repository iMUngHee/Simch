/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['unghee.notion.site', 'velog.velcdn.com'],
  },
};

module.exports = nextConfig;
