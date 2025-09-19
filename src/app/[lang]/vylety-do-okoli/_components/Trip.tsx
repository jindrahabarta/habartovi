'use client'
import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const Trip = ({
	title,
	desc,
	link,
	img,
}: {
	title: string
	desc: string
	link: string
	img: StaticImageData
}) => {
	const { lang } = useParams()

	return (
		<div className='perspective-800 group relative'>
			<div className='absolute p-4 px-8 top-0 left-0 w-full h-full shadow-md bg-green1 rounded-2xl transform -rotate-x-180 group-hover:rotate-x-0 duration-300 flex flex-col gap-2 justify-center items-center'>
				<h2 className='text-2xl text-center text-secondary'>{title}</h2>
				<p className='text-white font-semibold text-sm line-clamp-4 leading-[1.2em] text-ellipsis'>
					{desc}
				</p>

				<Link
					aria-label='See more'
					className='bg-secondary py-2 px-3 text-md mt-2 border-2 font-semibold hover:border-secondaryAccent border-secondary sm:hover:bg-secondaryAccent text-white'
					href={link}
					target='_blank'
				>
					{lang === 'cs' ? 'Číst více' : 'Read more'}
				</Link>
			</div>
			<div className='shadow-md bg-green1 aspect-video relative rounded-2xl overflow-hidden transform duration-300 group-hover:rotate-x-180 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none'>
				<Image
					src={img}
					alt={'Obrázek ' + title}
					width={400}
					height={300}
					className='absolute w-full h-full object-cover'
				></Image>

				<div className='relative w-full h-full bg-black/20 flex items-center justify-center '>
					<h3 className='text-white font-bold'>{title}</h3>
				</div>
			</div>
		</div>
	)
}

export default Trip
