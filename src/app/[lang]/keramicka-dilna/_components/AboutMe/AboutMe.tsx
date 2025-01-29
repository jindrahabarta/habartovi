import React from 'react'
import Image from 'next/image'

import AboutMeImg from '@/../public/images/Keramická dílna/bg1.jpg'

const AboutMe = () => {
	return (
		<section id='o-mne' className='container py-16 '>
			<div className='flex gap-32'>
				<div className='flex-1'>
					<Image
						src={AboutMeImg}
						alt={'O mě'}
						width={800}
						height={800}
						className='rounded-2xl aspect-[4/5] object-cover'
					></Image>
				</div>
				<div className='flex-[2]'>
					<h1 className='font-oswald opacity-40  md:text-[8rem] text-golden'>
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

			<div className='flex flex-row-reverse mt-16 gap-32'>
				<div className='flex-1'>
					<Image
						src={AboutMeImg}
						alt={'O mě'}
						width={800}
						height={800}
						className='rounded-2xl aspect-[4/5] object-cover'
					></Image>
				</div>
				<div className='flex-[2]'>
					<h1 className='font-oswald opacity-40  md:text-[8rem] text-golden'>
						Spirála
					</h1>

					<p className='mt-10'>
						Jako dekorační prvek ráda používám meandr – spirálový
						tvar, symbolizující plynutí života, přírodní rytmy,
						energie ženského cyklu, střídání ročních dob...
					</p>
					<p className='mt-4'>
						Z velké části tvořím na hrnčířském kruhu nádoby určené
						pro každodenní užívání. Glazuji matnými glazurami nebo
						nechávám jejich povrch režný - bez glazury – právě ten
						svou strukturou nejvíce připomíná živou přírodu.
					</p>
					<p className='mt-4'>
						Svého času mě velmi inspirovala starobylá selská
						keramika, glazovaná polomatnou hnědou glazurou a zdobená
						jednoduchým razítkováním.
					</p>
					<p className='mt-4'>
						Dílna nabízí hotové výrobky nebo si můžete objednat
						zakázku podle své vlastní představy.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
