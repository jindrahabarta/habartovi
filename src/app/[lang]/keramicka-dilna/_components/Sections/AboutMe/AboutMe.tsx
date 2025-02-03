import React from 'react'
import Image from 'next/image'

import AboutMeImg from '@/../public/images/Keramická dílna/bg1.jpg'

const AboutMe = () => {
	return (
		<section id='o-mne' className='container py-20'>
			<div className='flex flex-col-reverse md:flex-row gap-10 xl:gap-32'>
				<div className='flex-1'>
					<Image
						src={AboutMeImg}
						alt={'O mě'}
						width={800}
						height={800}
						className='rounded-2xl aspect-[4/5] object-cover'
					></Image>
				</div>
				<div className='flex-[2] relative'>
					<h1 className='font-oswald md:text-[8rem] text-[#f1d9a8]'>
						About
					</h1>
					<h1 className='pl-16 relative font-oswald '>
						Helena Habartová
					</h1>

					<p className='mt-10'>
						Keramiku jsem poznala, když mi bylo dvacet. Je to
						nádherné řemeslo, které mě k sobě přitáhlo ve chvíli,
						kdy jsem hledala své místo na světě. V malých pražských
						dílnách jsem se naučila pracovat na hrnčířském kruhu.
						Měla jsem štěstí na výborné učitele, jimž vděčím za to,
						co dnes umím. Práce s mokrou hlínou ve mě probouzí
						fantazii a lásku k přírodě. I když je keramická hlína
						speciálně upravovaná pro modelování, točení i pálení -
						celý ten výrobní postup, kterým musí keramická nádoba
						projít, než-li se dostane do vašich rukou - je to stále
						kus země, přírodní materiál, kterému se učím rozumět a
						spolupracovat s ním. Je to nekonečný příběh vzájemného
						poznávání a zrání. Neustálé objevování nových možností,
						jak s tímto krásným a živým materiálem pracovat.
					</p>
				</div>
			</div>

			<div className='mt-20 flex justify-center gap-10 xl:gap-32 relative'>
				<div className='max-w-4xl'>
					<h2 className='font-oswald italic text-center  md:text-[6rem] text-[#f1d9a8]'>
						&quot;Spirála&quot;
					</h2>

					<p className='mt-10 '>
						Jako dekorační prvek často používám meandr – spirálový
						tvar – symbolizující plynutí života, přírodní rytmy,
						energie ženského cyklu, střídání ročních dob…
					</p>
					<p className='mt-4'>
						Z velké části tvořím na hrnčířském kruhu nádoby určené
						pro každodenní užívání. Glazuji matnými glazurami nebo
						nechávám jejich povrch režný – bez glazury – právě ten
						svou strukturou nejvíce připomíná živou přírodu.
					</p>
					<p className='mt-4'>
						V poslední době se také nechávám inspirovat starobylou
						selskou keramikou, glazuji polomatnou hnědou glazurou a
						zdobím ji jednoduchým razítkováním.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
