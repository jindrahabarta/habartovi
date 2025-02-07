import React from 'react'
import Image from 'next/image'

import SpiralaImg from '@/../public/images/Keramická dílna/Spirala.webp'

const Spirala = () => {
	return (
		<section
			id='o-mne'
			className='container py-10 md:py-20 flex flex-col md:flex-row gap-10 xl:gap-32'
		>
			<div className='flex-[2] relative'>
				<h2 className='font-oswald italic text-[3rem] leading-none md:text-[6rem] text-golden md:text-[#f1d9a8]'>
					&quot;Spirála&quot;
				</h2>

				<p className='mt-10 '>
					Jako dekorační prvek často používám meandr – spirálový tvar
					– symbolizující plynutí života, přírodní rytmy, energie
					ženského cyklu, střídání ročních dob…
				</p>
				<p className='mt-4'>
					Z velké části tvořím na hrnčířském kruhu nádoby určené pro
					každodenní užívání. Glazuji matnými glazurami nebo nechávám
					jejich povrch režný – bez glazury – právě ten svou
					strukturou nejvíce připomíná živou přírodu.
				</p>
				<p className='mt-4'>
					V poslední době se také nechávám inspirovat starobylou
					selskou keramikou, glazuji polomatnou hnědou glazurou a
					zdobím ji jednoduchým razítkováním.
				</p>
			</div>

			<div className='flex-1'>
				<Image
					src={SpiralaImg}
					alt={'Obrázek keramického výrobku'}
					width={800}
					height={800}
					className='rounded-2xl aspect-square md:aspect-[4/5] object-cover'
				></Image>
			</div>
		</section>
	)
}

export default Spirala
