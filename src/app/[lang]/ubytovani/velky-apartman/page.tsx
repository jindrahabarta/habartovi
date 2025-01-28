import React from 'react'
import Carousel from '../_components/Sections/Carousel'
import Features from '../_components/Sections/Features/Features'
import Pricelist from '../_components/Sections/Pricelist/Pricelist'
import OrderForm from '../_components/Sections/OrderForm/OrderForm'

const VelkyByt = () => {
	return (
		<div className='pt-14'>
			<Carousel></Carousel>

			<section className='container py-10 gap-10'>
				<h1 className='font-oswald opacity-50 text-[8rem] leading-tight text-golden'>
					Velký apartmán
				</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Praesentium ea autem iste ipsa nemo dicta fuga quisquam
					quaerat explicabo ducimus, nostrum provident beatae laborum
					omnis reiciendis nulla aspernatur! Ipsam, officiis.
				</p>

				<div className='w-full h-[1px] bg-golden/50 mt-8 mb-4'></div>

				{/* <Features></Features> */}

				<div className='w-full h-[1px] bg-golden/50 mt-8 mb-4'></div>

				<Pricelist></Pricelist>

				<div className='w-full h-[1px] bg-golden/50 mt-8 mb-4'></div>

				<OrderForm></OrderForm>
			</section>
		</div>
	)
}

export default VelkyByt
