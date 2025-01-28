import { IPostsResponse } from '@/_graphql/posts/getPosts'
import React from 'react'
import Link from 'next/link'
import BlogCard from './BlogCard'

const BlogList: React.FC<{
	lang: string
	posts: IPostsResponse['posts']['nodes']
}> = ({ lang, posts }) => {
	return (
		<ul className='flex-1 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
			{posts.map((post) => (
				<BlogCard key={post.id} lang={lang} post={post} />
			))}
		</ul>
	)
}

export default BlogList
