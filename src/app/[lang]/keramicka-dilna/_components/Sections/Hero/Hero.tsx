import React from 'react'
import Image from 'next/image'
import Button from '@/_components/Buttons/Button'

import backgroundImage from '@/../public/images/Keramická dílna/bg1.jpg'

const Hero = () => {
	return (
		<section id='hero' className='h-[100svh] w-full pb-20'>
			<div className='absolute top-0 w-full h-full overflow-hidden'>
				<Image
					src={backgroundImage}
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
				<div className='text-left text-white '>
					<h1 className='heroPart opacity-0 -translate-x-20 text-5xl sm:text-6xl font-oswald leading-tight'>
						Keramická dílna
					</h1>

					<p className='heroPart opacity-0 -translate-x-20 mt-4 text-xl sm:text-2xl max-w-[500px] '>
						Vyzkoušejte si práci jako keramik a nebo se prostě
						přijďte pokochat výrobkama
					</p>
					<div className='heroPart opacity-0 -translate-x-20 mt-4 flex flex-wrap items-center gap-4'>
						<Button
							className='bg-secondary border-2 border-secondary sm:hover:bg-secondaryAccent text-white '
							link={'#tvoriva-setkani'}
							text={'Tvořivá setkání'}
						></Button>
						<Button
							className='bg-transparent border-2 border-secondary sm:hover:bg-secondary text-secondary sm:hover:text-white '
							link={'#o-mne'}
							text={'O mě'}
						></Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
