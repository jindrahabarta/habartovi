'use client'

import React, { useEffect } from 'react'
import { IPostsResponse } from '@/_graphql/posts/getPosts'
import BlogCard from './BlogCard'
import { animateBlogCards } from '@/_animations/blogAnimations'

const BlogList: React.FC<{
	lang: string
	posts: IPostsResponse['posts']['nodes']
}> = ({ lang, posts }) => {
	useEffect(() => {
		if (posts.length > 0) animateBlogCards()
	}, [posts])

	return (
		<ul className='flex-1 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
			{posts.map((post) => (
				<BlogCard key={post.id} lang={lang} post={post} />
			))}
		</ul>
	)
}

export default BlogList
