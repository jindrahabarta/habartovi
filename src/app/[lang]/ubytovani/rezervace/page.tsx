import IconButton from '@/_components/Buttons/IconButton'
import MailIcon from '@/_components/Icons/MailIcon'
import PhoneIcon from '@/_components/Icons/PhoneIcon'
import Link from 'next/link'
import React from 'react'

const Rezervace = () => {
	return (
		<div className='pt-20'>
			<section className='container'>
				<h1 className='font-oswald text-center md:text-[6rem] leading-tight text-golden/60'>
					Rezervace
				</h1>

				<div className='flex mt-10 gap-10'>
					<div className='flex-1'>
						<h2 className='font-oswald opacity-60 text-4xl leading-tight text-golden'>
							Kontakt
						</h2>

						<ul className='flex flex-col gap-4'>
							<li className='flex items-center gap-4 group'>
								<IconButton
									link={'tel:775180052'}
									className='bg-secondary group-hover:bg-golden duration-300'
								>
									<PhoneIcon className='w-8 text-white'></PhoneIcon>
								</IconButton>
								<Link
									className='text-xl font-bold font-oswald group-hover:text-golden duration-300'
									href={'sdfs'}
								>
									Tel.: +420 775 180 052
								</Link>
							</li>

							<li className='flex items-center gap-4 group'>
								<IconButton
									link={'tel:775180052'}
									className='bg-secondary group-hover:bg-golden duration-300'
								>
									<MailIcon className='w-8 text-white'></MailIcon>
								</IconButton>
								<Link
									className='text-xl font-bold font-oswald group-hover:text-golden duration-300'
									href={'sdfs'}
								>
									Email.: habartovi@email.cz
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex-1'>
						<iframe
							id='embed-4pKpEM_bOPm67oIBNWVPI'
							src='https://www.megaubytko.cz/embed/booking?id=embed-4pKpEM_bOPm67oIBNWVPI&amp;accommodationId=8116&amp;token=4f03dee24d9dcfadc8403440fbfffef7&amp;primary_color=rgba%28166%2C179%2C125%2C1%29&amp;secondary_color=%23f0a559&amp;background_color=rgba%28255%2C255%2C255%2C1%29&amp;text_color=rgba%2824%2C29%2C34%2C1%29'
							width='100%'
							height='900px'
							scrolling='no'
						></iframe>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Rezervace
