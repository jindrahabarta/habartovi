import React from 'react'
import Restaurace from './_components/Sections/Restaurace'
import BestPlaces from './_components/Sections/BestPlaces'
import DolniMorava from './_components/Sections/DolniMorava'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Výlety do okolí',
	description: 'Stránka',
}

const VyletyDoOkoli = () => {
	return (
		<div className='pt-32'>
			<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60 container'>
				Výlety do okolí
			</h1>

			<BestPlaces></BestPlaces>
			<Restaurace></Restaurace>

			<DolniMorava></DolniMorava>
		</div>
	)
}

export default VyletyDoOkoli
