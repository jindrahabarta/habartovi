import { unstable_cache } from 'next/cache'
import { client } from '@/_graphql/apollo'
import { gql } from '@apollo/client'
import { INode } from '@/_types/graphql'

interface IPostsResponse {
	posts: {
		edges: INode<{ title: string; content: string }>[]
	}
}

function getPostsQuery() {
	return gql`
		query getPosts {
			posts {
				edges {
					node {
						title
						content
					}
				}
			}
		}
	`
}

export const getPosts = unstable_cache(
	async () => {
		try {
			const data = await client.query<IPostsResponse>({
				query: getPostsQuery(),
			})
			if (
				!data ||
				!data.data ||
				!data.data.posts ||
				!data.data.posts.edges
			) {
				return null
			}

			return data.data.posts.edges
		} catch (err) {
			console.error('Error fetching posts', err)
			return null
		}
	},
	['posts'],
	{ revalidate: 3600, tags: ['posts'] }
)
