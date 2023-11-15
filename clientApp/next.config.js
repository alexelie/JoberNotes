/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Notes',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
