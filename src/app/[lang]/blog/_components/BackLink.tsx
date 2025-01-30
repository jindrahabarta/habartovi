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
		<a href='#' onClick={handleClick} className='flex items-center'>
			<FiChevronLeft /> zpět
		</a>
	)
}

export default BackLink
