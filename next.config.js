/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  experimental:{
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/painting/:path*',
        destination: '/services/:path*',
        permanent: true,
      },
      {
        source: '/favicon.ico',
        destination: '/favicon.png',
        permanent: true,
      },
      {
        source: '/green-and-safe',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/employment',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/trade-show',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/save-the-planet',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/carpentry',
        destination: '/services/carpentry',
        permanent: true,
      },
      {
        source: '/carpentry-example',
        destination: '/services/carpentry',
        permanent: true,
      },
      {
        source: '/restoration',
        destination: '/services/exterior',
        permanent: true,
      },
      {
        source: '/commercial',
        destination: '/services/commercial',
        permanent: true,
      },
      {
        source: '/hoa',
        destination: '/services/exterior',
        permanent: true,
      },
    ]
  },
}
