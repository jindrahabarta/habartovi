import Image from 'next/image'
import Button from '@/_components/Buttons/Button'
import InstagramHabartovi from '@/_components/Instagram/InstagramHabartovi'

import UbytovaniImg from '@/../public/images/Ubytování.jpg'
import KeramickaDilnaImg from '@/../public/images/Homepage/KeramickáDílna.webp'

const Services = () => {
	return (
		<section
			id='nase-sluzby'
			className='bg-green1 rounded-t-2xl md:rounded'
		>
			<div className='bg-green1 rounded-t-2xl md:rounded py-20 sticky top-10'>
				<div className='container flex-col-reverse md:flex-row flex gap-5 sm:gap-10 items-center'>
					<div className='flex-1 '>
						<Image
							src={UbytovaniImg}
							width={700}
							height={400}
							alt={'Ubytování¨v Moravské Karlově'}
							className=' object-cover aspect-video '
						></Image>
					</div>

					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
							Soukromé ubytování v přírodě
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							Nabízíme k pronájmu malý byt, který je součástí
							staré venkovské usedlosti postavené německou rodinou
							na přelomu 18. a 19. století
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
							link={'/ubytovani'}
							text={'Přejít na ubytování'}
						></Button>
					</div>
				</div>
			</div>

			<div className='bg-green2 rounded-2xl py-20 sticky top-10'>
				<div className='container flex-col md:flex-row flex gap-5 sm:gap-10 items-center'>
					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
							Keramická dílna
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							Navštivte naši hrnčířskou dílnu, kde se vyrábí
							keramika pro dům i zahradu. Nabízíme také možnost
							tvorby na zakázku, podle vašeho přání. V naší dílně
							vítáme všechny, kteří by si rádi vyzkoušeli práci s
							hlínou – modelování, točení na hrnčířském kruhu a
							relaxační tvoření.
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
							link={'/keramicka-dilna'}
							text={'Přejít na keramickou dílnu'}
						></Button>
					</div>
					<div className='flex-1 '>
						<Image
							src={KeramickaDilnaImg}
							width={700}
							height={400}
							alt={'Keramická dílna v Moravské Karlově'}
							className=' object-cover aspect-video'
						></Image>
					</div>
				</div>
			</div>

			<div className='bg-background rounded-t-2xl sticky top-10'>
				<InstagramHabartovi />
			</div>
		</section>
	)
}

export default Services
