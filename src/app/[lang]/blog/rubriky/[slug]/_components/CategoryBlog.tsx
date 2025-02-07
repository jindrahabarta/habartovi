'use client'

import { nextClient } from '@/_axios/axios'
import { ICategoryResponse } from '@/_graphql/categories/getCateogry'
import React, { useEffect, useState } from 'react'
import BlogList from '../../../_components/BlogList'
import CategoryAside from '../../../_components/CategoryAside'
import Link from 'next/link'

interface IParams {
	lang: string
	slug: string
}

const CategoryBlog: React.FC<IParams> = ({ lang, slug }) => {
	const [categoryData, setCategoryData] = useState<
		ICategoryResponse['category'] | null
	>(null)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		nextClient
			.get<ICategoryResponse['category']>(`/category/${slug}`)
			.then((res) => setCategoryData(res.data))
			.catch(() => setError(true))
			.finally(() => {
				setLoading(false)
			})
	}, [slug])

	return (
		<>
			<h1 className='font-oswald opacity-60 text-5xl leading-tight text-golden'>
				<Link
					className='text-golden hover:text-goldenAccent'
					href={'/blog'}
				>
					Blog
				</Link>{' '}
				<span
					className={`${
						!loading && categoryData ? 'opacity-100' : 'opacity-0'
					} duration-200`}
				>
					- {!loading && categoryData ? categoryData.name : ''}
				</span>
			</h1>

			<div className='flex-1 flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
				<div className='flex-1 flex flex-col items-center justify-center gap-8'>
					{loading ? (
						<span className='font-oswald text-xl'>Načítání...</span>
					) : (
						categoryData && (
							<BlogList
								lang={lang}
								posts={categoryData.posts.nodes}
							/>
						)
					)}
				</div>

				<CategoryAside lang={lang} />
			</div>
		</>
	)
}

export default CategoryBlog
