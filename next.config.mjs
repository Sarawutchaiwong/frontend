/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://backend-nextjs-virid.vercel.app/api/:path*',
      },
    ]
  },
};

export default nextConfig;
