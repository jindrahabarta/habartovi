import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import LogoImg from '@/../public/images/habartovi-logo.png'

const Footer = () => {
	return (
		<footer className='bg-gray-500 pt-12 w-full text-white'>
			<div className='container w-full mx-auto flex gap-10 justify-between'>
				<div className='flex-1'>
					<Link href={'/'}>
						<Image
							src={LogoImg}
							alt='Habartovi logo'
							width={200}
						></Image>
					</Link>
				</div>

				<div className='flex-1'></div>

				<div className='flex-1'>
					<div className='rounded-2xl bg-white overflow-hidden h-44 w-full'>
						<iframe
							width='100%'
							height='100%'
							src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Moravsk%C3%BD%20Karlov%20103+(Ubytov%C3%A1n%C3%AD%20a%20Keramick%C3%A1%20d%C3%ADlna%20Habartovi)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
						></iframe>
					</div>

					<ul>
						<li>Telefon</li>
						<li>Email</li>
						<li>Moravsky Karlov 103, cervena voda</li>
					</ul>
				</div>
			</div>
			<div className='mt-6 text-center'>
				Web vytvořil <Link href='/'>MotionLabs</Link>
			</div>
		</footer>
	)
}

export default Footer
