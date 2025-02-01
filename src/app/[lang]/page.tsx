import React from 'react'
import { Metadata, NextPage } from 'next'
import { useTranslation } from '@/_i18n'
import Hero from '../_components/Sections/Hero/Hero'
import About from '../_components/Sections/About/About'
import Services from '../_components/Sections/Services/Services'

export const metadata: Metadata = {
	title: 'Úvod | Ubytování a Keramická dílna Habartovi',
	description: 'Stránka',
}

const Home: NextPage<{ params: { lang: string } }> = async ({
	params: { lang },
}) => {
	const { t } = await useTranslation(lang)

	return (
		<div>
			<Hero></Hero>
			<About></About>
			<Services></Services>
		</div>
	)
}

export default Home
