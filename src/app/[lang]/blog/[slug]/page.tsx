import { getPost } from '@/_graphql/posts/getPost'
import { NextPage } from 'next'

interface IParams {
	lang: string
	slug: string
}

export const generateMetadata = ({ params }: { params: IParams }) => {
	const { slug } = params

	return {
		title: `Post ${slug}`,
		description: 'description',
	}
}

const Post: NextPage<{ params: IParams }> = async ({ params }) => {
	const { slug } = params
	const post = await getPost(slug)

	return (
		<div className='pt-20'>
			<section className='container'>
				{post && (
					<article>
						<h1>{post.title}</h1>
						<p>{post.content}</p>
					</article>
				)}
			</section>
		</div>
	)
}

export default Post
