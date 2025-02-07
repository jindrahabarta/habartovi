'use client'

import { getInstagramHabartoviPosts } from '@/_axios/instagram/getInstagramPosts'
import InstagramCarousel from '@/app/_components/Carousel/InstagramCarousel'
import Button from '../Buttons/Button'
import { useEffect, useState } from 'react'
import { nextClient } from '@/_axios/axios'
import { IInstagramPost } from '@/_axios/instagram/instagram.interface'

const InstagramHabartovi = () => {
	const [instagramPosts, setInstagramPosts] = useState<IInstagramPost[]>([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		setError(false)

		nextClient
			.get<IInstagramPost[]>(`/instagram/habartovi`)
			.then((res) => setInstagramPosts(res.data))
			.catch(() => setError(true))
			.finally(() => {
				setLoading(false)
			})
	}, [])

	if (error) return null

	return (
		<div className='bg-background rounded-t-2xl sticky top-10'>
			<section className='py-20 container'>
				<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
					Instagram
				</h2>
				<InstagramCarousel
					loading={loading}
					instagramPosts={instagramPosts}
				/>
				<div className='flex justify-center'>
					<Button
						className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
						link={'https://www.instagram.com/ubytovani_habartovi/'}
						target='_blank'
						text={'Sledujte nás'}
					></Button>
				</div>
			</section>
		</div>
	)
}

export default InstagramHabartovi
