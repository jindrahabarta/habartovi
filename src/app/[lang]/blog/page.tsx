import { Metadata, NextPage } from 'next'
import Blog from './_components/Blog'

interface IParams {
	lang: string
}

interface IQuery {
	page?: string
}

export const metadata: Metadata = {
	title: 'Blog',
	description:
		'Zvu Tě k četbě mých pokusů o odhalení mého srdce. Co na srdci, to na jazyku. Bez přetvářky, klamu, studu. Čti to, co Tě zajímá.',
}

const BlogPage: NextPage<{ params: IParams; searchParams: IQuery }> = async ({
	params,
	searchParams,
}) => {
	const { lang } = params
	const { page } = searchParams

	const pageInt = parseInt(page ?? '1', 10)

	return (
		<div className='flex-1 flex flex-col pt-32'>
			<section className='container flex-1 flex flex-col lg:flex-row-reverse gap-4'>
				<main className='flex-1 flex flex-col pb-8 gap-4'>
					<h1 className='font-oswald text-[4rem] sm:text-[5rem] leading-tight text-golden/60'>
						Blog
					</h1>
					<Blog lang={lang} defaultPage={pageInt} />
				</main>
			</section>
		</div>
	)
}

export default BlogPage
