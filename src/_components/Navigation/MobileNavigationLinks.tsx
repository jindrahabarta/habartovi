import { Link as LinkType } from '@/_types/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import MobileNavSubmenuLink from './MobileNavSubmenuLink'
import IconButton from '../Buttons/IconButton'
import MailIcon from '../Icons/MailIcon'
import PhoneIcon from '../Icons/PhoneIcon'

const MobileNavigationLinks = ({
	isOpened,
	links,
}: {
	isOpened: boolean
	links: LinkType[]
}) => {
	const [expand, setExpand] = useState<null | number>(null)

	useEffect(() => {
		setExpand(null)
	}, [isOpened])

	return (
		<aside
			id='mobileNav'
			className={`absolute lg:hidden z-40 opacity-0 top-0 right-0 w-full sm:w-2/3 h-dvh px-8 pt-32 bg-secondary flex flex-col gap-2 justify-between shadow-md border-l border-black/20 duration-300 overflow-y-auto ${
				isOpened
					? 'mobileNavOpen opacity-100 translate-x-0'
					: 'mobileNavClose opacity-0 translate-x-full'
			}`}
		>
			<div className='flex flex-col gap-2'>
				{links.map((link, i) => {
					if (link.submenu) {
						return (
							<MobileNavSubmenuLink
								id={i}
								key={i}
								link={link}
								handleExpand={(id) => {
									if (id === expand) {
										setExpand(null)
									} else {
										setExpand(id)
									}
								}}
								isOpened={expand === i}
							></MobileNavSubmenuLink>
						)
					} else {
						return (
							<div className='flex flex-col' key={i}>
								<Link
									className='text-2xl py-2 mt-2 text-white hover:text-white hover:underline flex justify-between items-center select-none'
									href={link.link}
								>
									{link.text}
								</Link>

								<span className='bg-gray-100/80 mt-2 w-full h-[0.9px]'></span>
							</div>
						)
					}
				})}
			</div>

			<div className='flex justify-end gap-4 py-4 '>
				<IconButton link='#' className='bg-background'>
					<MailIcon className='w-6  text-secondary'></MailIcon>
				</IconButton>
				<IconButton link='#' className='bg-background'>
					<PhoneIcon className='w-6 text-secondary'></PhoneIcon>
				</IconButton>
			</div>
		</aside>
	)
}

export default MobileNavigationLinks
