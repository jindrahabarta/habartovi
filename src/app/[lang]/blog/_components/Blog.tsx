'use client'

import { nextClient } from '@/_axios/axios'
import { IPostsResponse } from '@/_graphql/posts/getPosts'
import React, { useEffect, useState } from 'react'
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

	const fetchBlogs = async () => {
		setLoading(true)
		setError(false)

		nextClient
			.get<IPostsResponse['posts'] | null>(
				`/posts?page=${page}&size=${size}`
			)
			.then((res) => setPostData(res.data))
			.catch(() => setError(true))
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		fetchBlogs()
	}, [page, size])

	return (
		<div className='flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
			{postData && (
				<div className='flex-1 flex flex-col gap-8'>
					<BlogList lang={lang} posts={postData.nodes} />

					<Pagination
						baseUrl={`/${lang}/blog`}
						page={page}
						size={size}
						pageInfo={postData.pageInfo}
					/>
				</div>
			)}
			<CategoryAside lang={lang} />
		</div>
	)
}

export default Blog
