'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'

import LogoImg from '@/../public/images/habartovi-logo.png'
import NavLink from './NavLink'
import LanguageSelector from './LanguageSelector'
import gsapInit from '@/_animations/gsapInit'
import { usePathname } from 'next/navigation'

const Navigation = () => {
	const path = usePathname()

	useEffect(() => {
		gsapInit(path)
	}, [path])

	return (
		<nav className='py-4 z-50 shadow-lg border-b border-black/40 fixed w-screen bg-white'>
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
							<NavLink link='/' text='Domů'></NavLink>
							<NavLink link='/' text='Ubytování'></NavLink>
							<NavLink link='/' text='Keramická dílna'></NavLink>
							<NavLink link='/' text='Rezervace'></NavLink>
						</ul>
					</div>

					<div className='flex items-center gap-2'>
						{/* <button aria-label='telefon'>
							<Link
								href={'tel:775180052'}
								className='border-2 border-primary bg-primary text-white font-bold text-lg hover:text-primary hover:bg-white duration-200 rounded-xl py-2 px-6'
							>
								+420 775 180 052
							</Link>
						</button> */}
						<button>+420 775 180 052</button>
						<LanguageSelector></LanguageSelector>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navigation
