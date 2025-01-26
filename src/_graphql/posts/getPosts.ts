import { unstable_cache } from 'next/cache'
import { client } from '@/_graphql/apollo'
import { gql } from '@apollo/client'
import { IPost, postAttributes } from './post.interface'

export interface IPostsResponse {
	posts: {
		nodes: IPost[]
		pageInfo: {
			offsetPagination: {
				hasMore: boolean
				hasPrevious: boolean
				total: number
			}
		}
	}
}

function getPostsQuery(page: number, size: number) {
	const offset = page > 1 ? (page - 1) * size : 0
	const query = `where: {offsetPagination: {size: ${size}, offset: ${offset}}}`

	return gql`
		query getPosts {
			posts(${query}) {
				nodes {
					${postAttributes}
				}
				pageInfo {
					offsetPagination {
						hasMore
						hasPrevious
						total
					}
				}
			}
		}
	`
}

export const getPosts = unstable_cache(
	async (page: number, size: number) => {
		try {
			const data = await client.query<IPostsResponse>({
				query: getPostsQuery(page, size),
			})

			if (
				!data ||
				!data.data ||
				!data.data.posts ||
				!data.data.posts.nodes ||
				!data.data.posts.pageInfo
			) {
				return null
			}

			return data.data.posts
		} catch (err) {
			console.error('Error fetching posts', err)
			return null
		}
	},
	['posts'],
	{ revalidate: 600, tags: ['posts'] } // 10 minutes
)
