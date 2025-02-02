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
import { Link as LinkType } from '@/_types/navigation'
import LogoGolden from '../Icons/Logos/LogoGolden'

const links: LinkType[] = [
	{
		link: '/',
		text: 'Domů',
	},
	{
		link: '/ubytovani',
		text: 'Ubytování',
		submenu: [
			{
				link: '/ubytovani',
				text: 'Apartmány',
			},
			{
				link: '/ubytovani/maly-apartman',
				text: 'Malý apartmán',
			},
			{
				link: '/ubytovani/velky-apartman',
				text: 'Velký apartmán',
			},
			{
				link: '/ubytovani/rezervace',
				text: 'Rezervace',
			},
		],
	},
	{
		link: '/keramicka-dilna',
		text: 'Keramická dílna',
	},
	{
		link: '/vylety-do-okoli',
		text: 'Okolí',
	},

	{
		link: '/blog',
		text: 'Blog',
	},
	{
		link: '/kontakt',
		text: 'Kontakt',
	},
]

const Navigation = () => {
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
		<nav
			id='navigation'
			className='z-50 shadow-lg border-b border-black/10 fixed w-screen bg-background'
		>
			<div className='container mx-auto'>
				<div
					id='navWrapper'
					className='flex gap-2 items-center justify-between h-20 md:h-fit'
				>
					<Link
						href={'/'}
						id='navLogo'
						className='z-50 md:w-[170px] w-[150px] group'
					>
						<LogoGolden className=' w-full text-golden  group-hover:text-orange duration-300' />
					</Link>

					<NavigationLinks links={links}></NavigationLinks>

					<MobileNavigationLinks
						links={links}
						isOpened={isOpened}
					></MobileNavigationLinks>

					<div className='flex items-center gap-2'>
						<LanguageSelector></LanguageSelector>

						{/* <IconButton
							link='mailto:habartovi@email.cz'
							className='hidden  sm:flex lg:hidden bg-secondary hover:bg-secondaryAccent'
						>
							<MailIcon className='w-6 text-white'></MailIcon>
						</IconButton>
						<IconButton
							link='tel:+420775180052'
							className='hidden sm:flex lg:hidden bg-secondary hover:bg-secondaryAccent'
						>
							<PhoneIcon className='w-6 text-white'></PhoneIcon>
						</IconButton> */}

						<Link
							href={'tel:+420775180052'}
							className='hidden sm:flex duration-300 px-4 justify-center items-center gap-2 h-12 rounded-lg shadow-md text-sm lg:text-base text-white text-nowrap font-semibold bg-secondary hover:bg-secondaryAccent'
						>
							<PhoneIcon className='w-6 text-white'></PhoneIcon>
							<span className='hidden lg:block'>+ 420</span> 775
							180 052
						</Link>

						<HamburgerButton
							isOpened={isOpened}
							handleClick={handleMenu}
						></HamburgerButton>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
