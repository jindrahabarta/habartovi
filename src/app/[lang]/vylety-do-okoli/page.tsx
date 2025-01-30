import React from 'react'

import Trips from './_components/Trips'
import Restaurace from './_components/Sections/Restaurace'
import BestPlaces from './_components/Sections/BestPlaces'

const VyletyDoOkoli = () => {
	return (
		<div className='pt-32'>
			<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60 container'>
				Výlety do okolí
			</h1>

			<BestPlaces></BestPlaces>
			<Restaurace></Restaurace>
		</div>
	)
}

export default VyletyDoOkoli
