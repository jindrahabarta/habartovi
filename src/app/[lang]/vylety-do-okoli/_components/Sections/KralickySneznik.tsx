import React from 'react'
import Image from 'next/image'

import KralickySneznikImage from '@/../public/images/okoli/KralickySneznik.webp'
import Link from 'next/link'
import { getTranslation } from '@/_i18n'

const DolniMorava = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'trips')

	return (
		<section className=' bg-background md:sticky top-10'>
			<div className='bg-green1 py-20 rounded-t-2xl'>
				<div className='container flex-col md:flex-row flex gap-5 sm:gap-10'>
					<div className='flex-1'>
						<h2 className='font-oswald sm:text-4xl leading-tight text-golden'>
							Kralický sněžník
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							{t('kralickySneznik.p1')}
						</p>

						<p className='mt-4 sm:mt-8 text-white'>
							{t('kralickySneznik.p2')}
						</p>
					</div>

					<div className='flex-1 '>
						<Image
							src={KralickySneznikImage}
							width={1000}
							height={500}
							alt={'Vrchol Králického Sněžníku'}
							className='object-cover aspect-video rounded-2xl bg-goldenAccent/10'
						></Image>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DolniMorava
