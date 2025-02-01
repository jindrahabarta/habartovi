import { unstable_cache } from 'next/cache'
import { IInstagramPost, MediaType } from './instagram.interface'
import { igClient } from '../axios'

export interface IInstagramResponse {
	id: string
	media: {
		data: IInstagramPost[]
	}
}

export const getIGPosts = unstable_cache(
	async () => {
		try {
			const data = await igClient.get<IInstagramResponse>(
				`/${process.env.IG_APP_ID}?fields=id,media{media_url,permalink,caption,media_type}&access_token=${process.env.IG_ACCESS_TOKEN}`
			)

			if (
				!data ||
				!data.data ||
				!data.data.media ||
				!data.data.media.data
			) {
				return null
			}

			const filteredData = data.data.media.data
				.filter((post) => post.media_type !== MediaType.VIDEO)
				.slice(0, 8)

			return filteredData
		} catch (err) {
			console.error('Error fetching instagram posts', err)
			return null
		}
	},
	['instagramPosts'],
	{ revalidate: 600, tags: ['instagramPosts'] } // 10 minutes
)
