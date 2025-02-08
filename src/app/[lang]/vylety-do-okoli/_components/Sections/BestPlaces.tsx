import React from 'react'
import TripsGrid from '../TripsGrid'
import { getTranslation } from '@/_i18n'

import KrizovaHora from '@/../public/images/okoli/vyznamna-mista/KrizovaHora.webp'
import DolniMorava from '@/../public/images/okoli/vyznamna-mista/DM.webp'
import Hurka from '@/../public/images/okoli/vyznamna-mista/TvrzHurka.webp'
import Pastviny from '@/../public/images/okoli/vyznamna-mista/Pastviny.webp'

const BestPlaces = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'trips')

	const bestPlaces = [
		{
			title: 'Křížová hora',
			link: 'https://www.kudyznudy.cz/aktivity/rozhledna-krizova-hora',
			desc: 'Východně od Červené Vody na jednom z vrcholů Jeřábské vrchoviny v nadmořské výšce 735 m stojí na starobylém poutním místě věž s vyhlídkovým ochozem ve výšce 25 m. Z rozhledny se otevírají fantastické rozhledy.',
			img: KrizovaHora,
		},
		{
			title: 'Dolní Morava',
			link: 'https://www.dolnimorava.cz/',
			desc: 'Užijte si s rodinou nejlepší den na českých horách s horami zážitků. V rámci resortu si užijete Sky Bridge 721, Stezku v oblacích, dětské parky i lanovku.',
			img: DolniMorava,
		},
		{
			title: 'Tvrz Hůrka',
			link: 'https://www.tvrzhurka.cz/',
			desc: 'Dělostřelecká tvrz Hůrka je jednou z pěti stavebně dokončených tvrzí v České republice budovaných v rámci československého opevnění proti Německu.',
			img: Hurka,
		},
		{
			title: 'Přehrada Pastviny',
			link: 'https://prehrada-pastviny.cz/cs/',
			desc: 'Vítejte v jedné z nejkrásnějších lokalit Orlických hor, vítejte u Pastvinské přehrady. V letošním roce je tomu již 84 let, kdy voda řeky Orlice zalila malebné údolí obce Pastviny.',
			img: Pastviny,
		},
	]
	return (
		<section className='py-20 container'>
			<h2 className='font-oswald opacity-60 sm:text-4xl leading-tight text-golden'>
				{t('bestPlaces.title')}
			</h2>

			<TripsGrid trips={bestPlaces}></TripsGrid>
		</section>
	)
}

export default BestPlaces
