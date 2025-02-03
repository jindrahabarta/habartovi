import React from 'react'
import Carousel from '../_components/Carousel/Carousel'
import Pricelist from '../_components/Sections/Pricelist/Pricelist'
import OrderForm from '../_components/Sections/OrderForm/OrderForm'
import Features from '../_components/Sections/Features/Features'
import SizeIcon from '@/_components/Icons/SizeIcon'
import SmokingIcon from '@/_components/Icons/SmokingIcon'
import WifiIcon from '@/_components/Icons/WifiIcon'
import BedIcon from '@/_components/Icons/BedIcon'
import TVIcon from '@/_components/Icons/TVIcon'
import BicycleIcon from '@/_components/Icons/BicycleIcon'
import ParkingIcon from '@/_components/Icons/ParkingIcon'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
	title: 'Velký apartmán',
}

const features = [
	{
		text: '30 m2',
		icon: <SizeIcon className='text-golden/80 w-6'></SizeIcon>,
	},
	{
		text: '10 Lůžek',
		icon: <BedIcon className='text-golden/80 w-6'></BedIcon>,
	},
	{
		text: 'WiFi',
		icon: <WifiIcon className='text-golden/80 w-6'></WifiIcon>,
	},
	{
		text: 'Televize',
		icon: <TVIcon className='text-golden/80 w-6'></TVIcon>,
	},
	{
		text: 'Parkování',
		icon: <ParkingIcon className='text-golden/80 w-6'></ParkingIcon>,
	},
	{
		text: 'Kolárna/lyžárna',
		icon: <BicycleIcon className='text-golden/80 w-6'></BicycleIcon>,
	},
	{
		text: 'Nekuřácký pokoj',
		icon: <SmokingIcon className='text-golden/80 w-6'></SmokingIcon>,
	},
]

const prices = [
	{
		price: 450,
		text: 'za osobu a noc.',
	},
	{
		price: 50,
		text: 'za jednoho psa a noc.',
	},
	{
		price: 20,
		text: 'Rekreační poplatek v obci Červená Voda na jednu noc pro osobu starší 18 let.',
	},
]

interface IParams {
	lang: string
}

const VelkyByt: NextPage<{ params: IParams }> = ({ params: { lang } }) => {
	return (
		<div className='pt-14'>
			<Carousel></Carousel>

			<section className='container py-10 flex flex-col xl:flex-row gap-10'>
				<div className='flex-[3] relative '>
					<h1 className='font-oswald opacity-60  md:text-[6rem] leading-tight text-golden'>
						Velký apartmán
					</h1>

					<p className='mt-4'>
						Velký podkrovní byt disponuje dvěmi ložnicemi,
						třílůžkovou a dvoulůžkovou. Prostorné obývací místnosti
						dominují kachlová kamna na dřevo, velká pohovka (2
						přistýlky) a nachází se zde i televize se satelitním
						příjmem. Kompletně vybavený kuchyňský kout s varným
						ostrovem, pečící troubou, myčkou na nádobí a četnými
						úložnými prostory nabízí dostatek místa pro společné
						vaření. Dalším vybavením kuchyně je rychlovarná konvice,
						sklokeramická varná deska, lednice s mrazákem, varné
						nádobí a jídelní servis z naší keramické dílny. Na
						kuchyňský kout navazuje velký jídelní stůl s rohovou
						lavicí a židlemi.
					</p>

					<p className='mt-4'>
						Koupelna je vybavená vestavným umyvadlem a vanou.
						Toaleta je oddělená.
					</p>
					<p className='mt-4'>
						Dvě ložnice na sebe navazují. V první je manželská
						postel a samostatné lůžko, ve druhé dvě samostatné
						postele, které lze také sestavit na další manželskou
						postel. Obě ložnice nabízí dostatek úložných prostor.
					</p>
					<p className='mt-4'>
						Dětská postýlka je k dispozici na požádání.
					</p>
					<p className='mt-4'>
						Celý byt je zařízený dřevěným nábytkem v jednoduchém
						venkovském stylu. Většina oken je orientovaná na
						jihovýchod, s výhledem na místní kostel a říčku Březnou,
						protékající středem údolí.
					</p>

					<div className='w-full h-[1px] bg-golden/60 mt-8 mb-4'></div>

					<Features features={features}></Features>

					<div className='w-full h-[1px] bg-golden/60 mt-8 mb-4'></div>

					<Pricelist prices={prices}></Pricelist>

					<div className='w-full h-[1px] bg-golden/60 mt-8 mb-4'></div>
					<h2 className='font-oswald opacity-60 text-4xl leading-tight text-golden'>
						Rezervace
					</h2>

					<p className='mt-5'>
						Na závaznou objednávku vystavíme fakturu převodem.
					</p>
					<p className='mt-2'>
						Nebudete-li moci nastoupit na ubytování z Vaší příčiny,
						vrátíme 70% fakturované částky zpět.
					</p>
					<p className='mt-2'>
						Při zrušení pobytu z nařízení státu vracíme celou
						fakturovanou částku.
					</p>
				</div>

				<div className='flex-[2] sticky top-10 h-full'>
					<OrderForm lang={lang}></OrderForm>
				</div>
			</section>
		</div>
	)
}

export default VelkyByt
