import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface props {
	title: string
	text: string
	image: StaticImageData
	link: string
	className?: string
	btnText: string
}

const ApartmentCard = ({
	title,
	text,
	image,
	link,
	className,
	btnText,
}: props) => {
	return (
		<div
			className={`bg-green1 rounded-xl overflow-hidden shadow-md flex-1 group ${className}`}
		>
			<Link
				aria-label={`Apartment link ${title}`}
				href={link}
				className='overflow-hidden aspect-video'
			>
				<Image
					src={image}
					width={800}
					height={600}
					alt={'Výběr apartmánu'}
					className='group-hover:scale-105 duration-300'
				></Image>
			</Link>

			<div className='p-8'>
				<div className='w-fit flex flex-col'>
					<h2 className='font-oswald text-golden duration-300'>
						{title}
					</h2>
				</div>
				<p className='text-white mt-4'>{text}</p>
				<div className='flex justify-end mt-6'>
					<Link
						href={link}
						aria-label='Apartment card button'
						className='bg-golden w-full sm:w-fit text-white hover:text-golden border-golden border-2 text-center sm:hover:bg-transparent py-3 px-4 sm:py-4 sm:px-8 inline-block font-bold duration-200 shadow-md'
					>
						{btnText}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ApartmentCard
