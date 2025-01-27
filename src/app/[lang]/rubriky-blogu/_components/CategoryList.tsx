import { ICategory } from '@/_graphql/categories/category.interface'
import Link from 'next/link'
import React from 'react'
import CategoryLink from '../../blog/_components/CategoryLink'

const CategoryList: React.FC<{
	lang: string
	categories: ICategory[]
}> = ({ lang, categories }) => {
	return (
		<ul>
			{categories.map((category) => (
				<CategoryLink
					key={category.id}
					lang={lang}
					category={category}
				/>
			))}
		</ul>
	)
}

export default CategoryList
