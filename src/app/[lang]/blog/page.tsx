import { getPosts } from '@/_graphql/posts/getPosts'
import { Metadata, NextPage } from 'next'
import BlogList from './_components/BlogList'
import { getCategories } from '@/_graphql/categories/getCategories'
import CategoryAside from './_components/CategoryAside'
import Pagination from '@/_components/Pagination/Pagination'

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
		<div className='flex-1 flex flex-col pt-32'>
			<section className='container flex-1 flex flex-col lg:flex-row-reverse gap-4'>
				<main className='flex-1 flex flex-col pb-8 gap-4'>
					<h1 className='font-oswald text-[4rem] sm:text-[5rem] leading-tight text-golden/60'>
						Blog
					</h1>
					<div className='flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
						{posts && (
							<div className='flex-1 flex flex-col gap-8'>
								<BlogList lang={lang} posts={posts.nodes} />

								<Pagination
									baseUrl={`/${lang}/blog`}
									page={pageInt}
									size={size}
									pageInfo={posts.pageInfo}
								/>
							</div>
						)}
						{categories && (
							<CategoryAside
								lang={lang}
								categories={categories.nodes}
							/>
						)}
					</div>
				</main>
			</section>
		</div>
	)
}

export default Blog
