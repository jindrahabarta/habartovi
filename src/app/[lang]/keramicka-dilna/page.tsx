import React from 'react'
import Hero from './_components/Sections/Hero/Hero'
import AboutMe from './_components/Sections/AboutMe/AboutMe'
import { Metadata } from 'next'
import Eshop from './_components/Sections/Eshop/Eshop'
import BackgroundLine from './_components/BackgroundLine'
import TvorivaSetkani from './_components/Sections/TvorivaSetkani/TvorivaSetkani'
import InstagramPottery from '@/_components/Instagram/InstagramPottery'
import Spirala from './_components/Sections/Spirala/Spirala'

export const metadata: Metadata = {
	title: 'Keramická dílna',
	description:
		'Navštivte naši hrnčířskou dílnu v Moravském Karlově, nedaleko Červené Vody, kde se vyrábí keramika pro dům i zahradu. Nabízíme také možnost tvorby na zakázku.',
}

const KeramickaDilna = () => {
	return (
		<div className=''>
			<Hero></Hero>

			<div className='svgContainer relative overflow-hidden'>
				<BackgroundLine className='absolute select-none pointer-events-none z-0 top-0 left-1/2 -translate-x-1/2 h-full md:h-full md:w-auto text-[#f7e9c4]'></BackgroundLine>
				<AboutMe></AboutMe>
				<Spirala></Spirala>

				<TvorivaSetkani></TvorivaSetkani>

				<Eshop></Eshop>

				<InstagramPottery />
			</div>
		</div>
	)
}

export default KeramickaDilna
