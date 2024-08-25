
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {nextConfig,
env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },}
