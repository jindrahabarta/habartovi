import Link from 'next/link'
import React from 'react'

interface Props {
	link: string
	text: string
}

const NavLink = ({ link, text }: Props) => {
	return (
		<Link
			aria-label='Navigation link'
			href={link}
			className='flex flex-col w-fit group'
		>
			<li
				data-custom
				className='text-sm sm:text-sm md:text-base text-black group-hover:text-secondary duration-200 font-bold text-nowrap'
			>
				{text}
			</li>

			<div className='w-0 group-hover:w-full duration-200 bg-black group-hover:bg-secondary h-0.5'></div>
		</Link>
	)
}

export default NavLink
