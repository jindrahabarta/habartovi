'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import LogoImg from '@/../public/images/habartovi-logo.png'
import NavLink from './NavLink'
import LanguageSelector from './LanguageSelector'
import gsapInit from '@/_animations/gsapInit'
import { usePathname } from 'next/navigation'
import IconButton from '../Buttons/IconButton'
import MailIcon from '../Icons/MailIcon'
import PhoneIcon from '../Icons/PhoneIcon'

const links = [
	{
		link: '#',
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
		],
	},
	{
		link: '#',
		text: 'Ubytování',
		submenu: [
			{
				link: '#',
				text: 'Malý byt',
			},
			{
				link: '#',
				text: 'Velký byt',
			},
		],
	},
	{
		link: '#',
		text: 'Keramická dílna',
	},
	{
		link: '#',
		text: 'Okolí',
	},
	{
		link: '#',
		text: 'Blog',
	},
]

const Navigation = () => {
	const path = usePathname()

	useEffect(() => {
		gsapInit(path)
	}, [path])

	return (
		<nav className='py-4 z-50 shadow-lg border-b border-black/10 fixed w-screen bg-background'>
			<div className='container mx-auto'>
				<div className='flex gap-2 items-center justify-between'>
					<Link href={'/'} className='brightness-0'>
						<Image
							src={LogoImg}
							width={150}
							height={80}
							alt='Habartovi logo'
						></Image>
					</Link>

					<div className='flex items-center gap-4'>
						<ul className='flex items-center gap-4'>
							{links.map((link, i) => {
								if (link.submenu) {
									return (
										<React.Fragment
											key={i}
										></React.Fragment>
									)
								} else {
									return (
										<React.Fragment key={i}>
											<NavLink
												link={link.link}
												text={link.text}
											></NavLink>
										</React.Fragment>
									)
								}
							})}
						</ul>
					</div>

					<div className='flex items-center gap-2'>
						<LanguageSelector></LanguageSelector>
						<IconButton link='#'>
							<MailIcon className='w-6 text-white'></MailIcon>
						</IconButton>
						<IconButton link='#'>
							<PhoneIcon className='w-6 text-white'></PhoneIcon>
						</IconButton>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
