import React from 'react'
import TripsGrid from '../TripsGrid'

import Img from '@/../public/images/testimg.jpg'

const bestPlaces = [
	{
		title: 'Křížová hora',
		link: 'xdxdxdd',
		desc: 'sldjflsdfj',
		img: Img,
	},
	{
		title: 'Křížová hora',
		link: 'xdxdxdd',
		desc: 'sldjflsdfj',
		img: Img,
	},
	{
		title: 'Křížová hora',
		link: 'xdxdxdd',
		desc: 'sldjflsdfj',
		img: Img,
	},
]

const BestPlaces = () => {
	return (
		<section className='py-20 container'>
			<h2 className='font-oswald opacity-60 text-4xl leading-tight text-golden'>
				Významná místa
			</h2>

			<TripsGrid trips={bestPlaces}></TripsGrid>
		</section>
	)
}

export default BestPlaces
