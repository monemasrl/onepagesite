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
  webpack: (config, options) => {
    /**
     * Force scss source maps for debugging. If there are performance issues or you don't need debug css, use the value "eval-source-map" instead.
     */
    if (options.dev) {
      Object.defineProperty(config, "devtool", {
        get() {
          return "source-map";
        },
        set() {},
      });
    }

    return config;
  },
};

export default nextConfig;
