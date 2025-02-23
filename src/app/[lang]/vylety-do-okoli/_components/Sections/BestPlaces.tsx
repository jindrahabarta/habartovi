import React from 'react'
import TripsGrid from '../TripsGrid'
import { getTranslation } from '@/_i18n'

import KrizovaHora from '@/../public/images/okoli/vyznamna-mista/KrizovaHora.webp'
import Klepac from '@/../public/images/okoli/vyznamna-mista/klepac.webp'
import Hurka from '@/../public/images/okoli/vyznamna-mista/TvrzHurka.webp'
import Pastviny from '@/../public/images/okoli/vyznamna-mista/Pastviny.webp'
import Bukovka from '@/../public/images/okoli/vyznamna-mista/BukovaHora.webp'
import Hedec from '@/../public/images/okoli/vyznamna-mista/Hedec.webp'

const BestPlaces = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'trips')

	const bestPlaces = [
		{
			title: 'Křížová hora',
			link: 'https://www.kudyznudy.cz/aktivity/rozhledna-krizova-hora',
			desc: t('bestPlaces.krizovaHora'),
			img: KrizovaHora,
		},
		{
			title: 'Klepáč',
			link: 'https://www.kudyznudy.cz/aktivity/rozhledna-klepy',
			desc: t('bestPlaces.klepac'),
			img: Klepac,
		},
		{
			title: 'Tvrz Hůrka',
			link: 'https://www.tvrzhurka.cz/',
			desc: t('bestPlaces.tvrzHurka'),
			img: Hurka,
		},
		{
			title: 'Přehrada Pastviny',
			link: 'https://prehrada-pastviny.cz/cs/',
			desc: t('bestPlaces.pastviny'),
			img: Pastviny,
		},
		{
			title: 'Skiresort Buková Hora',
			link: 'https://www.skibukovka.cz/cz/',
			desc: t('bestPlaces.bukovka'),
			img: Bukovka,
		},
		{
			title: 'Hora Matky Boží (Hedeč)',
			link: 'https://www.klasterkraliky.cz/',
			desc: t('bestPlaces.hedec'),
			img: Hedec,
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
