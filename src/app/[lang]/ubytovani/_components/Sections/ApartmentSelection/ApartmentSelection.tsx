import React from 'react'
import ApartmentCard from './ApartmentCard'
import { getTranslation } from '@/_i18n'

// import Img from '@/../public/images/Ubytování.jpg'
import SmallerCover from '@/../public/images/maly-apartman/1.jpg'
import BiggerCover from '@/../public/images/velky-apartman/1.webp'

const ApartmentSelection = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'accommodation')
	return (
		<section className='container flex flex-col md:flex-row gap-10  py-10'>
			<ApartmentCard
				title={t('studio.title')}
				text={t('studio.description')}
				image={SmallerCover}
				link={'/ubytovani/maly-apartman'}
				className='bg-green1'
				btnText={t('button')}
			></ApartmentCard>

			<ApartmentCard
				title={t('biggerApartment.title')}
				text={t('biggerApartment.description')}
				image={BiggerCover}
				link={'/ubytovani/velky-apartman'}
				className='bg-green2'
				btnText={t('button')}
			></ApartmentCard>
		</section>
	)
}

export default ApartmentSelection
