import React from 'react'

const GridElement = ({
	children,
	title,
	className,
}: {
	children: React.JSX.Element
	title: string
	className?: string
}) => {
	return (
		<div
			className={`flex flex-col items-center  py-2 px-8  group border-golden/60 border-r ${className}`}
		>
			{children}
			<p className='text-sm sm:text-base text-nowrap font-bold text-secondary text-center mt-4'>
				{title}
			</p>
		</div>
	)
}

export default GridElement
