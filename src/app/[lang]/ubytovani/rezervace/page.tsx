import IconButton from '@/_components/Buttons/IconButton'
import ArrowIcon from '@/_components/Icons/ArrowIcon'
import MailIcon from '@/_components/Icons/MailIcon'
import MapPinIcon from '@/_components/Icons/MapPinIcon'
import PhoneIcon from '@/_components/Icons/PhoneIcon'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import './style.css'
import OrderForm from '../_components/Sections/OrderForm/OrderForm'
import { getTranslation } from '@/_i18n'

// export const metadata: Metadata = {
// 	title: 'Rezervace',
// 	description:
// 		'Zarezervujte si svůj termín v jednom za našich apartmánů v Moravském Karlově. Spolu s ubytováním nabízíme i keramickou dílnu, kde si můžete vyzkoušet řemeslo.',
// }

export const generateMetadata = async ({
	params,
}: {
	params: { lang: string }
}) => {
	const { lang } = params

	const { t } = await getTranslation(lang, 'reservation')

	return {
		title: t('seo.title'),
		description: t('seo.description'),
	}
}

interface IParams {
	lang: string
}

const Rezervace: NextPage<{ params: IParams }> = async ({
	params: { lang },
}) => {
	const { t } = await getTranslation(lang, 'reservation')

	return (
		<div className='pt-32'>
			<section className='container'>
				<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60'>
					{t('title')}
				</h1>
				<p className='text-center mt-2'>{t('text')}</p>

				<div className='flex flex-col md:flex-row gap-10 mt-10 md:mt-0'>
					<div className='flex-1 flex flex-col gap-4'>
						<ArrowIcon className='w-16  hidden md:block self-center svgArrow'></ArrowIcon>

						<div className='border-dotted border-2 rounded-2xl border-secondary p-4'>
							<h2 className='font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
								{t('contactTitle')}
							</h2>

							<ul className='flex flex-col gap-4 mt-8'>
								<li className='flex items-center gap-4 group'>
									<IconButton
										link={'tel:777815909'}
										className='bg-secondary group-hover:bg-golden duration-300'
									>
										<PhoneIcon className='w-8 text-white'></PhoneIcon>
									</IconButton>
									<Link
										className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
										href={'tel:777815909'}
									>
										Tel.: +420 777 815 909
									</Link>
								</li>

								<li className='flex items-center gap-4 group'>
									<IconButton
										link={'mailto:habartovi@email.cz'}
										className='bg-secondary group-hover:bg-golden duration-300'
									>
										<MailIcon className='w-8 text-white'></MailIcon>
									</IconButton>
									<Link
										className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
										href={'mailto:habartovi@email.cz'}
									>
										Email: habartovi@email.cz
									</Link>
								</li>

								<li className='flex items-center gap-4 group'>
									<IconButton
										link={
											'https://www.google.com/maps/place/Ubytov%C3%A1n%C3%AD+a+Keramick%C3%A1+d%C3%ADlna+Habartovi/@50.0283912,16.7724516,17z/data=!3m1!4b1!4m6!3m5!1s0x471206db20b953a9:0xc2a7d302ae1b4e1d!8m2!3d50.0283878!4d16.7750265!16s%2Fg%2F11ggs8kp5l?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D'
										}
										className='bg-secondary group-hover:bg-golden duration-300'
										target='_blank'
									>
										<MapPinIcon className='w-8 text-white'></MapPinIcon>
									</IconButton>
									<Link
										className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
										href={
											'https://www.google.com/maps/place/Ubytov%C3%A1n%C3%AD+a+Keramick%C3%A1+d%C3%ADlna+Habartovi/@50.0283912,16.7724516,17z/data=!3m1!4b1!4m6!3m5!1s0x471206db20b953a9:0xc2a7d302ae1b4e1d!8m2!3d50.0283878!4d16.7750265!16s%2Fg%2F11ggs8kp5l?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D'
										}
										target='_blank'
									>
										Červená Voda, Moravský Karlov 103
									</Link>
								</li>
							</ul>

							<div className='rounded-2xl bg-goldenAccent/10 overflow-hidden h-96 mt-8 w-full'>
								<iframe
									title='Map'
									width='100%'
									height='100%'
									src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moravsk%C3%BD%20Karlov%20103+(Ubytov%C3%A1n%C3%AD%20a%20Keramick%C3%A1%20d%C3%ADlna%20Habartovi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
								></iframe>
							</div>
						</div>
					</div>
					<div className='flex-1 mt-10'>
						<h2 className='font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
							{t('formTitle')}
						</h2>
						<OrderForm lang={lang} />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Rezervace
