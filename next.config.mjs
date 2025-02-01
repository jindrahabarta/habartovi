/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['*'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bckend.concept-pronoia.cz',
				pathname: '/**',
			},
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
		],
	},
}

export default nextConfig
