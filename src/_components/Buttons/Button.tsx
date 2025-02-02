import Link from 'next/link'
import React from 'react'

interface props {
	link: string
	text: string
	className?: string
	target?: string
}

const Button = ({ link, target, text, className }: props) => {
	return (
		<Link
			href={link}
			target={target ? target : '_self'}
			className={`${className} py-3 px-4 sm:py-4 sm:px-8 inline-block font-bold duration-200 shadow-md`}
		>
			{text}
		</Link>
	)
}

export default Button
