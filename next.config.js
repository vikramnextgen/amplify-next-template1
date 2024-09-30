/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Disables automatic trailing slashes

  async redirects() {
    return [
      {
        source: '/api/simulate-error',  // Original path to redirect from
        destination: '/vikram',         // New path to redirect to
        permanent: false,               // Temporary redirect (302)
      },
    ]
  },
};

module.exports = nextConfig;
