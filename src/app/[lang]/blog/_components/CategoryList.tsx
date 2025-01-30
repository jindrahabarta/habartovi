import { ICategory } from '@/_graphql/categories/category.interface'
import Link from 'next/link'
import React from 'react'
import CategoryLink from './CategoryLink'

const CategoryList: React.FC<{
	lang: string
	categories: ICategory[]
}> = ({ lang, categories }) => {
	return (
		<ul className='flex flex-col gap-2 mt-4'>
			<li>
				<Link href={`/blog`}>
					<h3 className='font-oswald text-2xl leading-tight text-golden/60'>
						Všechny články
					</h3>
				</Link>
			</li>
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
