import { ICategory } from '@/_graphql/categories/category.interface'
import Link from 'next/link'

import React from 'react'

const CategoryLink: React.FC<{
	lang: string
	category: ICategory
	selected: boolean
}> = ({ lang, category, selected }) => {
	return (
		<li>
			<Link href={`/${lang}/blog/rubriky/${category.slug}`}>
				<h3
					className={`font-oswald text-2xl leading-tight ${
						selected ? 'text-secondary underline' : 'text-golden/60'
					}`}
				>
					{category.name}
				</h3>
			</Link>
		</li>
	)
}

export default CategoryLink
