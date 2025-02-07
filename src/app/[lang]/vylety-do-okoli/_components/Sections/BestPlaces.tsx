import React from 'react'
import TripsGrid from '../TripsGrid'

import Img from '@/../public/images/BlogPlaceholderImage.webp'

const bestPlaces = [
	{
		title: 'Křížová hora',
		link: 'https://www.kudyznudy.cz/aktivity/rozhledna-krizova-hora',
		desc: 'Východně od Červené Vody na jednom z vrcholů Jeřábské vrchoviny v nadmořské výšce 735 m stojí na starobylém poutním místě věž s vyhlídkovým ochozem ve výšce 25 m. Z rozhledny se otevírají fantastické rozhledy.',
		img: Img,
	},
	{
		title: 'Dolní morava',
		link: 'https://www.dolnimorava.cz/',
		desc: 'Užijte si s rodinou nejlepší den na českých horách s horami zážitků. V rámci resortu si užijete Sky Bridge 721, Stezku v oblacích, dětské parky i lanovku.',
		img: Img,
	},
	{
		title: 'Tvrz Hůrka',
		link: 'https://www.tvrzhurka.cz/',
		desc: 'Dělostřelecká tvrz Hůrka je jednou z pěti stavebně dokončených tvrzí v České republice budovaných v rámci československého opevnění proti Německu.',
		img: Img,
	},
	{
		title: 'Přehrada Pastviny',
		link: 'https://prehrada-pastviny.cz/cs/',
		desc: 'Vítejte v jedné z nejkrásnějších lokalit Orlických hor, vítejte u Pastvinské přehrady. V letošním roce je tomu již 84 let, kdy voda řeky Orlice zalila malebné údolí obce Pastviny.',
		img: Img,
	},
]

const BestPlaces = () => {
	return (
		<section className='py-20 container'>
			<h2 className='font-oswald opacity-60 sm:text-4xl leading-tight text-golden'>
				Významná místa
			</h2>

			<TripsGrid trips={bestPlaces}></TripsGrid>
		</section>
	)
}

export default BestPlaces
