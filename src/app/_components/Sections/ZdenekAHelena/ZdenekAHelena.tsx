import React from 'react'
import Image from 'next/image'

import ZdenekAHelenaImg from '@/../public/images/Zdenek_a_helena_split2.png'

const ZdenekAHelena = () => {
	return (
		<section
			id='ZdenekAHelena'
			className='bg-no-repeat bg-cover bg-center bg-fixed relative'
			style={{
				backgroundImage: `url(${ZdenekAHelenaImg.src})`,
				backgroundSize: '100% auto',
			}}
		>
			<div className='absolute w-full h-full flex '>
				<div
					id='ZaHBckdropLeft'
					className='w-full h-full opacity-80 backdrop-grayscale'
				></div>
				<div
					id='ZaHBckdropRight'
					className='w-full h-full opacity-0 backdrop-grayscale'
				></div>
			</div>
			<div className='container h-[150vh] relative py-20'>
				<div id='ZaHLeft' className='h-1/2 w-1/3'>
					<h1 className='ZaHScrollSpeedLeft opacity-0 translate-y-20 font-oswald  text-5xl sm:text-6xl leading-tight text-golden'>
						Zdeněk
					</h1>

					<p className='ZaHScrollSpeedLeft opacity-0 translate-y-32 text-white italic text-lg mt-8'>
						Někdy kluk, někdy chlap se srdcem. Bývalý pomocník
						strojvedoucího, misionář; nyní žijící z výsledků své
						obchodní činnosti. Celoživotní hledač radosti, kterou
						již ve svých letech začínám žít.
					</p>
				</div>

				<div id='ZaHRight' className=' h-1/2 flex justify-end'>
					<div className='w-1/3'>
						<h1 className='ZaHScrollSpeedRight opacity-0 translate-y-20 font-oswald  text-5xl sm:text-6xl leading-tight text-golden'>
							Helena
						</h1>

						<p className='ZaHScrollSpeedRight opacity-0 translate-y-32 text-white italic text-lg mt-8'>
							Keramiku jsem poznala, když mi bylo dvacet. Je to
							nádherné řemeslo, které mě k sobě přitáhlo ve
							chvíli, kdy jsem hledala své místo na světě. Práce s
							mokrou hlínou ve mě probouzí fantazii a lásku k
							přírodě
						</p>
					</div>
				</div>
				{/* <Image
					src={ZdenekAHelenaImg}
					alt={'Zdeněk a Helena'}
					width={1000}
					height={800}
					className='w-full'
					></Image> */}
			</div>
		</section>
	)
}

export default ZdenekAHelena
