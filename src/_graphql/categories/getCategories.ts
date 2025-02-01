import { gql } from '@apollo/client'
import { categoryAttributes, ICategory } from './category.interface'
import { unstable_cache } from 'next/cache'
import { wpClient } from '../apollo'

interface ICategoryResponse {
	categories: {
		nodes: ICategory[]
	}
}

const categoriesQuery = gql`
	query getCategories {
		categories(where: { exclude: "dGVybTox" }) {
			nodes {
				${categoryAttributes}
			}
		}
	}
`

export const getCategories = unstable_cache(
	async () => {
		try {
			const data = await wpClient.query<ICategoryResponse>({
				query: categoriesQuery,
			})

			if (
				!data ||
				!data.data ||
				!data.data.categories ||
				!data.data.categories.nodes
			) {
				return null
			}

			return data.data.categories
		} catch (err) {
			console.error('Error fetching categories', err)
			return null
		}
	},
	['categories'],
	{ revalidate: 600, tags: ['categories'] }
)
