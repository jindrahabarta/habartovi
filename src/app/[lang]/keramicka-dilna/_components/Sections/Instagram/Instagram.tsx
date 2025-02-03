import { getIGPosts } from '@/_axios/instagram/getIGPosts'
import InstagramCarousel from '@/app/_components/Carousel/InstagramCarousel'
import React from 'react'

const Instagram = async () => {
	const instagramPosts = await getIGPosts()

	return (
		<section className='py-10 md:py-20 container'>
			<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
				Instagram
			</h2>
			{instagramPosts && (
				<InstagramCarousel instagramPosts={instagramPosts} />
			)}
		</section>
	)
}

export default Instagram
