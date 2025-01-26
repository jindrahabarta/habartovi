'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import LogoImg from '@/../public/images/habartovi-logo.png'
import LanguageSelector from './LanguageSelector'
import gsapInit from '@/_animations/gsapInit'
import { usePathname } from 'next/navigation'
import IconButton from '../Buttons/IconButton'
import MailIcon from '../Icons/MailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import NavigationLinks from './NavigationLinks'
import HamburgerButton from './HamburgerButton'
import MobileNavigationLinks from './MobileNavigationLinks'
import { Link as LinkType } from '@/_types/navigation'

const links: LinkType[] = [
	{
		link: '/',
		text: 'Domů',
		submenu: [
			{
				link: '#',
				text: 'Úvod',
			},
			{
				link: '#',
				text: 'O nás',
			},
			{
				link: '#',
				text: 'Služby',
			},
		],
	},
	{
		link: '/ubytovani',
		text: 'Ubytování',
		submenu: [
			{
				link: '/ubytovani/maly-byt',
				text: 'Malý byt',
			},
			{
				link: '/ubytovani/velky-byt',
				text: 'Velký byt',
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
		submenu: [
			{
				link: '#',
				text: 'Eshop',
			},
			{
				link: '#',
				text: 'Tvořivá setkání',
			},
		],
	},
	{
		link: '/vylety-do-okoli',
		text: 'Okolí',
	},

	{
		link: '/blog',
		text: 'Blog',
	},
]

const Navigation = () => {
	const [isOpened, setIsOpened] = useState(false)
	const path = usePathname()

	useEffect(() => {
		gsapInit(path)
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
					<Link href={'/'} className='z-50 md:w-[170px] w-[130px]'>
						<Image
							src={LogoImg}
							width={170}
							height={80}
							alt='Habartovi logo'
							id='navLogo'
						></Image>
					</Link>

					<NavigationLinks links={links}></NavigationLinks>

					<MobileNavigationLinks
						links={links}
						isOpened={isOpened}
						handleClose={handleMenu}
					></MobileNavigationLinks>

					<div className='flex items-center gap-2'>
						<LanguageSelector></LanguageSelector>

						<IconButton
							link='#'
							className='hidden md:flex bg-secondary hover:bg-secondaryAccent'
						>
							<MailIcon className='w-6 text-white'></MailIcon>
						</IconButton>
						<IconButton
							link='#'
							className='hidden md:flex bg-secondary hover:bg-secondaryAccent'
						>
							<PhoneIcon className='w-6 text-white'></PhoneIcon>
						</IconButton>

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
