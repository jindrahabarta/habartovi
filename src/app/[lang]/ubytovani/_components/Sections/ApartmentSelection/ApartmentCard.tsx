import React from 'react'
import Image, { StaticImageData } from 'next/image'

import Link from 'next/link'

interface props {
	title: string
	text: string
	image: StaticImageData
	link: string
	className?: string
}

const ApartmentCard = ({ title, text, image, link, className }: props) => {
	return (
		<Link
			href={link}
			className={`bg-green1 rounded-xl overflow-hidden shadow-md flex-1 group ${className}`}
		>
			<div className='overflow-hidden'>
				<Image
					src={image}
					width={800}
					height={600}
					alt={'Výběr apartmánu'}
					className='group-hover:scale-105 duration-300'
				></Image>
			</div>

			<div className='p-8'>
				<div className='w-fit flex flex-col'>
					<h2 className='font-oswald leading-[0.5rem] text-golden duration-300 px-0 group-hover:px-2'>
						{title}
					</h2>
					<span className='bg-golden h-[0.2rem] duration-300 w-0 group-hover:w-full'></span>
				</div>
				<p className='text-white mt-4'>{text}</p>
			</div>
		</Link>
	)
}

export default ApartmentCard
