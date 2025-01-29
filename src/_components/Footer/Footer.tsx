import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import LogoImg from '@/../public/images/habartovi-logo.png'
import IconButton from '../Buttons/IconButton'
import PhoneIcon from '../Icons/PhoneIcon'
import MailIcon from '../Icons/MailIcon'
import MapPinIcon from '../Icons/MapPinIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import FacebookIcon from '../Icons/FacebookIcon'
import MegaUbytkoIcon from '../Icons/MegaUbytkoIcon'

const Footer = () => {
	return (
		<footer className='bg-secondary pt-12 w-full text-white'>
			<div className='container w-full'>
				<div className='flex flex-col flex-wrap sm:flex-row gap-10 justify-between'>
					<div className='flex-1 flex flex-col justify-between gap-8'>
						<Link className='w-fit' href={'/'}>
							<Image
								src={LogoImg}
								alt='Habartovi logo'
								width={200}
							></Image>
						</Link>

						<div>
							<ul>
								<li className='flex  gap-2 items-center'>
									<Link
										className='flex gap-2 items-center group'
										href={'/'}
									>
										<div
											className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md`}
										>
											<PhoneIcon className='w-5 text-white'></PhoneIcon>
										</div>
										<span className='text-white group-hover:text-goldenAccent duration-300 font-bold'>
											777 777 777
										</span>
									</Link>
								</li>
								<li className='flex gap-2 items-center mt-2'>
									<Link
										className='flex gap-2 items-center group'
										href={'/'}
									>
										<div
											className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md`}
										>
											<MailIcon className='w-5 text-white'></MailIcon>
										</div>
										<span className='text-white group-hover:text-goldenAccent duration-300 font-bold'>
											habartovi@email.cz
										</span>
									</Link>
								</li>
								<li className='flex gap-2 items-center mt-2'>
									<Link
										className='flex gap-2 items-center group'
										href={'/'}
									>
										<div
											className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md`}
										>
											<MapPinIcon className='w-5 text-white'></MapPinIcon>
										</div>
										<span className='text-white group-hover:text-goldenAccent duration-300 font-bold'>
											Moravský Karlov 103
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex-1'>
						<h3 className=' font-bold'>Menu</h3>

						<ul className='max-w-xs'>
							<li className='w-full py-1 '>
								<Link
									className='text-white text-lg  w-full inline-block font-bold'
									href={'/'}
								>
									Domů
								</Link>
							</li>
							<li className='w-full py-1 '>
								<Link
									className='text-white text-lg  w-full inline-block font-bold'
									href={'/'}
								>
									Domů
								</Link>
							</li>
						</ul>
					</div>

					<div className='w-full md:flex-1'>
						<div className='rounded-2xl bg-white overflow-hidden h-44 w-full'>
							<iframe
								width='100%'
								height='100%'
								src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moravsk%C3%BD%20Karlov%20103+(Ubytov%C3%A1n%C3%AD%20a%20Keramick%C3%A1%20d%C3%ADlna%20Habartovi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
							></iframe>
						</div>

						<div className='flex justify-end gap-2 items-center mt-4'>
							<Link
								className='flex gap-2 items-center group'
								href={'/'}
							>
								<div
									className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md`}
								>
									<InstagramIcon className='w-5 text-white' />
								</div>
							</Link>
							<Link
								className='flex gap-2 items-center group'
								href={'/'}
							>
								<div
									className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md`}
								>
									<FacebookIcon className='w-6 text-white' />
								</div>
							</Link>
							<Link
								className='flex gap-2 items-center group '
								href={'/'}
							>
								<div
									className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent shadow-md`}
								>
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
							href='/'
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
