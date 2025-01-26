import { getPosts } from '@/_graphql/queries/getPosts'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Stránka',
}

const Blog = async () => {
	const posts = await getPosts()

	return (
		<div className='pt-20'>
			<section className='container'>
				<h1>Blog</h1>
				{posts &&
					posts.map((post, index) => (
						<h2 key={index}>{post.node.title}</h2>
					))}
			</section>
		</div>
	)
}

export default Blog
