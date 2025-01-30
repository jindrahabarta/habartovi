import React from 'react'
import Link from 'next/link'
import { IPostsResponse } from '@/_graphql/posts/getPosts'
import PageLink from '@/app/_components/Pagination/PageLink'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Pagination: React.FC<{
	lang: string
	page: number
	size: number
	pageInfo: IPostsResponse['posts']['pageInfo']
}> = ({ lang, page, size, pageInfo }) => {
	const { hasMore, hasPrevious, total } = pageInfo.offsetPagination
	const totalPages = Math.ceil(total / size)

	return (
		<div className='flex items-center justify-center gap-3'>
			{hasPrevious && (
				<PageLink href={`/${lang}/blog?page=${page - 1}`}>
					<FiChevronLeft />
				</PageLink>
			)}

			<span className='flex gap-1'>
				{page > 3 && (
					<PageLink href={`/${lang}/blog?page=1`}>1</PageLink>
				)}
				{page > 4 && <span>...</span>}
				{page - 2 > 0 && (
					<PageLink href={`/${lang}/blog?page=${page - 2}`}>
						{page - 2}
					</PageLink>
				)}
				{page - 1 > 0 && (
					<PageLink href={`/${lang}/blog?page=${page - 1}`}>
						{page - 1}
					</PageLink>
				)}
				<PageLink href={`/${lang}/blog?page=${page}`} active>
					{page}
				</PageLink>
				{page + 1 <= totalPages && (
					<PageLink href={`/${lang}/blog?page=${page + 1}`}>
						{page + 1}
					</PageLink>
				)}
				{page + 2 <= totalPages && (
					<PageLink href={`/${lang}/blog?page=${page + 2}`}>
						{page + 2}
					</PageLink>
				)}
				{page < totalPages - 3 && <span>...</span>}
				{page < totalPages - 2 && (
					<PageLink href={`/${lang}/blog?page=${totalPages}`}>
						{totalPages}
					</PageLink>
				)}
			</span>

			{hasMore && (
				<PageLink href={`/${lang}/blog?page=${page + 1}`}>
					<FiChevronRight />
				</PageLink>
			)}
		</div>
	)
}

export default Pagination
