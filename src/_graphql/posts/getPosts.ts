import { unstable_cache } from 'next/cache'
import { client } from '@/_graphql/apollo'
import { gql } from '@apollo/client'
import { IPost, postAttributes } from './post.interface'

interface IPostsResponse {
	posts: {
		edges: {
			node: IPost
		}[]
		pageInfo: {
			startCursor: string
			endCursor: string
			hasPreviousPage: boolean
			hasNextPage: boolean
		}
	}
}

function getPostsQuery(prev?: string, next?: string) {
	let query = '(first: 5)'
	if (prev) {
		query = `(last: 5, before: "${prev}")`
	}
	if (next) {
		query = `(first: 5, after: "${next}")`
	}

	return gql`
		query getPosts {
			posts${query} {
				edges {
					node {
						${postAttributes}
					}
				}
				pageInfo {
					startCursor
					endCursor
					hasPreviousPage
					hasNextPage
				}
			}
		}
	`
}

export const getPosts = unstable_cache(
	async (prev?: string, next?: string) => {
		try {
			const data = await client.query<IPostsResponse>({
				query: getPostsQuery(prev, next),
			})

			if (
				!data ||
				!data.data ||
				!data.data.posts ||
				!data.data.posts.edges ||
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
