import React from 'react'
import Image, { StaticImageData } from 'next/image'

import Link from 'next/link'
import Button from '@/_components/Buttons/Button'

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
			<div className='overflow-hidden aspect-video'>
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
					<h2 className='font-oswald text-golden duration-300'>
						{title}
					</h2>
				</div>
				<p className='text-white mt-4'>{text}</p>
				<div className='flex justify-end mt-4'>
					<button className='bg-golden w-full sm:w-fit text-white hover:text-golden border-golden border-2 text-center sm:hover:bg-transparent py-3 px-4 sm:py-4 sm:px-8 inline-block font-bold duration-200 shadow-md'>
						Zobrazit
					</button>
				</div>
			</div>
		</Link>
	)
}

export default ApartmentCard
