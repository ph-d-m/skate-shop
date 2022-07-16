/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.chec.io",
      "images.pexels.com"
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }, 
}


module.exports = nextConfig
