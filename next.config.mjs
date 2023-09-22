import withPWAInit from "@ducanh2912/next-pwa"

const withPWA = withPWAInit({
  dest: "public",
})

export default withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    MYACCESSTOKEN: process.env.MYACCESSTOKEN,
    apiEndpoint: process.env.apiEndpoint,
  },
})
