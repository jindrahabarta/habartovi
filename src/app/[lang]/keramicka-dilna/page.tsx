import React from 'react'
import Hero from './_components/Sections/Hero/Hero'
import AboutMe from './_components/AboutMe/AboutMe'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Keramická dílna',
}

const KeramickaDilna = () => {
	return (
		<div className=''>
			<Hero></Hero>

			<AboutMe></AboutMe>
		</div>
	)
}

export default KeramickaDilna
