import React from 'react'
import Link from 'next/link'
import { IPostsResponse } from '@/_graphql/posts/getPosts'

const Pagination: React.FC<{
	lang: string
	page: number
	size: number
	pageInfo: IPostsResponse['posts']['pageInfo']
}> = ({ lang, page, size, pageInfo }) => {
	const { hasMore, hasPrevious, total } = pageInfo.offsetPagination
	const totalPages = Math.ceil(total / size)

	return (
		<div className='flex items-center justify-center gap-4'>
			{hasPrevious && (
				<Link href={`/${lang}/blog?page=${page - 1}`}>&lt;</Link>
			)}

			<span className='flex gap-2'>
				{page > 3 && <Link href={`/${lang}/blog?page=1`}>1</Link>}
				{page > 4 && <span>...</span>}
				{page - 2 > 0 && (
					<Link href={`/${lang}/blog?page=${page - 2}`}>
						{page - 2}
					</Link>
				)}
				{page - 1 > 0 && (
					<Link href={`/${lang}/blog?page=${page - 1}`}>
						{page - 1}
					</Link>
				)}
				<span>{page}</span>
				{page + 1 <= totalPages && (
					<Link href={`/${lang}/blog?page=${page + 1}`}>
						{page + 1}
					</Link>
				)}
				{page + 2 <= totalPages && (
					<Link href={`/${lang}/blog?page=${page + 2}`}>
						{page + 2}
					</Link>
				)}
				{page < totalPages - 3 && <span>...</span>}
				{page < totalPages - 2 && (
					<Link href={`/${lang}/blog?page=${totalPages}`}>
						{totalPages}
					</Link>
				)}
			</span>

			{hasMore && (
				<Link href={`/${lang}/blog?page=${page + 1}`}>&gt;</Link>
			)}
		</div>
	)
}

export default Pagination
