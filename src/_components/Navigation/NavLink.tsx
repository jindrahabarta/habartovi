import Link from 'next/link'
import React from 'react'

interface Props {
	link: string
	text: string
}

const NavLink = ({ link, text }: Props) => {
	return (
		<Link href={link} className='flex flex-col group/navLink'>
			<li
				data-custom
				className='text-base text-black group-hover/navLink:text-secondary duration-200 font-bold text-nowrap'
			>
				{text}
			</li>

			<div className='w-0 group-hover/navLink:w-full duration-200 bg-black group-hover/navLink:bg-secondary h-0.5'></div>
		</Link>
	)
}

export default NavLink
