import { Metadata } from 'next'
import React from 'react'
import Hero from './_components/Sections/Hero/Hero'
import About from './_components/Sections/About/About'

export const metadata: Metadata = {
	title: 'Úvod | Ubytování a Keramická dílna Habartovi',
	description: 'Stránka',
}

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<About></About>
			<section className='h-screen'></section>
		</div>
	)
}

export default Home
