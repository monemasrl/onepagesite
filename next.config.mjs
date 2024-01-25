/** @type {import('next').NextConfig} */

// Gestione delle immagini remote, host e protocollo

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
