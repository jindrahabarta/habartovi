import { NextPage } from 'next'
import CategoryBlog from './_components/CategoryBlog'

interface IParams {
	lang: string
	slug: string
}

export const generateMetadata = ({ params }: { params: IParams }) => {
	const { slug } = params

	return {
		title: `Kategorie ${slug}`,
		description: 'description',
	}
}

const Category: NextPage<{ params: IParams }> = async ({ params }) => {
	const { lang, slug } = params

	return (
		<div className='flex flex-col pt-32'>
			<section className='container flex-1 flex flex-col lg:flex-row-reverse gap-4'>
				<main className='flex-1 flex flex-col pb-8 gap-4'>
					<CategoryBlog lang={lang} slug={slug} />
				</main>
			</section>
		</div>
	)
}

export default Category
