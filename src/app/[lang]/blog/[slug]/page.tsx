import { getPost } from '@/_graphql/posts/getPost'
import { NextPage } from 'next'

interface IParams {
	lang: string
	slug: string
}

export const generateMetadata = ({ params }: { params: IParams }) => {
	const { slug } = params

	return {
		title: `Článek ${slug}`,
		description: 'description',
	}
}

const Post: NextPage<{ params: IParams }> = async ({ params }) => {
	const { slug } = params

	const post = await getPost(slug)

	return (
		<div className='pt-28'>
			<section className='container'>
				{post && (
					<article>
						<h1>{post.title}</h1>
					</article>
				)}
			</section>
		</div>
	)
}

export default Post
