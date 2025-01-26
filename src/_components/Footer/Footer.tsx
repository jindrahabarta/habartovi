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

const Footer = () => {
	return (
		<footer className='bg-secondary pt-12 w-full text-white'>
			<div className='container w-full'>
				<div className='flex gap-10 justify-between'>
					<div className='flex-1 flex flex-col justify-between'>
						<Link href={'/'}>
							<Image
								src={LogoImg}
								alt='Habartovi logo'
								width={200}
							></Image>
						</Link>

						<div>
							<ul>
								<li className='flex gap-2 items-center'>
									<Link
										className='flex gap-2 items-center group'
										href={'/'}
									>
										<div
											className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent`}
										>
											<PhoneIcon className='w-4 text-white'></PhoneIcon>
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
											className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent`}
										>
											<MailIcon className='w-4 text-white'></MailIcon>
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
											className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent`}
										>
											<MapPinIcon className='w-4 text-white'></MapPinIcon>
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
							<li className='w-full py-1 bg-white/50'>
								<Link
									className='text-white font-bold'
									href={'/'}
								>
									Domů
								</Link>
							</li>
						</ul>
					</div>

					<div className='flex-1'>
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
									className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent`}
								>
									<InstagramIcon className='w-4 text-white' />
								</div>
							</Link>
							<Link
								className='flex gap-2 items-center group'
								href={'/'}
							>
								<div
									className={`duration-300 flex justify-center items-center w-8 h-8 rounded-lg bg-secondaryAccent group-hover:bg-goldenAccent`}
								>
									<FacebookIcon className='w-4 text-white'></FacebookIcon>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full h-[1px] bg-background mt-8'></div>
				<div className='mt-2 pb-1 text-center '>
					<p className='text-base'>
						Web vytvořilo studio{' '}
						<Link
							className='text-orange-500 hover:underline '
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
