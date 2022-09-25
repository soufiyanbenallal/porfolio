/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

// const nextConfig = {
//   // reactStrictMode: true,
//   // swcMinify: true,
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   },
// }

// module.exports = withPWA(nextConfig)


const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = (phase, { defaultConfig }) => {
  return withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      buildExcludes: [/middleware-manifest\.json$/],
      disable: process.env.NODE_ENV === 'development',
      runtimeCaching
    },
    images: {
      loader: 'imgix',
      path: '/',
    },
    reactStrictMode: true,
    swcMinify: true,
  });
};
