import React from 'react'
import Image, { StaticImageData } from 'next/image'

const GalleryImage: React.FC<{
	index: number
	image: StaticImageData
	onClick: (index: number) => void
}> = ({ index, image, onClick }) => (
	<li key={index.toString()} className='w-full aspect-square'>
		<button
			type='button'
			aria-label='Gallery image'
			onClick={() => onClick(index)}
			className='w-full h-full'
		>
			<Image
				src={image.src}
				alt={`${index + 1}`}
				width={500}
				height={500}
				className='w-full h-full object-cover'
				loading='lazy'
			/>
		</button>
	</li>
)

export default GalleryImage
