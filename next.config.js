/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [],
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
        destination: '/painting/interior',
        permanent: true,
      },
      {
        source: '/carpentry-example',
        destination: '/painting/interior',
        permanent: true,
      },
      {
        source: '/restoration',
        destination: '/painting/exterior',
        permanent: true,
      },
      {
        source: '/commercial',
        destination: '/painting/exterior',
        permanent: true,
      },
      {
        source: '/hoa',
        destination: '/painting/exterior',
        permanent: true,
      },
    ]
  },
}
