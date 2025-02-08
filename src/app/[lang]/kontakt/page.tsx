import { NextPage } from 'next'
import React from 'react'
import ContactTable from './_components/ContactTable'
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
	}
}

const Kontakt: NextPage<{ params: { lang: string } }> = async ({
	params: { lang },
}) => {
	const { t } = await getTranslation(lang, 'contact')

	return (
		<div className='pt-32'>
			<section className='container'>
				<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60'>
					{t('title')}
				</h1>

				<ContactTable lang={lang}></ContactTable>
			</section>
		</div>
	)
}

export default Kontakt
