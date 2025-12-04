import React from 'react'
import Image from 'next/image'

import TvorivaSetkaniImg from '@/../public/images/Keramická dílna/TvorivaSetkani.webp'
import Link from 'next/link'
import { getTranslation } from '@/_i18n'

const TvorivaSetkani = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'ceramicsWorkshop')

	return (
		<section
			id='tvoriva-setkani'
			className='container py-10 md:py-20 flex flex-col-reverse md:flex-row gap-10 xl:gap-32'
		>
			<div className='flex-1'>
				<Image
					src={TvorivaSetkaniImg}
					alt={t('sections.creativeMeetings.title')}
					width={800}
					height={800}
					className='rounded-2xl aspect-square md:aspect-[4/5] object-cover'
				></Image>
			</div>

			<div className='flex-[2] relative'>
				<h2 className='font-oswald text-[3rem] leading-none md:text-[6rem] text-golden md:text-[#f1d9a8]'>
					{t('sections.creativeMeetings.title')}
				</h2>
				<p className='mt-10'>{t('sections.creativeMeetings.p1')}</p>

				<p className='mt-10'>
					<strong>1 {t('sections.creativeMeetings.p2strong')}</strong>{' '}
					{t('sections.creativeMeetings.p2')}
				</p>
				<ul className='list-disc ml-6 mt-2'>
					<li>
						{t('sections.creativeMeetings.ul.li1')}{' '}
						<strong>400{lang !== 'cs' ? ' CZK' : ',-Kč'}</strong>
					</li>
					<li>
						{t('sections.creativeMeetings.ul.li2')}{' '}
						<strong> 600{lang !== 'cs' ? ' CZK' : ',-Kč'}</strong>
					</li>
				</ul>

				<p className='mt-4'>
					<strong>{t('sections.creativeMeetings.p3strong')}</strong>{' '}
					{t('sections.creativeMeetings.p3')}
					<strong> 120{lang !== 'cs' ? ' CZK' : ',-Kč'}</strong>
				</p>

				<p className='mt-4'>
					{t('sections.creativeMeetings.p4')}{' '}
					<Link
						aria-label='Phone link'
						className='text-black hover:text-secondary'
						href={'tel:+420773206793'}
					>
						<strong>773 206 793</strong>
					</Link>
					, {t('sections.creativeMeetings.p4-2')}{' '}
					<Link
						aria-label='Email link'
						className='text-black hover:text-secondary'
						href={
							'mailto:&#104;&#97;&#98;&#97;&#114;&#116;&#111;&#118;&#105;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#122;'
						}
					>
						<strong>
							&#104;&#97;&#98;&#97;&#114;&#116;&#111;&#118;&#105;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#122;
						</strong>
					</Link>
				</p>

				<p className='mt-4'>{t('sections.creativeMeetings.p5')}</p>

				<p className='mt-4'>
					{t('sections.creativeMeetings.p6')}{' '}
					<Link
						aria-label='Navigation link - accommodation'
						className='text-black hover:text-secondary'
						href={'/ubytovani'}
					>
						<strong>
							{t('sections.creativeMeetings.p6strong')}
						</strong>
					</Link>{' '}
					{t('sections.creativeMeetings.p6-2')}
				</p>
			</div>
		</section>
	)
}

export default TvorivaSetkani
