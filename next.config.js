/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
  };
};

const redirects = async () => {
  return [
    {
      source: '/',
      destination: '/fr-ca',
      permanent: true,
    },
  ];
};

module.exports = {
  ...nextConfig,
  redirects,
};
