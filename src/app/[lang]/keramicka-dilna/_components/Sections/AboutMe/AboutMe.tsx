import React from 'react'
import Image from 'next/image'

import AboutMeImg from '@/../public/images/Keramická dílna/AboutHelena.webp'

const AboutMe = () => {
	return (
		<section
			id='o-mne'
			className='container py-10 md:py-20 flex flex-col-reverse md:flex-row gap-10 xl:gap-32'
		>
			<div className='flex-1'>
				<Image
					src={AboutMeImg}
					alt={'Obrázek Helena Habartová s hrnčířským kruhem'}
					width={800}
					height={800}
					className='rounded-2xl aspect-square md:aspect-[4/5] object-cover'
				></Image>
			</div>
			<div className='flex-[2] relative'>
				<h1 className='font-oswald text-[5rem] leading-none md:text-[8rem] text-[#f1d9a8]'>
					About
				</h1>
				<h1 className='pl-8 md:pl-16 relative font-oswald '>
					Helena Habartová
				</h1>

				<p className='mt-10'>
					Keramiku jsem poznala, když mi bylo dvacet. Je to nádherné
					řemeslo, které mě k sobě přitáhlo ve chvíli, kdy jsem
					hledala své místo na světě. V malých pražských dílnách jsem
					se naučila pracovat na hrnčířském kruhu. Měla jsem štěstí na
					výborné učitele, jimž vděčím za to, co dnes umím. Práce s
					mokrou hlínou ve mě probouzí fantazii a lásku k přírodě.
				</p>

				<p className='mt-4'>
					I když je keramická hlína speciálně upravovaná pro
					modelování, točení i pálení - celý ten výrobní postup,
					kterým musí keramická nádoba projít, než-li se dostane do
					vašich rukou - je to stále kus země, přírodní materiál,
					kterému se učím rozumět a spolupracovat s ním. Je to
					nekonečný příběh vzájemného poznávání a zrání. Neustálé
					objevování nových možností, jak s tímto krásným a živým
					materiálem pracovat.
				</p>
			</div>
		</section>
	)
}

export default AboutMe
