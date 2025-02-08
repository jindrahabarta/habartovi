import React from 'react'
import Image from 'next/image'

import SpiralaImg from '@/../public/images/Keramická dílna/Spirala.webp'
import { getTranslation } from '@/_i18n'

const Spirala = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'ceramicsWorkshop')

	return (
		<section
			id='o-mne'
			className='container py-10 md:py-20 flex flex-col md:flex-row gap-10 xl:gap-32'
		>
			<div className='flex-[2] relative'>
				<h2 className='font-oswald italic text-[3rem] leading-none md:text-[6rem] text-golden md:text-[#f1d9a8]'>
					&quot;{t('sections.spiral.title')}&quot;
				</h2>

				<p className='mt-10 '>{t('sections.spiral.p1')}</p>
				<p className='mt-4'>{t('sections.spiral.p2')}</p>
				<p className='mt-4'>{t('sections.spiral.p3')}</p>
			</div>

			<div className='flex-1'>
				<Image
					src={SpiralaImg}
					alt={t('sections.spiral.title')}
					width={800}
					height={800}
					className='rounded-2xl aspect-square md:aspect-[4/5] object-cover'
				></Image>
			</div>
		</section>
	)
}

export default Spirala
