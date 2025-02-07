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
				<h2 className='font-oswald sm:text-4xl leading-tight text-golden'>
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
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.ucmelaku.cz/'}
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
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.drhermann.cz/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Rezidence Rotter
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={
										'https://www.facebook.com/p/Restaurace-u-Trojice-100057167811453/'
									}
									target='_blank'
								>
									<span className='text-nowrap'>
										U Trojice
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.nacertovce.eu/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Na Čertovce
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.penzionkocanda.cz/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Pohostinství na Kocandě
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
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.reichlkraliky.cz/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Kavárna REICHL
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={
										'https://www.facebook.com/dvurnebes/?locale=cs_CZ'
									}
									target='_blank'
								>
									<span className='text-nowrap'>
										Dvůr nebes
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={
										'https://www.facebook.com/p/Kav%C3%A1rna-Zuzana-V%C3%ADtkov%C3%A1-100095196322904/?_rdr'
									}
									target='_blank'
								>
									<span className='text-nowrap'>
										Kavárna Zuzana Vítková
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://velkolosinskepralinky.cz/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Velkolosinské pralinky
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
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.dolnimorava.cz/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Horský resort Dolní Morava
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={'https://www.skibukovka.cz/cz/'}
									target='_blank'
								>
									<span className='text-nowrap'>
										Horský resort Buková hora
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={
										'https://www.sumperksportuje.cz/aquacentrum/kryty-bazen'
									}
									target='_blank'
								>
									<span className='text-nowrap'>
										Aquacentrum Šumperk
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={
										'https://www.sumperksportuje.cz/bratrusovske-koupaliste/venkovni-bazen-s-toboganem'
									}
									target='_blank'
								>
									<span className='text-nowrap'>
										Letní koupaliště Šumperk
									</span>
									<LinkArrowIcon className='w-4'></LinkArrowIcon>
								</Link>
							</li>
							<li>
								<Link
									className='text-white w-fit mb-2 font-semibold text-xl flex gap-2 items-center hover:gap-3 duration-300 hover:text-goldenAccent'
									href={
										'https://www.termaly-losiny.cz/?page=3&date=1983-4&gad_source=1&gclid=Cj0KCQiA-5a9BhCBARIsACwMkJ63bTRLff7V4MVwE7IgqDVLfJ3tZ5khcl0CM2Po_q_-nk4yffHLv1IaApkVEALw_wcB'
									}
									target='_blank'
								>
									<span className='text-nowrap'>
										Termály Losiny
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
