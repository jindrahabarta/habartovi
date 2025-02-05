import React from 'react'
import Image from 'next/image'

import TvorivaSetkaniImg from '@/../public/images/Keramická dílna/TvorivaSetkani.jpg'
import Link from 'next/link'

const TvorivaSetkani = () => {
	return (
		<section id='tvoriva-setkani' className='container py-10 md:py-20'>
			<div className='flex flex-col md:flex-row gap-10 xl:gap-32'>
				<div className='flex-[2] relative'>
					<h2 className='font-oswald text-[3rem] leading-none md:text-[6rem] text-golden md:text-[#f1d9a8]'>
						Tvořivá setkání
					</h2>
					<p className='mt-10'>
						Vedle své vlastní tvorby se velmi ráda věnuji práci s
						lidmi. Nabízím možnost tvořivých setkání, kde si
						jednoduchými modelovacími technikami vyrobíte svůj
						vlastní výrobek anebo si za hrnčířským kruhen vyzkoušíte
						práci hrnčířů. Program přizpůsobuji možnostem
						návštěvníků - úplným začátečníkům i pokročilým.
					</p>

					<p className='mt-10'>
						<strong>1 hodina</strong> s odborným vedením stojí
						<strong> 400,-Kč</strong>
					</p>

					<p className='mt-4'>
						<strong>Dokončení a vypálení</strong> jednoho výrobku o
						hmotnosti do 1kg stojí stojí
						<strong> 90,-Kč</strong>
					</p>

					<p className='mt-4'>
						Termín setkání je nutné předem domluvit na tel. č.:{' '}
						<Link
							className='text-black hover:text-secondary'
							href={'tel:+420773206793'}
						>
							<strong>773 206 793</strong>
						</Link>
						, nebo přes email:{' '}
						<Link
							className='text-black hover:text-secondary'
							href={'mailto:habartovi@email.cz'}
						>
							<strong>habartovi@email.cz</strong>
						</Link>
					</p>

					<p className='mt-4'>
						Těm, kteří jsou zdaleka, dokončené výrobky posílám,
						dobře zabalené a zajištěné proti rozbití.
					</p>

					<p className='mt-4'>
						Chcete-li u u nás strávit více času, můžete využít
						možnosti{' '}
						<Link
							className='text-black hover:text-secondary'
							href={'/ubytovani'}
						>
							<strong>ubytování v soukromí</strong>
						</Link>{' '}
						ve stejném domě, kde je i dílna.
					</p>
				</div>
				<div className='flex-1'>
					<Image
						src={TvorivaSetkaniImg}
						alt={'O mě'}
						width={800}
						height={800}
						className='rounded-2xl aspect-[4/5] object-cover md:-translate-y-56'
					></Image>
				</div>
			</div>
		</section>
	)
}

export default TvorivaSetkani
