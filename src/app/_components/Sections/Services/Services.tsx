import React from 'react'
import Image from 'next/image'
import UbytovaniImg from '@/../public/images/Ubytování.jpg'
import Button from '@/_components/Buttons/Button'

const Services = () => {
	return (
		<section className='rounded-t-2xl overflow-hidden'>
			<div className='bg-green1 py-20'>
				<div className='container flex gap-10 items-center'>
					<div className='flex-1 '>
						<div className='aspect-video rounded-md overflow-hidden'>
							<Image
								src={UbytovaniImg}
								width={1000}
								height={800}
								alt={'Ubytování'}
								className=' object-cover'
							></Image>
						</div>
					</div>

					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-3xl uppercase font-bold'>
							Soukromé ubytování v přírodě
						</h2>
						<p className='mt-8 text-white'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Similique facere corporis cum adipisci
							temporibus quis delectus debitis eum laudantium
							illum, voluptate laboriosam repudiandae. Voluptas
							totam, accusamus est doloremque vel laborum?
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-8 '
							link={'/ubytovani'}
							text={'Přejít na ubytování'}
						></Button>
					</div>
				</div>
			</div>
			<div className='bg-green2 py-20'>
				<div className='container flex gap-10 items-center'>
					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-3xl uppercase font-bold'>
							Keramická dílna
						</h2>
						<p className='mt-8 text-white'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Similique facere corporis cum adipisci
							temporibus quis delectus debitis eum laudantium
							illum, voluptate laboriosam repudiandae. Voluptas
							totam, accusamus est doloremque vel laborum?
						</p>

						<Button
							className='bg-golden text-white hover:bg-goldenAccent mt-8 '
							link={'/keramicka-dilna'}
							text={'Keramická dílna'}
						></Button>
					</div>
					<div className='flex-1 '>
						<div className='aspect-video rounded-md overflow-hidden'>
							<Image
								src={UbytovaniImg}
								width={1000}
								height={800}
								alt={'Ubytování'}
								className=' object-cover'
							></Image>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
