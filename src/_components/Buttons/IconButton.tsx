import Link from 'next/link'
import React from 'react'

interface props {
	children: React.JSX.Element
	link: string
}

const IconButton = ({ children, link }: props) => {
	return (
		<Link
			href={link}
			className='bg-secondary hover:bg-secondaryAccent duration-300 flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-lg'
		>
			{children}
		</Link>
	)
}

export default IconButton
