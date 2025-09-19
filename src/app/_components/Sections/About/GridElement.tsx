import Link from 'next/link'
import React from 'react'

const GridElement = ({
	children,
	title,
	className,
	link,
}: {
	children: React.JSX.Element
	title: string
	className?: string
	link: string
}) => {
	return (
		<Link
			aria-label='Navigation link'
			className={`flex flex-col items-center  py-2 px-8  group border-golden/60 border-r ${className}`}
			href={link}
		>
			{children}
			<p className='text-sm sm:text-base text-nowrap font-bold text-secondary text-center mt-4'>
				{title}
			</p>
		</Link>
	)
}

export default GridElement
