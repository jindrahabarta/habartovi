import React from 'react'
import Image from 'next/image'

import Img from '@/../public/images/Ubytování.jpg'
import Link from 'next/link'
import ApartmentCard from './ApartmentCard'

const ApartmentSelection = () => {
	return (
		<section className='container flex flex-col md:flex-row gap-10  py-10'>
			<ApartmentCard
				title={'Malý apartmán'}
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Impedit laboriosam provident commodi dicta nobisratione tempora possimus a consequatur rem eligendi oditaccusantium saepe maiores hic dolores, quas, dolor ad.'
				}
				image={Img}
				link={'/ubytovani/maly-apartman'}
				className='bg-green1'
			></ApartmentCard>

			<ApartmentCard
				title={'Velký apartmán'}
				text={
					'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Impedit laboriosam provident commodi dicta nobisratione tempora possimus a consequatur rem eligendi oditaccusantium saepe maiores hic dolores, quas, dolor ad.'
				}
				image={Img}
				link={'/ubytovani/velky-apartman'}
				className='bg-green2'
			></ApartmentCard>
		</section>
	)
}

export default ApartmentSelection
