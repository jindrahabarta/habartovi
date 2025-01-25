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
			className={`${className} py-4 px-8 inline-block bg-secondary text-white font-bold hover:bg-secondaryAccent hover:text-black duration-200`}
		>
			{text}
		</Link>
	)
}

export default Button
