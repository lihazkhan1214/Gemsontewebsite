// next.config.js


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "uploadthing.com", "media.istockphoto.com", "media.graphassets.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
}

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}

module.exports = nextConfig








// /** @type {import('next').NextConfig} */
// const nextConfig = {
//       images: {
//         domains: ["res.cloudinary.com", "uploadthing.com", "media.istockphoto.com", "media.graphassets.com"],
//       },
//       reactStrictMode: true,
//       swcMinify: true,
//       output: "standalone",
    
//     };
    
//     module.exports = nextConfig;
    