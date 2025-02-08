import React from 'react'
import Hero from './_components/Sections/Hero/Hero'
import AboutMe from './_components/Sections/AboutMe/AboutMe'
import { NextPage } from 'next'
import Eshop from './_components/Sections/Eshop/Eshop'
import BackgroundLine from './_components/BackgroundLine'
import TvorivaSetkani from './_components/Sections/TvorivaSetkani/TvorivaSetkani'
import InstagramPottery from '@/_components/Instagram/InstagramPottery'
import Spirala from './_components/Sections/Spirala/Spirala'
import { getTranslation } from '@/_i18n'

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'ceramicsWorkshop')

	return {
		title: t('seo.title'),
		description: t('seo.description'),
	}
}

const KeramickaDilna: NextPage<{ params: { lang: string } }> = async ({
	params: { lang },
}) => {
	return (
		<div>
			<Hero lang={lang}></Hero>

			<div className='svgContainer relative overflow-hidden'>
				<BackgroundLine className='absolute select-none pointer-events-none z-0 top-0 left-1/2 -translate-x-1/2 h-full md:h-full md:w-auto text-[#f7e9c4]'></BackgroundLine>

				<AboutMe lang={lang}></AboutMe>
				<Spirala lang={lang}></Spirala>

				<TvorivaSetkani lang={lang}></TvorivaSetkani>

				<Eshop lang={lang}></Eshop>

				<InstagramPottery />
			</div>
		</div>
	)
}

export default KeramickaDilna
