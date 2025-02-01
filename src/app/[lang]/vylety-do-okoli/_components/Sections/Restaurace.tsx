import BallIcon from '@/_components/Icons/BallIcon'
import CoffeeIcon from '@/_components/Icons/CoffeeIcon'
import FoodIcon from '@/_components/Icons/FoodIcon'
import LinkArrowIcon from '@/_components/Icons/LinkArrowIcon'
import Link from 'next/link'
import React from 'react'

const Restaurace = () => {
	return (
		<section className='bg-green2 py-20'>
			<div className='container'>
				<h2 className='font-oswald text-4xl leading-tight text-golden'>
					Tipy na zařízení
				</h2>

				<div className='mt-16 flex flex-col sm:flex-row sm:flex-wrap gap-10'>
					<div className='flex-1'>
						<span className='flex items-center gap-2'>
							<FoodIcon className='text-golden w-10'></FoodIcon>
							<h3 className='font-oswald leading-tight text-golden'>
								Restaurace
							</h3>
						</span>

						<ul className='mt-8'>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Čmeláků
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>

							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Čmeláků
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Čmeláků
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex-1'>
						<span className='flex items-center gap-2'>
							<CoffeeIcon className='text-golden w-10'></CoffeeIcon>
							<h3 className='font-oswald leading-tight text-golden'>
								Kavárny
							</h3>
						</span>

						<ul className='mt-8'>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Rajchlů
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex-1'>
						<span className='flex items-center gap-2'>
							<BallIcon className='text-golden w-10'></BallIcon>
							<h3 className='font-oswald leading-tight text-golden'>
								Sport
							</h3>
						</span>

						<ul className='mt-8'>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Ski resort Dolní Morava
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Ski resort Buková hora
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Čmeláků
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Čmeláků
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Restaurace
