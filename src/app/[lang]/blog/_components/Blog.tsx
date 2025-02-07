'use client'

import { nextClient } from '@/_axios/axios'
import { IPostsResponse } from '@/_graphql/posts/getPosts'
import React, { useEffect, useRef, useState } from 'react'
import BlogList from '@/app/[lang]/blog/_components/BlogList'
import CategoryAside from '@/app/[lang]/blog/_components/CategoryAside'
import Pagination from '@/_components/Pagination/Pagination'

interface IParams {
	lang: string
	defaultPage: number
}

const Blog: React.FC<IParams> = ({ lang, defaultPage }) => {
	const [page, setPage] = useState(defaultPage)
	const [size, setSize] = useState(6)
	const [postData, setPostData] = useState<IPostsResponse['posts'] | null>(
		null
	)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		setError(false)

		nextClient
			.get<IPostsResponse['posts'] | null>(
				`/post?page=${page}&size=${size}`
			)
			.then((res) => setPostData(res.data))
			.catch(() => setError(true))
			.finally(() => {
				setLoading(false)
			})
	}, [page, size])

	const handleSetPage = (p: number) => {
		setPage(p)
	}

	return (
		<div className='flex-1 flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
			<div className='flex-1 flex flex-col items-center justify-center gap-8'>
				{loading ? (
					<span className='font-oswald text-xl'>Načítání...</span>
				) : (
					postData && (
						<>
							<BlogList lang={lang} posts={postData.nodes} />

							<Pagination
								baseUrl={`/${lang}/blog`}
								page={page}
								size={size}
								setPage={handleSetPage}
								pageInfo={postData.pageInfo}
							/>
						</>
					)
				)}
			</div>
			<CategoryAside lang={lang} />
		</div>
	)
}

export default Blog
