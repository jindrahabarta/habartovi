import { getCategories } from '@/_graphql/categories/getCategories'
import { Metadata, NextPage } from 'next'
import CategoryList from './_components/CategoryList'

interface IParams {
	lang: string
}

export const metadata: Metadata = {
	title: 'Rubriky blogu',
	description: 'description',
}

const Categories: NextPage<{ params: IParams }> = async ({ params }) => {
	const { lang } = params

	const categories = await getCategories()

	return (
		<div className='pt-28'>
			<section className='container'>
				<h1>Rubriky blogu</h1>
				{categories && (
					<CategoryList lang={lang} categories={categories.nodes} />
				)}
			</section>
		</div>
	)
}

export default Categories
