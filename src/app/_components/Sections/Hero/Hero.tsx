import React from 'react'
import Image from 'next/image'
import Button from '@/_components/Buttons/Button'

import BgImg from '@/../public/images/Keramická dílna/bg1.jpg'

const Hero = () => {
	return (
		<section id='hero' className='h-[100svh] w-full pb-20'>
			<div className='absolute w-full h-full overflow-hidden'>
				<Image
					src={BgImg}
					alt='uvodni fotka'
					width={2000}
					height={2000}
					className='w-full h-full object-cover'
					id='heroImage'
				></Image>
				<div
					id='heroShade'
					className='absolute top-0 left-0 w-full h-full bg-black/0'
				></div>
			</div>
			<div className='container relative flex items-end h-full'>
				<div className='heroPart opacity-0 -translate-x-20 text-left text-white '>
					<h1 className='text-5xl sm:text-6xl font-oswald leading-tight'>
						Ubytování a Keramická dílna Habartovi
					</h1>

					<p className='heroPart opacity-0 -translate-x-20 mt-4 text-xl sm:text-2xl max-w-[500px] '>
						Přijeďte si odpočinout do soukromé ubytování nedaleko
						Červené Vody.
					</p>
					<div className='heroPart opacity-0 -translate-x-20 mt-4 flex-wrap flex items-center gap-4'>
						<Button
							className='bg-secondary hover:bg-secondaryAccent text-white '
							link={'/#o-nas'}
							text={'O nás'}
						></Button>
						<Button
							className='bg-secondary hover:bg-secondaryAccent text-white '
							link={'/ubytovani/rezervace'}
							text={'Rezervovat termín'}
						></Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
