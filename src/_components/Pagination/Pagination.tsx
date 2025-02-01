import { IPostsResponse } from '@/_graphql/posts/getPosts'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import PageLink from './PageLink'

const Pagination: React.FC<{
	baseUrl: string
	page: number
	size: number
	pageInfo: IPostsResponse['posts']['pageInfo']
}> = ({ baseUrl, page, size, pageInfo }) => {
	const { hasMore, hasPrevious, total } = pageInfo.offsetPagination
	const totalPages = Math.ceil(total / size)

	return (
		<div className='flex items-center justify-center gap-3'>
			{hasPrevious && (
				<PageLink href={`${baseUrl}?page=${page - 1}`}>
					<FiChevronLeft />
				</PageLink>
			)}

			<span className='flex gap-1'>
				{page > 3 && <PageLink href={`${baseUrl}?page=1`}>1</PageLink>}
				{page > 4 && <span>...</span>}
				{page - 2 > 0 && (
					<PageLink href={`${baseUrl}?page=${page - 2}`}>
						{page - 2}
					</PageLink>
				)}
				{page - 1 > 0 && (
					<PageLink href={`${baseUrl}?page=${page - 1}`}>
						{page - 1}
					</PageLink>
				)}
				<PageLink href={`${baseUrl}?page=${page}`} active>
					{page}
				</PageLink>
				{page + 1 <= totalPages && (
					<PageLink href={`${baseUrl}?page=${page + 1}`}>
						{page + 1}
					</PageLink>
				)}
				{page + 2 <= totalPages && (
					<PageLink href={`${baseUrl}?page=${page + 2}`}>
						{page + 2}
					</PageLink>
				)}
				{page < totalPages - 3 && <span>...</span>}
				{page < totalPages - 2 && (
					<PageLink href={`${baseUrl}?page=${totalPages}`}>
						{totalPages}
					</PageLink>
				)}
			</span>

			{hasMore && (
				<PageLink href={`${baseUrl}?page=${page + 1}`}>
					<FiChevronRight />
				</PageLink>
			)}
		</div>
	)
}

export default Pagination
