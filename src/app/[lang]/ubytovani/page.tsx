import React from 'react'
import ApartmentSelection from './_components/Sections/ApartmentSelection/ApartmentSelection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Ubytování',
	description:
		'Nabízíme k pronájmu malý byt, který je součástí staré venkovské usedlosti postavené německou rodinou na přelomu 18. a 19. století',
}

const Ubytovani = () => {
	return (
		<div className='pt-32'>
			<section className='container'>
				<h1 className='font-oswald  md:text-[6rem] leading-tight text-golden/60'>
					Ubytování
				</h1>

				<p></p>
			</section>
			<ApartmentSelection></ApartmentSelection>
		</div>
	)
}

export default Ubytovani
