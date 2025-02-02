import Link from 'next/link'
import React from 'react'

interface props {
	children: React.JSX.Element
	link: string
	className?: string
	target?: string
}

const IconButton = ({ children, link, className, target }: props) => {
	return (
		<Link
			href={link}
			className={`duration-300 flex justify-center items-center w-12 h-12 min-w-12 rounded-lg shadow-md ${className}`}
			target={`${target ? '_self' : target}`}
		>
			{children}
		</Link>
	)
}

export default IconButton
