import React from 'react'
import Image from 'next/image'

import ZdenekAHelenaImg from '@/../public/images/ZdenekAHelena.jpg'

const ZdenekAHelena = () => {
	return (
		<section className='py-20 container flex justify-center'>
			<Image
				src={ZdenekAHelenaImg}
				alt={'Zdeněk a Helena'}
				width={1000}
				height={800}
				className='w-full'
			></Image>
		</section>
	)
}

export default ZdenekAHelena
