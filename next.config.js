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
    ],
  },
}


module.exports = nextConfig
