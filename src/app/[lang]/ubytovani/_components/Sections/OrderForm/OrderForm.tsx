'use client'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import React, { useEffect } from 'react'

interface IProps {
	lang: string
}

const OrderForm: React.FC<IProps> = ({ lang }) => {
	const path = usePathname()

	const initWidget = () => {
		if (typeof window !== 'undefined' && (window as any).muEmbed) {
			;(window as any).muEmbed(
				{
					embedType: 'reservation-widget',
					accommodationId: 8116,
					token: 'd0070ef1fbc3e4f77e88b77bb1ba53b7',
					settings: {
						primary_color: 'rgba(221,167,83,1)',
						secondary_color: '#efc583',
						text_color: 'rgba(24,29,34,1)',
					},
				},
				'embed-Qjws-WgAbaV5QCXFiUhMm'
			)
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => initWidget(), 300)
		return () => clearTimeout(timer)
	}, [path])

	return (
		<div
			id='embed-Qjws-WgAbaV5QCXFiUhMm'
			data-mu-embed-origin='https://www.megaubytko.cz'
			className='w-full'
		>
			<Script
				src='https://www.megaubytko.cz/muEmbed.js'
				strategy='afterInteractive'
			/>
		</div>
	)
}

export default OrderForm
