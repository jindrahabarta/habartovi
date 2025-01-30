import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
	return (
		<Link
			href={link}
			target='_blank'
			className='perspective-800 group relative'
		>
			<div className='absolute p-4 top-0 left-0 w-full h-full shadow-md bg-green1 rounded-2xl transform -rotate-y-180 group-hover:rotate-y-0 duration-300 flex justify-center items-center'>
				<p className='text-white font-bold'>{desc}</p>
			</div>
			<div className='shadow-md aspect-video relative rounded-2xl overflow-hidden transform duration-300 group-hover:rotate-y-180 opacity-100 group-hover:opacity-0'>
				<Image
					src={img}
					alt={'Obrázek ' + title}
					width={400}
					height={300}
					className='absolute w-full h-full '
				></Image>

				<div className='relative w-full h-full bg-black/20 flex items-center justify-center '>
					<h3 className='text-white font-bold'>{title}</h3>
				</div>
			</div>
		</Link>
	)
}

export default Trip
