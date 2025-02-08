import React from 'react'
import Image from 'next/image'

import DMImage from '@/../public/images/okoli/Dolní-morava.webp'
import Link from 'next/link'
import { getTranslation } from '@/_i18n'

const DolniMorava = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'trips')

	return (
		<section className=' py-20  bg-background rounded-t-2xl'>
			<div className='container flex-col-reverse md:flex-row flex gap-5 sm:gap-10'>
				<div className='flex-1'>
					<h2 className='font-oswald sm:text-4xl leading-tight text-golden'>
						Dolní Morava
					</h2>
					<p className='mt-4 sm:mt-8 '>{t('dolniMorava.p1')}</p>

					<p className='mt-4 sm:mt-8 '>
						{t('dolniMorava.p2-1')}{' '}
						<Link
							target='_blank'
							className='font-semibold'
							href={
								'https://www.dolnimorava.cz/sky-bridge-721?utm_source=google&utm_medium=cpc&utm_campaign=PER_PMAX_MIX_CZ%7ELeto&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4hnVNzZD84hnp2-JR5UjfkSFtOpNGF6gOxFOzw0BMwo7nvir0tu-5BoCoF8QAvD_BwE'
							}
						>
							Sky Bridge 721
						</Link>
						, {t('dolniMorava.p2-2')}{' '}
						<Link
							target='_blank'
							className='font-semibold'
							href={
								'https://www.dolnimorava.cz/o-stezce-v-oblacich'
							}
						>
							{t('dolniMorava.p2-3')}
						</Link>
						.
					</p>
				</div>

				<div className='flex-1 '>
					<Image
						src={DMImage}
						width={1000}
						height={500}
						alt={'Dolní Morava'}
						className='object-cover aspect-video rounded-2xl bg-goldenAccent/10'
					></Image>
				</div>
			</div>
		</section>
	)
}

export default DolniMorava
