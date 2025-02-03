import { unstable_cache } from 'next/cache'
import { IInstagramPost, MediaType } from './instagram.interface'
import { igClient } from '../axios'

export interface IInstagramResponse {
	id: string
	media: {
		data: IInstagramPost[]
	}
}

const revalidate = 60 * 60 // 1h

const getInstagramPosts = async (APP_ID: string, ACCESS_TOKEN: string) => {
	try {
		const data = await igClient.get<IInstagramResponse>(
			`/${APP_ID}?fields=id,media{media_url,permalink,caption,media_type}&access_token=${ACCESS_TOKEN}`
		)

		if (!data || !data.data || !data.data.media || !data.data.media.data) {
			return null
		}

		const filteredData = data.data.media.data
			.filter((post) => post.media_type !== MediaType.VIDEO)
			.slice(0, 8)

		return filteredData
	} catch (err) {
		if (err instanceof Error)
			console.log('Error fetching instagram posts', err.message)
		else console.error('Error fetching instagram posts', err)

		return null
	}
}

export const getInstagramHabartoviPosts = unstable_cache(
	async () => {
		const data = await getInstagramPosts(
			process.env.HABARTOVI_IG_APP_ID!,
			process.env.HABARTOVI_IG_ACCESS_TOKEN!
		)

		return data
	},
	['instagramHabartoviPosts'],
	{ revalidate, tags: ['instagramHabartoviPosts'] }
)

export const getInstagramPotteryPosts = unstable_cache(
	async () => {
		const data = await getInstagramPosts(
			process.env.POTTERY_IG_APP_ID!,
			process.env.POTTERY_IG_ACCESS_TOKEN!
		)

		return data
	},
	['instagramPotteryPosts'],
	{ revalidate, tags: ['instagramPotteryPosts'] }
)
