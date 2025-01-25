import React from 'react'
import Image from 'next/image'
import BgImg from '@/../public/images/Ubytování.jpg'

const Hero = () => {
	return (
		<section id='uvod' className='h-screen w-full'>
			<div className='absolute w-full h-full'>
				<Image
					src={BgImg}
					alt='uvodni fotka'
					width={2000}
					height={2000}
					className='w-full h-full object-cover'
				></Image>
				<div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
			</div>
			<div className='container relative flex items-end  h-full'>
				<div className='text-left pb-20 text-white '>
					<h1 className='text-5xl'>
						Ubytování a Keramická dílna Habartovi
					</h1>
					<p className='text-2xl'>
						Soukromé ubytování v Červené Vodě
					</p>

					<button>Zavolejte nám</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
