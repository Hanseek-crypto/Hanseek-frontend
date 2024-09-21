/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID: process.env.WEB3_AUTH_CLIENT_ID,
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    NEXT_PUBLIC_ALCHEMY_RPC_URL: process.env.ALCHEMY_RPC_URL,
    NEXT_PUBLIC_PRIVATE_KEY: process.env.PRIVATE_KEY,
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  },
};

module.exports = nextConfig;
