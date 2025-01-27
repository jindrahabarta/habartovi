import React from 'react'

const Feature = ({ title }: { title: string }) => {
	return (
		<div className='flex items-center gap-4'>
			<div className='bg-red-300 rounded-full w-10 h-10'></div>

			<p>{title}</p>
		</div>
	)
}

export default Feature
