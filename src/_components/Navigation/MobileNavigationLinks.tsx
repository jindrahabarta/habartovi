import { Link as LinkType } from '@/_types/navigation'
import Link from 'next/link'
import React from 'react'

import MobileNavSubmenuLink from './MobileNavSubmenuLink'

const MobileNavigationLinks = ({
	isOpened,
	links,
	handleClose,
}: {
	isOpened: boolean
	links: LinkType[]
	handleClose: () => void
}) => {
	return (
		<aside
			id='mobileNav'
			className={`absolute z-40 opacity-0 top-0 left-0 w-full h-dvh px-8 pt-32 bg-secondary flex flex-col gap-2 justify-start duration-300 ${
				isOpened
					? 'mobileNavOpen opacity-100 translate-x-0'
					: 'mobileNavClose opacity-0 translate-x-full'
			}`}
		>
			{links.map((link, i) => {
				if (link.submenu) {
					return (
						<MobileNavSubmenuLink
							id={i}
							key={i}
							link={link}
							handleClick={handleClose}
						></MobileNavSubmenuLink>
					)
				} else {
					return (
						<div className='flex flex-col' key={i}>
							<Link
								className='text-xl py-2 mt-2 text-white hover:text-white flex justify-between items-center select-none'
								href={link.link}
								onClick={handleClose}
							>
								{link.text}
							</Link>

							<span className='bg-gray-100/80 mt-2 w-full h-[0.9px]'></span>
						</div>
					)
				}
			})}
		</aside>
	)
}

export default MobileNavigationLinks
