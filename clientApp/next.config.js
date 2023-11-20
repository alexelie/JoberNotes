/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
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
