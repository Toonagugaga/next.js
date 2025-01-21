import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/736x/13/17/44/1317441b5603590e9756adec6862e9ee.jpg',
        search: '',
      }
    ]
  }
}

export default nextConfig