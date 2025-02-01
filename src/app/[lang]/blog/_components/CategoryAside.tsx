import { ICategory } from '@/_graphql/categories/category.interface'
import React from 'react'
import CategoryList from './CategoryList'

interface IParams {
	lang: string
	categories: ICategory[]
}

const CategoryAside: React.FC<IParams> = ({ lang, categories }) => {
	return (
		<aside className='w-full lg:max-w-72 self-start border border-black/10 shadow-md rounded-lg p-4'>
			<h2 className='font-oswald otext-4xl leading-tight text-golden/60'>
				Rubriky blogu
			</h2>

			<CategoryList lang={lang} categories={categories} />
		</aside>
	)
}

export default CategoryAside
