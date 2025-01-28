import React from 'react'

const Pricelist = () => {
	return (
		<>
			<h2 className='font-oswald opacity-50 text-4xl leading-tight text-golden'>
				Ceník
			</h2>

			<div className='mt-5 p-8 bg-golden/30 rounded-lg border-black/15 border'>
				<ul className=' list-disc pl-4'>
					<li className=''>
						<span className='font-oswald font-semibold text-lg  block'>
							350,- Kč
						</span>
						<span className='text-base sm:text-lg'>
							za osobu/noc v letní sezóně 1.5.-31.10. maximální
							počet osob je 5.
						</span>
					</li>
					<li className='mt-2'>
						<span className='font-oswald font-semibold text-lg  block'>
							350,- Kč
						</span>
						<span className='text-base sm:text-lg'>
							za osobu/noc v zimní sezóně 1.11.-30.4.
						</span>
					</li>
					<li className='mt-2'>
						<span className='font-oswald font-semibold text-lg  block'>
							50,- Kč
						</span>
						<span className='text-base sm:text-lg'>
							za jednoho psa a noc.
						</span>
					</li>
					<li className='mt-2'>
						<span className='font-oswald font-semibold text-lg  block'>
							20,- Kč
						</span>
						<span className='text-lg'>
							Rekreační poplatek v obci Červená Voda na jednu noc
							pro osobu starší 18 let.
						</span>
					</li>
				</ul>

				<p className='mt-4 text-base'>
					Ceny platí celoročně. Rekreační poplatek v obci Červená Voda
					činí 10,- Kč na jednu noc pro osobu starší 18 let.
				</p>
			</div>
		</>
	)
}

export default Pricelist
