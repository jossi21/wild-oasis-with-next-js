/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // image config
  images: {
    remotePatterns: [
      new URL(
        "https://afdybqzhbecbwxwlwodo.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
    ],
  },
};

export default nextConfig;
