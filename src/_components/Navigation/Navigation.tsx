'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LanguageSelector from './LanguageSelector'
import gsapInit from '@/_animations/gsapInit'
import { usePathname } from 'next/navigation'
import PhoneIcon from '../Icons/PhoneIcon'
import NavigationLinks from './NavigationLinks'
import HamburgerButton from './HamburgerButton'
import MobileNavigationLinks from './MobileNavigationLinks'
import LogoGolden from '../Icons/Logos/LogoGolden'
import { Link as LinkType } from '@/_types/navigation'

const Navigation: React.FC<{ links: LinkType[] }> = ({ links }) => {
	const [isOpened, setIsOpened] = useState(false)
	const path = usePathname()

	useEffect(() => {
		gsapInit(path)
		setIsOpened(false)
		document.body.classList.remove('denyScroll')
	}, [path])

	const handleMenu = () => {
		document.body.classList.toggle('denyScroll')
		setIsOpened((prev) => !prev)
	}

	return (
		<header
			id='navigation'
			className='z-50 shadow-lg border-b border-black/10 fixed w-screen bg-background'
		>
			<nav className='container mx-auto'>
				<div
					id='navWrapper'
					className='flex gap-2 items-center justify-between h-20 lg:h-fit'
				>
					<Link
						aria-label='Navigation link'
						href={'/'}
						className='z-50 lg:w-[170px] w-[150px] group'
					>
						<LogoGolden
							id='navLogo'
							className=' w-full text-golden  group-hover:text-orange duration-300'
						/>
					</Link>

					<NavigationLinks links={links}></NavigationLinks>

					<MobileNavigationLinks
						links={links}
						isOpened={isOpened}
					></MobileNavigationLinks>

					<div className='flex items-center gap-2'>
						<LanguageSelector></LanguageSelector>

						<Link
							aria-label='Phone link'
							href={'tel:+420777815909'}
							className='hidden sm:flex duration-300 px-4 justify-center items-center gap-2 h-12 rounded-lg shadow-md text-base text-white text-nowrap font-semibold bg-secondary hover:bg-secondaryAccent'
						>
							<PhoneIcon className='w-6 text-white'></PhoneIcon>+
							420 777 815 909
						</Link>

						<HamburgerButton
							isOpened={isOpened}
							handleClick={handleMenu}
						></HamburgerButton>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
