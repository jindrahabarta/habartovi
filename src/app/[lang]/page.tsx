import React from 'react'
import { NextPage } from 'next'
import { getTranslation } from '@/_i18n'
import Hero from '../_components/Sections/Hero/Hero'
import About from '../_components/Sections/About/About'
import Services from '../_components/Sections/Services/Services'
import ZdenekAHelena from '../_components/Sections/ZdenekAHelena/ZdenekAHelena'

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'mainPage')

	return {
		title: t('seo.title'),
		description: t('seo.description'),
	}
}

const Home: NextPage<{ params: { lang: string } }> = async ({
	params: { lang },
}) => {
	return (
		<>
			<Hero lang={lang}></Hero>
			<About lang={lang}></About>
			<ZdenekAHelena lang={lang}></ZdenekAHelena>
			<Services lang={lang}></Services>
		</>
	)
}

export default Home
