import React from 'react'
import ApartmentSelection from './_components/Sections/ApartmentSelection/ApartmentSelection'
import { getTranslation } from '@/_i18n'
import { NextPage } from 'next'

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'accommodation')

	return {
		title: t('seo.title'),
		description: t('seo.description'),
	}
}

const Ubytovani: NextPage<{ params: { lang: string } }> = async ({
	params: { lang },
}) => {
	const { t } = await getTranslation(lang, 'accommodation')

	return (
		<div className='pt-32'>
			<section className='container'>
				<h1 className='font-oswald  md:text-[6rem] leading-tight text-golden/60'>
					{t('title')}
				</h1>
			</section>
			<ApartmentSelection lang={lang}></ApartmentSelection>
		</div>
	)
}

export default Ubytovani
