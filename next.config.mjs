/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "styler.develogs.com",
      },
    ],
  },
};

export default nextConfig;
