import { IPostsResponse } from '@/_graphql/posts/getPosts'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import PageLink from './PageLink'

const Pagination: React.FC<{
	baseUrl: string
	page: number
	size: number
	setPage: (page: number) => void
	pageInfo: IPostsResponse['posts']['pageInfo']
}> = ({ baseUrl, page, size, setPage, pageInfo }) => {
	const { hasMore, hasPrevious, total } = pageInfo.offsetPagination
	const totalPages = Math.ceil(total / size)

	if (pageInfo.offsetPagination.total <= size) return null

	return (
		<div className='flex items-center justify-center gap-1'>
			{hasPrevious && (
				<PageLink
					page={page - 1}
					setPage={setPage}
					href={`${baseUrl}?page=${page - 1}`}
				>
					<FiChevronLeft />
				</PageLink>
			)}

			<span className='flex gap-1'>
				{page > 2 && (
					<PageLink
						page={1}
						setPage={setPage}
						href={`${baseUrl}?page=1`}
					>
						1
					</PageLink>
				)}
				{page > 3 && (
					<span className='w-8 h-8 flex justify-center items-center font-oswald'>
						...
					</span>
				)}

				{page - 1 > 0 && (
					<PageLink
						page={page - 1}
						setPage={setPage}
						href={`${baseUrl}?page=${page - 1}`}
					>
						{page - 1}
					</PageLink>
				)}
				<PageLink
					page={page}
					setPage={setPage}
					href={`${baseUrl}?page=${page}`}
					active
				>
					{page}
				</PageLink>
				{page + 1 <= totalPages && (
					<PageLink
						page={page + 1}
						setPage={setPage}
						href={`${baseUrl}?page=${page + 1}`}
					>
						{page + 1}
					</PageLink>
				)}

				{page < totalPages - 2 && (
					<span className='w-8 h-8 flex justify-center items-center font-oswald'>
						...
					</span>
				)}
				{page < totalPages - 1 && (
					<PageLink
						page={totalPages}
						setPage={setPage}
						href={`${baseUrl}?page=${totalPages}`}
					>
						{totalPages}
					</PageLink>
				)}
			</span>

			{hasMore && (
				<PageLink
					page={page + 1}
					setPage={setPage}
					href={`${baseUrl}?page=${page + 1}`}
				>
					<FiChevronRight />
				</PageLink>
			)}
		</div>
	)
}

export default Pagination
