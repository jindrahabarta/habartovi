import Image from 'next/image'
import Button from '@/_components/Buttons/Button'
import InstagramHabartovi from '@/_components/Instagram/InstagramHabartovi'

import UbytovaniImg from '@/../public/images/Ubytování.jpg'
import KeramickaDilnaImg from '@/../public/images/Homepage/KeramickáDílna.webp'
import { getTranslation } from '@/_i18n'

const Services = async ({ lang }: { lang: string }) => {
	const { t } = await getTranslation(lang, 'mainPage')

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
							alt={t('sections.services.accommodation.title')}
							className=' object-cover aspect-video '
						></Image>
					</div>

					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
							{t('sections.services.accommodation.title')}
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							{t('sections.services.accommodation.description')}
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
							link={'/ubytovani'}
							text={t('sections.services.accommodation.button')}
						></Button>
					</div>
				</div>
			</div>

			<div className='bg-green2 rounded-2xl py-20 sticky top-10'>
				<div className='container flex-col md:flex-row flex gap-5 sm:gap-10 items-center'>
					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
							{t('sections.services.ceramicsWorkshop.title')}
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							{t(
								'sections.services.ceramicsWorkshop.description'
							)}
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
							link={'/keramicka-dilna'}
							text={t(
								'sections.services.ceramicsWorkshop.button'
							)}
						></Button>
					</div>
					<div className='flex-1 '>
						<Image
							src={KeramickaDilnaImg}
							width={700}
							height={400}
							alt={t('sections.services.ceramicsWorkshop.title')}
							className=' object-cover aspect-video'
						></Image>
					</div>
				</div>
			</div>

			<InstagramHabartovi />
		</section>
	)
}

export default Services
