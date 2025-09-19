'use client'

import { IInstagramPost } from '@/_axios/instagram/instagram.interface'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import './embla.css'

interface IProps {
	loading: boolean
	instagramPosts: IInstagramPost[]
}

const InstagramCarousel: React.FC<{
	loading: boolean
	instagramPosts: IInstagramPost[]
}> = ({ loading, instagramPosts }) => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
		},
		[Autoplay()]
	)

	return (
		<div className='w-full overflow-hidden'>
			<div ref={emblaRef} className='embla instagram w-full'>
				<ul className='embla__container w-full flex mt-4'>
					{loading
						? Array.from(Array(8).keys()).map((i) => (
								<li
									key={i}
									className='embla__slide instagram p-1'
								>
									<div className='w-full aspect-square bg-goldenAccent/10' />
								</li>
						  ))
						: instagramPosts.map((post) => (
								<li
									key={post.id}
									className='embla__slide instagram p-1'
								>
									<Link
										aria-label='Instagram image link'
										href={post.permalink}
										target='_blank'
									>
										<figure>
											<Image
												key={post.id}
												src={post.media_url}
												title={post.caption}
												alt={
													post.caption.length > 20
														? `${post.caption.slice(
																0,
																20
														  )}...`
														: post.caption
												}
												width={300}
												height={300}
												className='w-full aspect-square object-cover object-center bg-goldenAccent/10'
											/>
											<figcaption
												aria-hidden
												className='hidden'
											>
												{post.caption}
											</figcaption>
										</figure>
									</Link>
								</li>
						  ))}
				</ul>
			</div>
		</div>
	)
}

export default InstagramCarousel
