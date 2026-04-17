/** @type {import('next').NextConfig} */
const nextConfig = {
  // image config
  images: {
    remotePatterns: [
      new URL(
        "https://afdybqzhbecbwxwlwodo.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
    ],
  },
  
  // Ensure API routes work properly
  reactStrictMode: true,
};

export default nextConfig;
