'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import ImgSample from '@/../public/images/Ubytování.jpg'
import ImgSample2 from '@/../public/images/testimg.jpg'
import Autoplay from 'embla-carousel-autoplay'
import './embla.css'

const Carousel = () => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
		},
		[Autoplay()]
	)

	return (
		<section>
			<div
				className='embla overflow-hidden h-[380px] w-full'
				ref={emblaRef}
			>
				<div className='embla__container w-full h-full flex'>
					<div className='embla__slide w-60'>
						<Image
							src={ImgSample2}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide w-96'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide w-36'>
						<Image
							src={ImgSample2}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Carousel
