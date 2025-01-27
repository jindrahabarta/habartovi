import { getPosts } from '@/_graphql/posts/getPosts'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import Pagination from './_components/Pagination'
import PostList from './_components/PostList'
import { getCategories } from '@/_graphql/categories/getCategories'
import CategoryList from './_components/CategoryList'

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
	const size = 6

	const posts = await getPosts(pageInt, size)
	const categories = await getCategories()

	return (
		<div className='flex-1 flex flex-col pt-28'>
			<section className='container flex-1 flex flex-col md:flex-row-reverse'>
				<aside className='bg-red'>
					<h2>Rubriky blogu</h2>
					{categories && (
						<CategoryList
							lang={lang}
							categories={categories.nodes}
						/>
					)}
				</aside>
				<main className='flex-1 flex flex-col pb-12'>
					<h1>Blog</h1>
					{posts && (
						<div className='flex-1 flex flex-col'>
							<PostList lang={lang} posts={posts.nodes} />

							<Pagination
								lang={lang}
								page={pageInt}
								size={size}
								pageInfo={posts.pageInfo}
							/>
						</div>
					)}
				</main>
			</section>
		</div>
	)
}

export default Blog
