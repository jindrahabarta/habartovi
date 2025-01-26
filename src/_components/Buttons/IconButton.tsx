import Link from 'next/link'
import React from 'react'

interface props {
	children: React.JSX.Element
	link: string
	className?: string
}

const IconButton = ({ children, link, className }: props) => {
	return (
		<Link
			href={link}
			className={`duration-300 flex justify-center items-center w-12 h-12 rounded-lg shadow-md ${className}`}
		>
			{children}
		</Link>
	)
}

export default IconButton
