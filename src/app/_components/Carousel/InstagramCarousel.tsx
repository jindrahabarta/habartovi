'use client'

import { IInstagramPost } from '@/_axios/instagram/instagram.interface'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import './embla.css'

const InstagramCarousel: React.FC<{ instagramPosts: IInstagramPost[] }> = ({
	instagramPosts,
}) => {
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
					{instagramPosts &&
						instagramPosts.map((post) => (
							<li
								key={post.id}
								className='embla__slide instagram p-1'
							>
								<Link href={post.permalink} target='_blank'>
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
										width={240}
										height={240}
										onLoad={() => console.log('loaded')}
										className='w-full aspect-square object-cover object-center'
									/>
								</Link>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}

export default InstagramCarousel
