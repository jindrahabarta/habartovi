import React from 'react'

const Feature = ({
	title,
	icon,
}: {
	title: string
	icon: React.JSX.Element
}) => {
	return (
		<div className='flex items-center gap-4'>
			{icon}

			<p className='font-semibold'>{title}</p>
		</div>
	)
}

export default Feature
