import { gql } from '@apollo/client'
import { IPost, postAttributes } from '../posts/post.interface'
import { categoryAttributes, ICategory } from './category.interface'
import { unstable_cache } from 'next/cache'
import { client } from '../apollo'

export interface ICategoryResponse {
	category: ICategory & {
		posts: {
			nodes: IPost[]
		}
	}
}

function getCategoryQuery(slug: string) {
	return gql`
		query getCategory {
			category( id: "${slug}", idType: SLUG ) {
				${categoryAttributes}
				posts {
					nodes {
						${postAttributes}
					}
				}
			}
		}
    `
}

export const getCategory = unstable_cache(
	async (slug: string) => {
		try {
			const data = await client.query<ICategoryResponse>({
				query: getCategoryQuery(slug),
			})
			if (!data || !data.data || !data.data.category) {
				return null
			}

			return data.data.category
		} catch (err) {
			console.error('Error fetching posts', err)
			return null
		}
	},
	['category'],
	{ revalidate: 600, tags: ['category'] }
)
