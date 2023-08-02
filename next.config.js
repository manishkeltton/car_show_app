
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
domains:["cdn.imagin.studio"]
},
}
module.exports = nextConfig;


const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable:process.env.NODE_ENV ='development'
  // images:{
  //   domain:["cdn.imagin.studio"]
  // }
});
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains:["cdn.imagin.studio"]
    },
});
