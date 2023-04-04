const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/health',
  //       destination: '/api/health',
  //     },
  //     {
  //       source: '/:path*',
  //       destination: `${process.env.URL}/:path*`,
  //     },
  //   ];
  // },
  output: 'standalone',
  basePath: '/permanconn-frontend-zest',
});
