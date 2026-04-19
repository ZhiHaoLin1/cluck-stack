/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-ec2cb0892de943b0b34452bdaf3b4997.r2.dev',
      },
    ],
  },
}

module.exports = nextConfig
