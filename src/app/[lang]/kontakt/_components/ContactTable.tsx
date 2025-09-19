import IconButton from '@/_components/Buttons/IconButton'
import ArrowIcon from '@/_components/Icons/ArrowIcon'
import FacebookIcon from '@/_components/Icons/FacebookIcon'
import InstagramIcon from '@/_components/Icons/InstagramIcon'
import MailIcon from '@/_components/Icons/MailIcon'
import MapPinIcon from '@/_components/Icons/MapPinIcon'
import PhoneIcon from '@/_components/Icons/PhoneIcon'
import { getTranslation } from '@/_i18n'
import Link from 'next/link'
import React from 'react'

const ContactTable = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'contact')
	return (
		<div className='py-20 flex-1 flex flex-col gap-4'>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='flex-1 '>
					<h2 className='font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
						{t('heading1')}
					</h2>
					<ul className='gap-4 flex flex-col mt-8'>
						<li className='flex items-center gap-4 group'>
							<IconButton
								link={'tel:7778159092'}
								className='bg-secondary group-hover:bg-golden duration-300'
							>
								<PhoneIcon className='w-8 text-white'></PhoneIcon>
							</IconButton>
							<Link
								aria-label='Phone link'
								className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
								href={'tel:777815909'}
							>
								Tel.: +420 777 815 909
							</Link>
						</li>

						<li className='flex items-center gap-4 group'>
							<IconButton
								link={
									'mailto:&#104;&#97;&#98;&#97;&#114;&#116;&#111;&#118;&#105;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#122;'
								}
								className='bg-secondary group-hover:bg-golden duration-300'
							>
								<MailIcon className='w-8 text-white'></MailIcon>
							</IconButton>
							<Link
								aria-label='Email link'
								className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
								href={
									'mailto:&#104;&#97;&#98;&#97;&#114;&#116;&#111;&#118;&#105;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#122;'
								}
							>
								Email:
								&#104;&#97;&#98;&#97;&#114;&#116;&#111;&#118;&#105;&#64;&#101;&#109;&#97;&#105;&#108;&#46;&#99;&#122;
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
								aria-label='Map link'
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

					<h2 className='mt-8 font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
						{t('heading2')}
					</h2>
					<ul className='gap-4 flex flex-col mt-8'>
						<li className='flex items-center gap-4 group'>
							<IconButton
								link={
									'https://www.instagram.com/ubytovani_habartovi/'
								}
								className='bg-secondary group-hover:bg-golden duration-300'
								target='_blank'
							>
								<InstagramIcon className='w-8 text-white'></InstagramIcon>
							</IconButton>
							<Link
								aria-label='Instagram link'
								className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
								href={
									'https://www.instagram.com/ubytovani_habartovi/'
								}
							>
								@ubytovani_habartovi
							</Link>
						</li>

						<li className='flex items-center gap-4 group'>
							<IconButton
								link={
									'https://www.facebook.com/profile.php?id=61562748149456'
								}
								className='bg-secondary group-hover:bg-golden duration-300'
								target='_blank'
							>
								<FacebookIcon className='w-8 text-white'></FacebookIcon>
							</IconButton>
							<Link
								aria-label='Facebook link'
								className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
								href={
									'https://www.facebook.com/profile.php?id=61562748149456'
								}
							>
								Ubytování a Keramická dílna Habartovi
							</Link>
						</li>
					</ul>
				</div>

				<div className='flex-1 lg:flex-[2] sm:flex sm:flex-col'>
					<h2 className='font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
						{t('heading3')}
					</h2>
					<div className='sm:flex-1 rounded-2xl bg-goldenAccent/10  overflow-hidden mt-8 h-full w-full'>
						<iframe
							title='Map'
							className='min-h-96'
							width='100%'
							height='100%'
							src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moravsk%C3%BD%20Karlov%20103+(Ubytov%C3%A1n%C3%AD%20a%20Keramick%C3%A1%20d%C3%ADlna%20Habartovi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactTable
