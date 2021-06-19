module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io']
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  async headers() {
    return [
      { 
        source: '/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=0, no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
}
