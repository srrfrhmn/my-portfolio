/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  turbopack: {},
  async redirects() {
    return ['career', 'gallery', 'blog'].map((section) => ({
      source: `/${section}`, destination: `/#${section}`, permanent: false,
    }))
  },
}
