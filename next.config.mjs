/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'scontent.cdninstagram.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'instagram.fprg5-1.fna.fbcdn.net',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'admin.habartovi.cz',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
