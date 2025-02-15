import React from 'react'
import Carousel from '../_components/Carousel/Carousel'
import Pricelist from '../_components/Sections/Pricelist/Pricelist'
import OrderForm from '../_components/Sections/OrderForm/OrderForm'
import Features from '../_components/Sections/Features/Features'
import SizeIcon from '@/_components/Icons/SizeIcon'
import SmokingIcon from '@/_components/Icons/SmokingIcon'
import WifiIcon from '@/_components/Icons/WifiIcon'
import BedIcon from '@/_components/Icons/BedIcon'
import BicycleIcon from '@/_components/Icons/BicycleIcon'
import ParkingIcon from '@/_components/Icons/ParkingIcon'
import { NextPage } from 'next'

import image1 from '@/../public/images/maly-apartman/1.jpg'
import image2 from '@/../public/images/maly-apartman/2.jpg'
import image3 from '@/../public/images/maly-apartman/3.jpg'
import image4 from '@/../public/images/maly-apartman/4.jpg'
import image5 from '@/../public/images/maly-apartman/5.jpg'
import image6 from '@/../public/images/maly-apartman/6.jpg'
import image7 from '@/../public/images/maly-apartman/7.jpg'
import image8 from '@/../public/images/maly-apartman/8.jpg'
import image9 from '@/../public/images/maly-apartman/9.jpg'
import { getTranslation } from '@/_i18n'
import KitchenIcon from '@/_components/Icons/KitchenIcon'
import ShowerIcon from '@/_components/Icons/ShowerIcon'

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'studio')

	return {
		title: t('seo.title'),
		description: t('seo.description'),
	}
}

const images = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
]

interface IParams {
	lang: string
}

const MalyByt: NextPage<{ params: IParams }> = async ({ params: { lang } }) => {
	const { t } = await getTranslation(lang, 'studio')

	const features = [
		{
			text: '30 m2',
			icon: <SizeIcon className='text-golden/80 w-6'></SizeIcon>,
		},
		{
			text: t('features.f3'),
			icon: <BedIcon className='text-golden/80 w-6'></BedIcon>,
		},
		{
			text: 'WiFi',
			icon: <WifiIcon className='text-golden/80 w-6'></WifiIcon>,
		},
		{
			text: t('features.f4'),
			icon: <KitchenIcon className='text-golden/80 w-6'></KitchenIcon>,
		},
		{
			text: t('features.f1'),
			icon: <ShowerIcon className='text-golden/80 w-6'></ShowerIcon>,
		},
		{
			text: t('features.f5'),
			icon: <ParkingIcon className='text-golden/80 w-6'></ParkingIcon>,
		},
		{
			text: t('features.f2'),
			icon: <BicycleIcon className='text-golden/80 w-6'></BicycleIcon>,
		},
		{
			text: t('features.f6'),
			icon: <SmokingIcon className='text-golden/80 w-6'></SmokingIcon>,
		},
	]
	const prices = [
		{
			price: 350,
			text: t('pricelist.p1'),
		},

		{
			price: 50,
			text: t('pricelist.p2'),
		},
		{
			price: 20,
			text: t('pricelist.p3'),
		},
	]

	return (
		<div className='pt-14'>
			<Carousel images={images}></Carousel>

			<section className='container py-10 flex flex-col xl:flex-row gap-10'>
				<div className='flex-[3] relative '>
					<h1 className='font-oswald opacity-60  md:text-[6rem] leading-tight text-golden'>
						{t('title')}
					</h1>

					<p className='mt-4'>{t('p1')}</p>

					<p className='mt-4'>{t('p2')}</p>
					<p className='mt-4'>{t('p3')}</p>

					<div className='w-full h-[1px] bg-golden/60 mt-8 mb-4'></div>

					<Features
						title={t('featuresTitle')}
						features={features}
					></Features>

					<div className='w-full h-[1px] bg-golden/60 mt-8 mb-4'></div>

					<Pricelist
						title={t('pricelistTitle')}
						prices={prices}
						bottomText={t('pricelistBottom')}
						lang={lang}
					></Pricelist>

					<div className='w-full h-[1px] bg-golden/60 mt-8 mb-4'></div>
					<h2 className='font-oswald opacity-60 text-4xl leading-tight text-golden'>
						{t('rezervationTitle')}
					</h2>

					<p className='mt-5'>{t('rezervationText.p1')}</p>
					<p className='mt-2'>{t('rezervationText.p2')}</p>
					<p className='mt-2'>{t('rezervationText.p3')}</p>
				</div>

				<div className='flex-[2] sticky top-10 h-full'>
					<OrderForm lang={lang}></OrderForm>
				</div>
			</section>
		</div>
	)
}

export default MalyByt
