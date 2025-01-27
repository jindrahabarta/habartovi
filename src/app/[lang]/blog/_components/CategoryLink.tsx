import { ICategory } from '@/_graphql/categories/category.interface'
import Link from 'next/link'
import React from 'react'

const CategoryLink: React.FC<{
	lang: string
	category: ICategory
}> = ({ lang, category }) => {
	return (
		<li>
			<Link href={`/${lang}/rubriky-blogu/${category.slug}`}>
				{category.name}
			</Link>
		</li>
	)
}

export default CategoryLink
