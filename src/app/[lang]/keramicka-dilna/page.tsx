import React from 'react'
import Hero from './_components/Sections/Hero/Hero'
import AboutMe from './_components/Sections/AboutMe/AboutMe'
import { Metadata } from 'next'
import Instagram from './_components/Sections/Instagram/Instagram'
import Eshop from './_components/Sections/Eshop/Eshop'
import BackgroundLine from './_components/BackgroundLine'
import TvorivaSetkani from './_components/Sections/TvorivaSetkani/TvorivaSetkani'

export const metadata: Metadata = {
	title: 'Keramická dílna',
}

const KeramickaDilna = () => {
	return (
		<div className=''>
			<Hero></Hero>

			<div className='svgContainer relative overflow-hidden'>
				<BackgroundLine className='absolute select-none pointer-events-none z-0 top-0 left-1/2 -translate-x-1/2 w-full md:h-full md:w-auto text-golden/20'></BackgroundLine>
				<AboutMe></AboutMe>

				<TvorivaSetkani></TvorivaSetkani>

				<Eshop></Eshop>

				<Instagram></Instagram>
			</div>
		</div>
	)
}

export default KeramickaDilna
