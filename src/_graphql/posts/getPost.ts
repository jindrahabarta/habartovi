import { gql } from '@apollo/client'
import { wpClient } from '@/_graphql/apollo'
import { IPost, postAttributes } from './post.interface'
import { unstable_cache } from 'next/cache'

interface IPostResponse {
	post: IPost & {
		content: string
	}
}

function getPostQuery(slug: string) {
	return gql`
		query getPost {
			post( id: "${slug}", idType: SLUG ) {
				${postAttributes}
				content
			}
		}
	`
}

export const getPost = unstable_cache(
	async (slug: string) => {
		try {
			const data = await wpClient.query<IPostResponse>({
				query: getPostQuery(slug),
			})
			if (!data || !data.data || !data.data.post) {
				return null
			}

			return data.data.post
		} catch (err) {
			console.error('Error fetching posts', err)
			return null
		}
	},
	['post'],
	{ revalidate: 600, tags: ['post'] } // 10 minutes
)
