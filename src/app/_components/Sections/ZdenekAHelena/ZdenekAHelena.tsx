import React from 'react'
import Image from 'next/image'

import ZdenekAHelenaImg from '@/../public/images/Homepage/ZdeněkAHelena.webp'
import { getTranslation } from '@/_i18n'

const ZdenekAHelena = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'mainPage')
	return (
		<section
			id='ZdenekAHelena'
			className='bg-no-repeat h-fit md:h-[200vh] relative'
		>
			<div className='relative md:absolute top-0 left-0 w-full h-full'>
				<div className='sticky px-4 md:px-0 top-0 z-0 md:h-screen w-full overflow-hidden'>
					<Image
						id='ZdenekAHelenaImg'
						src={ZdenekAHelenaImg}
						width={1500}
						height={1000}
						alt={`Zdenek a Helena`}
						className='h-fit md:h-full w-full object-cover'
					></Image>
				</div>
			</div>

			<div className='hidden md:flex absolute top-0 w-full h-full'>
				<div
					id='ZaHBckdropLeft'
					className='w-full h-full opacity-0 backdrop-grayscale brightness-50'
				></div>
				<div
					id='ZaHBckdropRight'
					className='w-full h-full opacity-80 backdrop-grayscale brightness-50'
				></div>
			</div>
			<div className='container h-full relative md:py-20'>
				<div
					id='ZaHLeft'
					className='md:h-1/2 flex md:justify-end py-8 md:py-0'
				>
					<div className='md:w-1/3'>
						<h1 className='ZaHScrollSpeedLeft ZaHScrollSpeed md:opacity-0 md:translate-y-20 font-oswald text-5xl sm:text-6xl leading-tight text-golden'>
							Zdeněk
						</h1>

						<p className='ZaHScrollSpeedLeft ZaHScrollSpeed md:opacity-0 md:translate-y-32 md:text-white italic text-lg mt-4 md:mt-8'>
							{t('sections.zdenekAndHelena.ZdenekText')}
						</p>
					</div>
				</div>

				<div id='ZaHRight' className=' h-1/2 flex py-8 md:py-0'>
					<div className='md:w-1/3'>
						<h1 className='ZaHScrollSpeedRight ZaHScrollSpeed md:opacity-0 md:translate-y-20 font-oswald  text-5xl sm:text-6xl leading-tight text-golden'>
							Helena
						</h1>

						<p className='ZaHScrollSpeedRight ZaHScrollSpeed md:opacity-0 md:translate-y-32 md:text-white italic text-lg mt-4 md:mt-8'>
							{t('sections.zdenekAndHelena.HelenaText')}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ZdenekAHelena
