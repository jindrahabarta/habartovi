import Link from 'next/link'
import React from 'react'

const Eshop = () => {
	return (
		<section className=' container relative'>
			<h2 className='font-oswald text-[3rem] leading-none md:text-[6rem] text-golden md:text-[#f1d9a8]'>
				Eshop
			</h2>
			<p className='mt-10'>
				Nakoupit mé již hotové produkty můžete na E-shopu s keramikou{' '}
				<Link
					className='text-black hover:text-secondary'
					target='_blank'
					href={'https://www.helenpottery.cz/'}
				>
					<strong>www.helenpottery.cz</strong>
				</Link>
			</p>
		</section>
	)
}

export default Eshop
