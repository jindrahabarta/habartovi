import { getPosts } from '@/_graphql/posts/getPosts'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import Pagination from './_components/Pagination'
import PostList from './_components/PostList'

interface IParams {
	lang: string
}

interface IQuery {
	page?: string
}

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Stránka',
}

const Blog: NextPage<{ params: IParams; searchParams: IQuery }> = async ({
	params,
	searchParams,
}) => {
	const { lang } = params
	const { page } = searchParams

	const pageInt = parseInt(page ?? '1', 10)
	const size = 1

	const posts = await getPosts(pageInt, size)

	return (
		<div className='pt-20'>
			<section className='container'>
				<h1>Blog</h1>
				{posts && (
					<div className='flex flex-col'>
						<PostList lang={lang} posts={posts.nodes} />

						<Pagination
							lang={lang}
							page={pageInt}
							size={size}
							pageInfo={posts.pageInfo}
						/>
					</div>
				)}
			</section>
		</div>
	)
}

export default Blog
