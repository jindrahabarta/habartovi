import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Stránka',
}

const Blog = () => {
	return (
		<div className='pt-20'>
			<section className='container'>
				<h1>Blog</h1>
			</section>
		</div>
	)
}

export default Blog
