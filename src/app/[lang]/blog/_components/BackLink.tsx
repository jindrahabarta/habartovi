'use client'

import { useRouter } from 'next/navigation'
import React, { MouseEventHandler } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const BackLink = () => {
	const router = useRouter()

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault()
		router.back()
	}

	return (
		<a
			href='#'
			onClick={handleClick}
			className='flex items-center w-fit font-semibold text-base group hover:underline'
		>
			<FiChevronLeft className='relative left-0 group-hover:-left-0.5 duration-300' />{' '}
			Zpět
		</a>
	)
}

export default BackLink
