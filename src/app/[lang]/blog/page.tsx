import { getPosts } from '@/_graphql/posts/getPosts'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'

interface IParams {
	lang: string
}

interface IQuery {
	prev: string
	next: string
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
	const { prev, next } = searchParams

	const posts = await getPosts(prev, next)

	return (
		<div className='pt-20'>
			<section className='container'>
				<h1>Blog</h1>
				{posts &&
					posts.edges.map(({ node: post }) => (
						<article key={post.id}>
							<Link href={`/${lang}/blog/${post.slug}`}>
								<h2>{post.title}</h2>
							</Link>
						</article>
					))}
				<div className='flex items-center justify-between'>
					<section>
						{posts && posts.pageInfo.hasPreviousPage && (
							<Link
								href={{
									pathname: `/${lang}/blog`,
									query: { prev: posts.pageInfo.startCursor },
								}}
							>
								&lt; Prev
							</Link>
						)}
					</section>
					<section>
						{posts && posts.pageInfo.hasNextPage && (
							<Link
								href={{
									pathname: `/${lang}/blog`,
									query: { next: posts.pageInfo.endCursor },
								}}
							>
								Next &gt;
							</Link>
						)}
					</section>
				</div>
			</section>
		</div>
	)
}

export default Blog
