import React from 'react'
import Image from 'next/image'
import BgImg from '@/../public/images/Ubytování.jpg'
import Button from '@/_components/Buttons/Button'

const Hero = () => {
	return (
		<section id='uvod' className='h-screen w-full'>
			<div className='absolute w-full h-full'>
				<Image
					src={BgImg}
					alt='uvodni fotka'
					width={2000}
					height={2000}
					className='w-full h-full object-cover bg-fixed'
				></Image>
				<div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
			</div>
			<div className='container relative flex items-end h-full'>
				<div className='text-left text-white '>
					<h1 className='text-5xl sm:text-6xl font-oswald leading-tight'>
						Ubytování a Keramická dílna Habartovi
					</h1>

					<p className='text-xl sm:text-2xl max-w-[500px] '>
						Přijeďte si odpočinout do soukromé ubytování nedaleko
						Červené Vody.
					</p>
					<div className='mt-4 flex-wrap flex items-center gap-4 pb-20'>
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
