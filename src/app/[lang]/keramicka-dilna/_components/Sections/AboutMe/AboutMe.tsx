import React from 'react'
import Image from 'next/image'

import AboutMeImg from '@/../public/images/Keramická dílna/AboutHelena.webp'
import { getTranslation } from '@/_i18n'

const AboutMe = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'ceramicsWorkshop')

	return (
		<section
			id='o-mne'
			className='container py-10 md:py-20 flex flex-col-reverse md:flex-row gap-10 xl:gap-32'
		>
			<div className='flex-1'>
				<Image
					src={AboutMeImg}
					alt={'Obrázek Helena Habartová s hrnčířským kruhem'}
					width={800}
					height={800}
					className='rounded-2xl aspect-square md:aspect-[4/5] object-cover'
				></Image>
			</div>
			<div className='flex-[2] relative'>
				<h1 className='font-oswald text-[5rem] leading-none md:text-[8rem] text-[#f1d9a8]'>
					About
				</h1>
				<h1 className='pl-8 md:pl-16 relative font-oswald '>
					Helena Habartová
				</h1>

				<p className='mt-10'>{t('sections.about.p1')}</p>

				<p className='mt-4'>{t('sections.about.p2')}</p>
			</div>
		</section>
	)
}

export default AboutMe
