import React from 'react'

import Img from '@/../public/images/Ubytování.jpg'
import ApartmentCard from './ApartmentCard'

const ApartmentSelection = () => {
	return (
		<section className='container flex flex-col md:flex-row gap-10  py-10'>
			<ApartmentCard
				title={'Malý apartmán'}
				text={
					'V prvním podlaží naší velké usedlosti z 19. století je pro vás připravený malý a útulný byt řešený formou studia. Jeho okna jsou orientovaná na západ a poskytují kouzelný výhled na celé údolí.'
				}
				image={Img}
				link={'/ubytovani/maly-apartman'}
				className='bg-green1'
			></ApartmentCard>

			<ApartmentCard
				title={'Velký apartmán'}
				text={
					'Velký podkrovní byt disponuje dvěmi ložnicemi, třílůžkovou a dvoulůžkovou. Prostorné obývací místnosti dominují kachlová kamna na dřevo, velká pohovka a kompletně vybavený kuchyňský kout.'
				}
				image={Img}
				link={'/ubytovani/velky-apartman'}
				className='bg-green2'
			></ApartmentCard>
		</section>
	)
}

export default ApartmentSelection
