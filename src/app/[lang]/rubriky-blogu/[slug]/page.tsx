import { NextPage } from 'next'

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
		<div className='pt-28'>
			<section className='container'>
				<h1>{slug}</h1>
			</section>
		</div>
	)
}

export default Category
