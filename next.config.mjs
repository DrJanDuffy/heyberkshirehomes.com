/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'em.realscout.com',
      },
      {
        protocol: 'https',
        hostname: 'www.realscout.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://www.google-analytics.com https://www.googletagmanager.com",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
