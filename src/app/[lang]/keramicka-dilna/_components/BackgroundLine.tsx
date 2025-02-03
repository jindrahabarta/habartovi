'use client'
import React, { useEffect } from 'react'
import { SVGProps } from 'react'
import gsap from 'gsap'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
	useEffect(() => {
		let svg = document.getElementById('BgSVG')
		let path = svg?.querySelector('path')
		const pathLength = path?.getTotalLength()

		console.log(pathLength)

		if (!path) return

		gsap.set(path, {
			strokeDasharray: pathLength,
		})

		gsap.fromTo(
			path,
			{
				strokeDashoffset: pathLength,
			},
			{
				strokeDashoffset: 0,

				scrollTrigger: {
					trigger: '.svgContainer',
					start: 'top center',
					end: 'bottom center',
					scrub: 1,
				},
			}
		)
	}, [])

	return (
		<svg
			id='BgSVG'
			xmlns='http://www.w3.org/2000/svg'
			data-name='Layer 2'
			viewBox='0 0 1131 2902.73'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={5}
				d='M781.05 2.17c66.95 38.14 271.82 164.38 266 323-2.66 72.42-47.15 94.99-399 380-199.97 161.98-275.88 227.83-392 221-25.15-1.48-135.56-7.97-190-95-35.38-56.57-43-140.58 0-202.43 56.86-81.78 172.09-81.52 241-56.57 58.75 21.27 97.05 65.27 139 133 86.48 139.61 241.54 389.94 139.5 600.84-40.85 84.42-108.46 132.71-215.5 209.16-157.68 112.62-232.86 100.33-304 202.27-12.19 17.47-85.55 126.14-57 259.73 5.05 23.61 38.15 164.39 146 196 101.62 29.78 201.98-57.83 240-89 111-91 127.25-216.29 171-272 139-177 354-111 412-50 91.57 96.31 33.62 484.94-7 601-42.98 122.79-88 96-139 215-19 91 76.71 80.28 215 227.97 35.73 38.16 63.4 71.61 82 95.03'
				data-name='Layer 1'
			/>
		</svg>
	)
}
export default SvgComponent
