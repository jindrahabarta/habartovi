import Link from 'next/link'
import React from 'react'

interface props {
	link: string
	text: string
	className?: string
}

const Button = ({ link, text, className }: props) => {
	return (
		<Link
			href={link}
			className={`${className} py-3 px-4 sm:py-4 sm:px-8 inline-block font-bold duration-200 shadow-md`}
		>
			{text}
		</Link>
	)
}

export default Button
