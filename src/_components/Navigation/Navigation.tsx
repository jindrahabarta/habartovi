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
import ChevronIcon from '../Icons/ChevronIcon'

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
		<nav
			id='navigation'
			className='z-50 shadow-lg border-b border-black/10 fixed w-screen bg-background'
		>
			<div className='container mx-auto'>
				<div className='flex gap-2 items-center justify-between'>
					<Link href={'/'} className='brightness-0 w-[170px]'>
						<Image
							src={LogoImg}
							width={170}
							height={80}
							alt='Habartovi logo'
							id='navLogo'
						></Image>
					</Link>

					<div id='navUl' className='flex items-center gap-4 h-20'>
						<ul className='flex items-center gap-4 h-full'>
							{links.map((link, i) => {
								if (link.submenu) {
									return (
										<React.Fragment key={i}>
											<div className='group/subMenu h-full flex relative'>
												<div className='flex items-center gap-1 cursor-pointer'>
													<NavLink
														link={link.link}
														text={link.text}
													></NavLink>
													<ChevronIcon className='w-3 group-hover/subMenu:text-secondary group-hover/subMenu:pt-1 duration-200'></ChevronIcon>
												</div>

												<div className='absolute -left-2 -bottom-0 pt-0 translate-y-full opacity-0 pointer-events-none group-hover/subMenu:opacity-100 group-hover/subMenu:pointer-events-auto duration-300'>
													<div className=' flex flex-col gap-1  bg-background shadow-md border border-black/20 p-5 '>
														{link.submenu.map(
															(subLink, i) => (
																<React.Fragment
																	key={i}
																>
																	<NavLink
																		link={
																			subLink.link
																		}
																		text={
																			subLink.text
																		}
																	/>
																</React.Fragment>
															)
														)}
													</div>
												</div>
											</div>
										</React.Fragment>
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
