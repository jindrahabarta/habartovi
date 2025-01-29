import React from 'react'

const Pricelist = ({
	prices,
}: {
	prices: { price: number; text: string }[]
}) => {
	return (
		<>
			<h2 className='font-oswald opacity-60 text-4xl leading-tight text-golden'>
				Ceník
			</h2>

			<div className='mt-5 p-8 bg-golden/30 rounded-lg border-black/15 border'>
				<ul className=' list-disc pl-4'>
					{prices.map((price, i) => (
						<li key={i} className=''>
							<span className='font-oswald font-semibold text-lg  block'>
								{price.price},- Kč
							</span>
							<span className='text-base sm:text-lg'>
								{price.text}
							</span>
						</li>
					))}
				</ul>

				<p className='mt-4 text-base'>*Ceny platí celoročně.</p>
			</div>
		</>
	)
}

export default Pricelist
