import { NextPage } from 'next'
import React from 'react'

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

const Post: NextPage<{ params: IParams }> = ({ params }) => {
	const { slug } = params

	return (
		<>
			<div className='pt-20'>
				<section className='container'>
					<h1>Post {slug}</h1>
				</section>
			</div>
		</>
	)
}

export default Post
