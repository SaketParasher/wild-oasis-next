/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'zxyclwlfjzfszzisndpz.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/cabin-images/**',
            },
            // new URL('https://zxyclwlfjzfszzisndpz.supabase.co/storage/v1/object/public/cabin-images/**')
        ],
    },
};

export default nextConfig;
