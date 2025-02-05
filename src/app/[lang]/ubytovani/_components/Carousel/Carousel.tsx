'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import './embla.css'

const Carousel = ({ images }: { images: StaticImageData[] }) => {
	const [emblaRef] = useEmblaCarousel(
		{
			loop: true,
		},
		[Autoplay()]
	)

	return (
		<section>
			<div
				className='embla overflow-hidden h-[380px] w-full hover:cursor-grab'
				ref={emblaRef}
			>
				<div className='embla__container w-full h-full flex'>
					{images.map((image, i) => (
						<div key={i} className='embla__slide'>
							<Image
								src={image}
								width={1000}
								height={800}
								alt={`Obrázek apartmánu ${i}`}
								className='w-full h-full object-cover'
							></Image>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Carousel
