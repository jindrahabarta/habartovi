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
		],
	},
}

export default nextConfig
