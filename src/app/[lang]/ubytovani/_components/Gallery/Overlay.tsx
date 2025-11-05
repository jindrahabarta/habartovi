import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

const Overlay: React.FC<{
	activeImage: StaticImageData | null
	onClose: () => void
	onNextClick: () => void
	onPrevClick: () => void
}> = ({ activeImage, onClose, onNextClick, onPrevClick }) => {
	return (
		<div
			className={`fixed z-[999] flex flex-col items-center justify-center gap-4 inset-0 bg-black ${
				activeImage
					? 'bg-opacity-75'
					: 'bg-opacity-0 pointer-events-none invisible'
			} duration-300`}
		>
			<button
				type='button'
				className='absolute top-5 right-5 w-10 aspect-square flex items-center justify-center rounded-lg text-white bg-black bg-opacity-0 hover:bg-opacity-25 duration-300'
				aria-label='Close'
				onClick={onClose}
			>
				<FiX className='text-3xl' />
			</button>

			{activeImage && (
				<Image
					src={activeImage.src}
					width={activeImage.width}
					height={activeImage.height}
					alt={'Obrázek galerie'}
					className='max-w-[90%] max-h-[90%] object-contain'
				/>
			)}

			<div className='flex gap-4'>
				<button
					type='button'
					aria-label='Previous'
					onClick={onPrevClick}
					className='w-10 pr-0.5 aspect-square flex justify-center items-center rounded-lg text-white bg-black bg-opacity-0 hover:bg-opacity-25 duration-300'
				>
					<FiChevronLeft className='text-3xl' />
				</button>
				<button
					type='button'
					aria-label='Next'
					onClick={onNextClick}
					className='w-10 pl-0.5 aspect-square flex justify-center items-center rounded-lg text-white bg-black bg-opacity-0 hover:bg-opacity-25 duration-300'
				>
					<FiChevronRight className='text-3xl' />
				</button>
			</div>
		</div>
	)
}

export default Overlay
