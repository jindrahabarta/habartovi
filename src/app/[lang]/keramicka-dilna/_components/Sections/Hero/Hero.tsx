import React from 'react'
import Image from 'next/image'
import Button from '@/_components/Buttons/Button'

import backgroundImage from '@/../public/images/Keramická dílna/bg1.jpg'

const Hero = () => {
	return (
		<section className='h-screen'>
			<div className='absolute top-0 w-full h-full'>
				<Image
					src={backgroundImage}
					alt='uvodni fotka'
					width={2000}
					height={2000}
					className='w-full h-full object-cover'
				></Image>
				<div className='absolute top-0 left-0 w-full h-full bg-black/40'></div>
			</div>

			<div className='container relative flex items-end h-full pb-20'>
				<div className='text-left text-white '>
					<h1 className='text-6xl font-oswald leading-tight'>
						Keramická dílna
					</h1>

					<p className='text-2xl max-w-[500px] '>
						Vyzkoušejte si práci jako keramik a nebo se prostě
						přijďte pokochat výrobkama
					</p>
					<div className='mt-4 flex items-center gap-4'>
						<Button
							className='bg-secondary border-2 border-secondary sm:hover:bg-secondaryAccent text-white '
							link={'/#tvoriva-setkani'}
							text={'Tvořivá setkání'}
						></Button>
						<Button
							className='bg-transparent border-2 border-secondary sm:hover:bg-secondary text-secondary sm:hover:text-white '
							link={'/#o-me'}
							text={'O mě'}
						></Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
