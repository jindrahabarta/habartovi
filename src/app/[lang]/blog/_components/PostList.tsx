import { IPostsResponse } from '@/_graphql/posts/getPosts'
import React from 'react'
import Link from 'next/link'

const PostList: React.FC<{
	lang: string
	posts: IPostsResponse['posts']['nodes']
}> = ({ lang, posts }) => {
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>
					<article>
						<Link href={`/${lang}/blog/${post.slug}`}>
							<h2>{post.title}</h2>
						</Link>
					</article>
				</li>
			))}
		</ul>
	)
}

export default PostList
