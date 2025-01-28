import React from 'react'
import Carousel from '../_components/Sections/Carousel'
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

const MalyByt = () => {
	return (
		<div className='pt-14'>
			<Carousel></Carousel>

			<section className='container py-10 flex flex-col xl:flex-row gap-10'>
				<div className='flex-[3] relative '>
					<h1 className='font-oswald opacity-50  md:text-[6rem] leading-tight text-golden'>
						Malý apartmán
					</h1>

					<p className='mt-4'>
						V prvním podlaží naší velké usedlosti z 19. století je
						pro vás připravený malý a útulný byt řešený formou
						studia. Jeho okna jsou orientovaná na západ a poskytují
						kouzelný výhled na celé údolí.
					</p>

					<p className='mt-4'>
						Prostorná místnost zařízená v jednoduchém venkovském
						stylu vám nabízí jednu manželskou postel, jedno
						samostatné lůžko a pohovku, kterou lze rozložit (2
						přistýlky).
					</p>
					<p className='mt-4'>
						Kuchyňský kout je vybavený ledničkou, dvouplotýnkovým
						el. vařičem, rychlovarnou konvicí, mikrovlnnou troubou,
						pečící remoskou a varným nádobím. K dispozici máte také
						základní koření. Dále tu jsou jídelní kout, skleník a
						úložné prostory.
					</p>

					<div className='w-full h-[1px] bg-golden/50 mt-8 mb-4'></div>

					<Features features={features}></Features>

					<div className='w-full h-[1px] bg-golden/50 mt-8 mb-4'></div>

					<Pricelist></Pricelist>

					<div className='w-full h-[1px] bg-golden/50 mt-8 mb-4'></div>
					<h2 className='font-oswald opacity-50 text-4xl leading-tight text-golden'>
						Rezervace
					</h2>

					<div className='mt-5 grid grid-cols-2 gap-4'>
						<p>
							Na závaznou objednávku vystavíme fakturu převodem.
							Stornovací podmínky Nebudete-li moci nastoupit na
							ubytování z Vaší příčiny, vrátíme 70% fakturované
							částky zpět. Při zrušení pobytu z nařízení státu
							vracíme celou fakturovanou částku.
						</p>
					</div>
				</div>

				<OrderForm></OrderForm>
			</section>
		</div>
	)
}

export default MalyByt
