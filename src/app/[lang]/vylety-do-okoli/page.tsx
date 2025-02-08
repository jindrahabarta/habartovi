import React from 'react'
import Restaurace from './_components/Sections/Restaurace'
import BestPlaces from './_components/Sections/BestPlaces'
import DolniMorava from './_components/Sections/DolniMorava'
import { getTranslation } from '@/_i18n'
import { NextPage } from 'next'

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'trips')

	return {
		title: t('seo.title'),
	}
}

const VyletyDoOkoli: NextPage<{ params: { lang: string } }> = async ({
	params: { lang },
}) => {
	const { t } = await getTranslation(lang, 'trips')

	return (
		<div className='pt-32'>
			<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60 container'>
				{t('title')}
			</h1>

			<BestPlaces lang={lang}></BestPlaces>
			<Restaurace lang={lang}></Restaurace>
			<div className='bg-green2'>
				<DolniMorava lang={lang}></DolniMorava>
			</div>
		</div>
	)
}

export default VyletyDoOkoli
