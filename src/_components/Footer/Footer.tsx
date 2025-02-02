import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import LogoImg from '@/../public/images/habartovi-logo.png'
import PhoneIcon from '../Icons/PhoneIcon'
import MailIcon from '../Icons/MailIcon'
import MapPinIcon from '../Icons/MapPinIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import MegaUbytkoIcon from '../Icons/MegaUbytkoIcon'
import LogoOrangeBlack from '../Icons/Logos/LogoOrangeBlack'

const Footer = () => {
	return (
		<footer
			id='footer'
			className='bg-secondary rounded-b-2xl md:rounded-b-none pt-12 w-full text-white'
		>
			<div className='container w-full'>
				<div className='flex flex-col md:flex-wrap sm:flex-row gap-6 sm:gap-10 justify-between'>
					<div className='flex-1 flex flex-col justify-between gap-8'>
						<Link href={'/'}>
							<LogoOrangeBlack className='w-2/3 sm:w-4/5 lg:w-2/3 text-white' />
						</Link>

						<div>
							<ul>
								<li className='flex  gap-2 items-center'>
									<Link
										className='flex gap-2 items-center group'
										href={'tel:+420775180052'}
									>
										<div className='duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md'>
											<PhoneIcon className='w-5 text-white'></PhoneIcon>
										</div>
										<span className='text-white group-hover:text-orange duration-300 font-bold'>
											+420 775 180 052
										</span>
									</Link>
								</li>
								<li className='flex gap-2 items-center mt-2'>
									<Link
										className='flex gap-2 items-center group'
										href={'mailto:habartovi@email.cz'}
									>
										<div className='duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md'>
											<MailIcon className='w-5 text-white'></MailIcon>
										</div>
										<span className='text-white group-hover:text-orange duration-300 font-bold'>
											habartovi@email.cz
										</span>
									</Link>
								</li>
								<li className='flex gap-2 items-center mt-2'>
									<Link
										className='flex gap-2 items-center group'
										href={
											'https://www.google.com/maps/place/Ubytov%C3%A1n%C3%AD+a+Keramick%C3%A1+d%C3%ADlna+Habartovi/@50.0283912,16.7724516,17z/data=!3m1!4b1!4m6!3m5!1s0x471206db20b953a9:0xc2a7d302ae1b4e1d!8m2!3d50.0283878!4d16.7750265!16s%2Fg%2F11ggs8kp5l?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D'
										}
										target='_blank'
									>
										<div className='duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md'>
											<MapPinIcon className='w-5 text-white'></MapPinIcon>
										</div>
										<span className='text-white group-hover:text-orange duration-300 font-bold'>
											Moravský Karlov 103
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex-1'>
						<h3 className=' font-bold'>Menu</h3>

						<ul className='max-w-xs mt-2'>
							<li className='w-full  '>
								<Link
									className='text-white py-0.5 text-lg hover:text-orange w-full inline-block font-bold'
									href={'/'}
								>
									Domů
								</Link>
							</li>
							<li className='w-full  '>
								<Link
									className='text-white py-0.5 text-lg hover:text-orange w-full inline-block font-bold'
									href={'/ubytovani'}
								>
									Ubytování
								</Link>
							</li>
							<li className='w-full  '>
								<Link
									className='text-white py-0.5 text-lg hover:text-orange w-full inline-block font-bold'
									href={'/keramicka-dilna'}
								>
									Keramická dílna
								</Link>
							</li>
							<li className='w-full  '>
								<Link
									className='text-white py-0.5 text-lg hover:text-orange w-full inline-block font-bold'
									href={'/vylety-do-okoli'}
								>
									Okolí
								</Link>
							</li>
							<li className='w-full  '>
								<Link
									className='text-white py-0.5 text-lg hover:text-orange w-full inline-block font-bold'
									href={'/blog'}
								>
									Blog
								</Link>
							</li>
							<li className='w-full  '>
								<Link
									className='text-white py-0.5 text-lg hover:text-orange w-full inline-block font-bold'
									href={'/kontakt'}
								>
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					<div className='w-full md:flex-1'>
						<h3 className=' font-bold'>Mapa</h3>
						<div className='rounded-2xl mt-2 bg-white overflow-hidden h-44 w-full'>
							<iframe
								width='100%'
								height='100%'
								src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moravsk%C3%BD%20Karlov%20103+(Ubytov%C3%A1n%C3%AD%20a%20Keramick%C3%A1%20d%C3%ADlna%20Habartovi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
							></iframe>
						</div>

						<div className='flex justify-end gap-2 items-center mt-4'>
							<Link
								className='flex gap-2 items-center group'
								href={
									'https://www.instagram.com/ubytovani_habartovi/'
								}
								target='_blank'
							>
								<div className='duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md'>
									<InstagramIcon className='w-5 text-white' />
								</div>
							</Link>

							<Link
								className='flex gap-2 items-center group'
								href={
									'https://www.facebook.com/profile.php?id=61562748149456'
								}
								target='_blank'
							>
								<div className='duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md'>
									<FacebookIcon className='w-6 text-white' />
								</div>
							</Link>
							<Link
								className='flex gap-2 items-center group '
								href={
									'https://www.megaubytko.cz/ubytovani-a-keramicka-dilna-habartovi'
								}
								target='_blank'
							>
								<div className='duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md'>
									<MegaUbytkoIcon className='w-6 h-6' />
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full h-[1px] bg-background mt-8'></div>
				<div className='mt-2 pb-1 flex justify-between items-center flex-col sm:flex-row'>
					<p className='text-base'>
						&copy; {new Date().getFullYear()} |{' '}
						<Link
							className='text-orange hover:text-orangeAccent duration-300 font-semibold hover:underline '
							href='/'
						>
							habartovi.cz
						</Link>
					</p>

					<p className='text-base'>
						Web vytvořilo studio{' '}
						<Link
							className='text-orange hover:text-orangeAccent duration-300 font-semibold hover:underline '
							href='http://motionlabs.cz/'
							target='_blank'
						>
							MotionLabs
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
