import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['localhost', 'daisyui.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'daisyui.com',
        pathname: '**',
      },
    ],
  },
}

// export default nextConfig
export default withNextIntl(nextConfig)
