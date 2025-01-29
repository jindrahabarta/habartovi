import IconButton from '@/_components/Buttons/IconButton'
import MailIcon from '@/_components/Icons/MailIcon'
import MapPinIcon from '@/_components/Icons/MapPinIcon'
import PhoneIcon from '@/_components/Icons/PhoneIcon'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Rezervace',
}

const Rezervace = () => {
	return (
		<div className='pt-20'>
			<section className='container'>
				<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60'>
					Rezervace
				</h1>
				<p className='text-center'>
					Zarezervovat termín si můžete přes rezervační formulář, my
					však preferujeme domluvu přes email, či telefon.
				</p>

				<div className='flex flex-col md:flex-row mt-10 gap-10'>
					<div className='flex-1'>
						<h2 className='font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
							Kontakt
						</h2>

						<ul className='flex flex-col gap-4 mt-8'>
							<li className='flex items-center gap-4 group'>
								<IconButton
									link={'tel:775180052'}
									className='bg-secondary group-hover:bg-golden duration-300'
								>
									<PhoneIcon className='w-8 text-white'></PhoneIcon>
								</IconButton>
								<Link
									className='text-lg sm:text-xl font-bold font-oswald group-hover:text-golden duration-300'
									href={'tel:775180052'}
								>
									Tel.: +420 775 180 052
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
									href={'sdfs'}
								>
									Email.: habartovi@email.cz
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

						<div className='rounded-2xl bg-white overflow-hidden h-96 mt-8 w-full'>
							<iframe
								width='100%'
								height='100%'
								src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moravsk%C3%BD%20Karlov%20103+(Ubytov%C3%A1n%C3%AD%20a%20Keramick%C3%A1%20d%C3%ADlna%20Habartovi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
							></iframe>
						</div>
					</div>
					<div className='flex-1'>
						<h2 className='font-oswald opacity-60 text-3xl sm:text-4xl leading-tight text-golden'>
							Rezervační formulář
						</h2>
						<iframe
							id='embed-4pKpEM_bOPm67oIBNWVPI'
							src='https://www.megaubytko.cz/embed/booking?id=embed-4pKpEM_bOPm67oIBNWVPI&amp;accommodationId=8116&amp;token=4f03dee24d9dcfadc8403440fbfffef7&amp;primary_color=rgba%28166%2C179%2C125%2C1%29&amp;secondary_color=%23f0a559&amp;background_color=rgba%28255%2C255%2C255%2C1%29&amp;text_color=rgba%2824%2C29%2C34%2C1%29'
							width='100%'
							height='900px'
							scrolling='no'
							className='mt-8'
						></iframe>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Rezervace
