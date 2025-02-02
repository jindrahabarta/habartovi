'use client'

import React, { useEffect, useState } from 'react'
import { ICategory } from '@/_graphql/categories/category.interface'
import CategoryList from './CategoryList'
import { nextClient } from '@/_axios/axios'

interface IParams {
	lang: string
}

const CategoryAside: React.FC<IParams> = ({ lang }) => {
	const [categoryData, setCategoryData] = useState<ICategory[]>([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		nextClient
			.get<ICategory[]>(`/category`)
			.then((res) => setCategoryData(res.data))
			.catch(() => setError(true))
			.finally(() => setLoading(false))
	}, [])

	return (
		<aside className='w-full md:max-w-64  lg:max-w-72 self-start border border-black/10 shadow-md p-4'>
			<h2 className='font-oswald otext-4xl leading-tight text-golden/60'>
				Rubriky blogu
			</h2>

			<CategoryList lang={lang} categories={categoryData} />
		</aside>
	)
}

export default CategoryAside
