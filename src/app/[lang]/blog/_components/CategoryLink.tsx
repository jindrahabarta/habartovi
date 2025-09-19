import { ICategory } from '@/_graphql/categories/category.interface'
import Link from 'next/link'

import React from 'react'

const CategoryLink: React.FC<{
	lang: string
	category: ICategory
	selected: boolean
}> = ({ lang, category, selected }) => {
	return (
		<li className='blogCategoryLink opacity-0'>
			<Link
				aria-label={`Blog category ${category}`}
				href={`/${lang}/blog/rubriky/${category.slug}`}
			>
				<h3
					className={`font-oswald text-2xl leading-tight ${
						selected
							? 'text-secondary underline'
							: 'text-golden opacity-60 duration-300 hover:opacity-100 hover:text-goldenAccent'
					}`}
				>
					{category.name}
				</h3>
			</Link>
		</li>
	)
}

export default CategoryLink
