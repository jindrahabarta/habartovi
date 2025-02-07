import { getPost } from '@/_graphql/posts/getPost'
import { NextPage } from 'next'
import './wp-blog-content.css'
import moment from 'moment'
import BackLink from '../_components/BackLink'

interface IParams {
	lang: string
	slug: string
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
	const { slug } = params
	const post = await getPost(slug)

	return {
		title: `Článek: ${post?.title}`,
	}
}

const Post: NextPage<{ params: IParams }> = async ({ params }) => {
	const { slug } = params

	const post = await getPost(slug)

	return (
		<div className='pt-28'>
			<section className='container flex flex-col items-center'>
				{post && (
					<article
						id='blogArticle'
						className='max-w-[70ch] opacity-0 translate-y-32'
					>
						<BackLink></BackLink>
						<h1 className='font-oswald sm:text-5xl leading-tight text-golden/60 mt-4'>
							{post.title}
						</h1>
						<time className='text-gray-400 italic text-sm'>
							{moment(post.date).format('DD. MM. YYYY')}
						</time>
						{post.blog.introduction && (
							<p className='indent-4 text-justify mt-2'>
								{post.blog.introduction}
							</p>
						)}
						<div
							id='wp-blog-content'
							dangerouslySetInnerHTML={{
								__html: post.content,
							}}
						/>
					</article>
				)}
			</section>
		</div>
	)
}

export default Post
