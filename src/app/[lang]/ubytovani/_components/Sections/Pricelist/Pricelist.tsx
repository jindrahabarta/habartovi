import React from 'react'

const Pricelist = ({
	prices,
	title,
	bottomText,
	lang,
}: {
	prices: { price: number; text: string }[]
	title: string
	bottomText: string
	lang: string
}) => {
	return (
		<>
			<h2 className='font-oswald opacity-60 text-4xl leading-tight text-golden'>
				{title}
			</h2>

			<div className='mt-5 p-8 bg-golden/30 rounded-lg border-black/15 border'>
				<ul className=' list-disc pl-4'>
					{prices.map((price, i) => (
						<li key={i} className=''>
							<span className='font-oswald font-semibold text-lg  block'>
								{price.price}
								{lang !== 'cs' ? ' CZK' : ',- Kč'}
							</span>
							<span className='text-base sm:text-lg'>
								{price.text}
							</span>
						</li>
					))}
				</ul>

				<p className='mt-4 text-base'>*{bottomText}</p>
			</div>
		</>
	)
}

export default Pricelist
