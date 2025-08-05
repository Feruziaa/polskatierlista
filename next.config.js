/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['skins.minecraft.net'], // jakbyś ładował skiny z zewnętrznych źródeł
  },
  trailingSlash: true // żeby kończyło się slashem (opcjonalne)
};

module.exports = nextConfig;
