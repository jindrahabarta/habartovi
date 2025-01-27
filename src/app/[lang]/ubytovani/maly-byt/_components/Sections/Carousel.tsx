'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import ImgSample from '@/../public/images/Ubytování.jpg'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
	return (
		<section>
			<div className='embla overflow-hidden w-full' ref={emblaRef}>
				<div className='embla__container w-full flex '>
					<div className='embla__slide flex-[0 0 50%]'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide flex-[0 0 50%]'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide flex-[0 0 50%]'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide flex-[0 0 50%]'>
						<Image
							src={ImgSample}
							width={1000}
							height={800}
							alt='CarouselImage'
							className='w-full h-full object-cover'
						></Image>
					</div>
					<div className='embla__slide flex-[0 0 50%]'>
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
