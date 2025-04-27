import { gql } from '@apollo/client'
import { IPost, postAttributes } from '../posts/post.interface'
import { categoryAttributes, ICategory } from './category.interface'
import { wpClient } from '../apollo'

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

export const getCategory = async (slug: string) => {
	try {
		const data = await wpClient.query<ICategoryResponse>({
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
}
