import { getTranslation } from '@/_i18n'
import Link from 'next/link'
import React from 'react'

const Eshop = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'ceramicsWorkshop')

	return (
		<section className='container relative pb-10 md:pb-20'>
			<h2 className='font-oswald text-[3rem] leading-none md:text-[6rem] text-golden md:text-[#f1d9a8]'>
				Eshop
			</h2>
			<p className='mt-10'>
				{t('sections.eshop.p1')}{' '}
				<Link
					aria-label='Navigation link - eshop'
					className='text-black hover:text-secondary'
					target='_blank'
					href={'https://www.helenpottery.cz/'}
				>
					<strong>www.helenpottery.cz</strong>
				</Link>
			</p>
		</section>
	)
}

export default Eshop
