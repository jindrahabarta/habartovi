import { gql } from '@apollo/client'
import { categoryAttributes, ICategory } from './category.interface'
import { wpClient } from '../apollo'

interface ICategoriesResponse {
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

export const getCategories = async () => {
	try {
		const data = await wpClient.query<ICategoriesResponse>({
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
}
