import { IPostsResponse } from '@/_graphql/posts/getPosts'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PostList: React.FC<{
	lang: string
	posts: IPostsResponse['posts']['nodes']
}> = ({ lang, posts }) => {
	return (
		<ul className='flex-1'>
			{posts.map((post) => (
				<li key={post.id}>
					<article>
						<Link href={`/${lang}/blog/${post.slug}`}>
							<h2>{post.title}</h2>

							{post.featuredImage ? (
								<Image
									src={post.featuredImage.node.mediaItemUrl}
									alt={post.title}
									width={512}
									height={512}
								/>
							) : (
								<div></div>
							)}

							{post.blog.introduction && (
								<p>{post.blog.introduction}</p>
							)}
						</Link>
					</article>
				</li>
			))}
		</ul>
	)
}

export default PostList
