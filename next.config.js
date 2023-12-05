/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.vestabuffet.com',
        port: '',
        pathname: '/common/img/*',
      },
      {
        protocol: 'http',
        hostname: 'www.vestabuffet.com',
        port: '',
        pathname: '/main/*',
      },
    ],
  },
}


module.exports = nextConfig
