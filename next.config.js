/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

// module.exports = withPWA((phase, { defaultConfig }) => {
//   return {
//     pwa: {
//       dest: 'public',
//       register: true,
//       skipWaiting: true,
//       buildExcludes: [/middleware-manifest\.json$/],
//       disable: process.env.NODE_ENV === 'development',
//       runtimeCaching
//     },
//     images: {
//       loader: 'imgix',
//       path: '/',
//       unoptimized: true,
//       domains: ['react-blog.ghost.io'],
//       formats: ['image/avif', 'image/webp', 'image/png', 'image/jpg']
//     },

//     reactStrictMode: true,
//     swcMinify: true,
//   };
// });
