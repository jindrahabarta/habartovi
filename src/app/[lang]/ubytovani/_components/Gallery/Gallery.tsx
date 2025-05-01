'use client'

import React, { useState } from 'react'
import { StaticImageData } from 'next/image'
import GalleryImage from './GalleryImage'
import Overlay from './Overlay'

const Gallery: React.FC<{ images: StaticImageData[] }> = ({ images }) => {
	const [activeImage, setActiveImage] = useState<StaticImageData | null>(null)

	const handleImageClick = (index: number) => {
		document.body.style.overflow = 'hidden'
		const image = images[index]
		if (!image) return
		setActiveImage(image)
	}

	const handleClose = () => {
		document.body.style.overflow = 'auto'
		setActiveImage(null)
	}

	const handlePreviousClick = () => {
		if (!activeImage) return
		const currentIndex = images.findIndex((image) => image === activeImage)
		if (currentIndex <= 0) {
			setActiveImage(images[images.length - 1])
		} else {
			setActiveImage(images[currentIndex - 1])
		}
	}

	const handleNextClick = () => {
		if (!activeImage) return
		const currentIndex = images.findIndex((image) => image === activeImage)
		if (currentIndex >= images.length - 1) {
			setActiveImage(images[0])
		} else {
			setActiveImage(images[currentIndex + 1])
		}
	}

	return (
		<>
			<Overlay
				activeImage={activeImage}
				onClose={handleClose}
				onPrevClick={handlePreviousClick}
				onNextClick={handleNextClick}
			/>

			<ul className='py-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2'>
				{images.map((image, index) => (
					<GalleryImage
						key={index.toString()}
						index={index}
						image={image}
						onClick={handleImageClick}
					/>
				))}
			</ul>
		</>
	)
}

export default Gallery
